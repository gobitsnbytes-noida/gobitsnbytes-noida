"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal, X } from "lucide-react";

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const framesRenderedRef = useRef<number>(0);
  const lastFpsCalculateTimeRef = useRef<number>(0);

  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [forceStaticFallback, setForceStaticFallback] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Stats state
  const [stats, setStats] = useState({
    fps: 0,
    targetFps: "Uncapped (Native)",
    dprMultiplier: 1.5,
    actualDpr: 1,
    canvasWidth: 0,
    canvasHeight: 0,
    concurrency: 4,
    memory: 4,
    renderer: "Unknown",
    vendor: "Unknown",
    degraded: false,
  });

  const fpsRef = useRef<number>(0); // 0 means uncapped
  const frameDropsRef = useRef<number>(0);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Intersection observer to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (forceStaticFallback) return;
    if (!canvasRef.current) return;

    // --- Hardware Feature Detection ---
    let dprMultiplier = 1.5;
    let concurrency = 4;
    let memory = 4;

    if (typeof navigator !== "undefined") {
      concurrency = navigator.hardwareConcurrency || 4;
      // @ts-expect-error deviceMemory is non-standard but widely supported in Chromium
      memory = navigator.deviceMemory || 4;

      if (concurrency <= 2 || memory <= 2) {
        // Extremely low end device, skip WebGL entirely to save battery and avoid panics
        setForceStaticFallback(true);
        return;
      } else if (concurrency <= 4 || memory <= 4) {
        // Lower end device, start with conservative defaults
        dprMultiplier = 1.0;
      }
    }

    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "default",
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      depth: false,
      stencil: false,
    });

    if (!gl) {
      console.warn("WebGL not supported, falling back to static background");
      return;
    }

    const rendererDebugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = rendererDebugInfo ? gl.getParameter(rendererDebugInfo.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    const vendor = rendererDebugInfo ? gl.getParameter(rendererDebugInfo.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR);

    let currentPixelRatio = Math.min(window.devicePixelRatio, dprMultiplier);

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
        precision mediump float;
        uniform vec2 resolution;
        uniform float time;

        void main() {
          vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
          float gx = p.x;

          vec3 deepPurple = vec3(0.24, 0.12, 0.41);
          vec3 vibrantPink = vec3(0.89, 0.35, 0.57);
          vec3 softCoral = vec3(1.0, 0.68, 0.68);

          // The "line" effect comes from this 1.0/abs() logic
          float wave = 0.015 / abs(p.y + sin(gx + time * 0.8) * 0.4);
          wave = clamp(wave, 0.0, 1.0);

          vec3 color = mix(deepPurple, vibrantPink, wave * 0.5);
          color = mix(color, softCoral, wave * 0.2 * sin(time * 0.5));

          gl_FragColor = vec4(color, wave * 0.8);
        }
      `;

    // Compile shaders
    const compileShader = (
      source: string,
      type: number,
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(
      fragmentShaderSource,
      gl.FRAGMENT_SHADER,
    );

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Create buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const timeLocation = gl.getUniformLocation(program, "time");

    let time = 0;

    // Stats update helper
    const updateStats = (w: number, h: number, isDegraded = false) => {
      setStats(s => ({
        ...s,
        canvasWidth: w,
        canvasHeight: h,
        concurrency,
        memory,
        renderer,
        vendor,
        dprMultiplier,
        actualDpr: currentPixelRatio,
        degraded: s.degraded || isDegraded,
        targetFps: fpsRef.current === 0 ? "Uncapped (Native)" : fpsRef.current.toString()
      }));
    }

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * currentPixelRatio;
      canvas.height = height * currentPixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      updateStats(canvas.width, canvas.height);
    };

    resize();
    lastFpsCalculateTimeRef.current = performance.now();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);

      if (!isVisible || prefersReducedMotion) return;

      const elapsed = currentTime - lastFrameTimeRef.current;

      // If we have a target FPS (e.g. from downscaling), throttle it
      if (fpsRef.current > 0) {
        const currentFrameInterval = 1000 / fpsRef.current;
        if (elapsed < currentFrameInterval) return;
        lastFrameTimeRef.current = currentTime - (elapsed % currentFrameInterval);
      } else {
        lastFrameTimeRef.current = currentTime;
      }

      // Track actual FPS
      framesRenderedRef.current++;
      if (currentTime - lastFpsCalculateTimeRef.current >= 1000) {
        const actualFps = framesRenderedRef.current;
        setStats(s => ({ ...s, fps: actualFps }));
        framesRenderedRef.current = 0;
        lastFpsCalculateTimeRef.current = currentTime;

        // Frame degradation logic
        // If native framerate drops terribly, seamlessly reduce resolution scaling
        if (fpsRef.current === 0 && actualFps < 45 && actualFps > 0) {
          frameDropsRef.current++;
          if (frameDropsRef.current > 3 && currentPixelRatio > 0.5) {
            currentPixelRatio = Math.max(0.5, currentPixelRatio - 0.5);
            resize();
            updateStats(canvas.width, canvas.height, true);
            frameDropsRef.current = 0;
            console.warn("WebGL Shader: Performance degraded, dropping pixel multiplier to", currentPixelRatio);
          }
        } else if (actualFps >= 50) {
          frameDropsRef.current = Math.max(0, frameDropsRef.current - 1);
        }
      }

      // Slower time progression
      time += 0.01;
      gl.uniform1f(timeLocation, time);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);

      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, [isVisible, prefersReducedMotion, forceStaticFallback]);

  // If reduced motion is preferred or hardware is too weak, show a static gradient instead
  if (prefersReducedMotion || forceStaticFallback) {
    return (
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #3E1E68 0%, #E45A92 50%, #FFACAC 100%)",
          opacity: 0.6,
        }}
      />
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-0 pointer-events-none"
        style={{
          width: "100vw",
          height: "100vh",
          willChange: "auto",
        }}
      />

      {/* Stats for nerds toggle & panel */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-2">
        {showStats && (
          <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 text-xs font-mono text-green-400 border border-green-500/30 w-72 shadow-2xl animate-fade-in shadow-black/50">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-green-500/20">
              <span className="font-bold text-green-300 tracking-wider">STATS FOR NERDS</span>
              <button onClick={() => setShowStats(false)} className="text-green-500 hover:text-green-300 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between"><span>Current FPS:</span><span className="text-white">{stats.fps}</span></div>
              <div className="flex justify-between"><span>Target FPS:</span><span className="text-white">{stats.targetFps}</span></div>
              <div className="flex justify-between"><span>Degraded Mode:</span><span className={stats.degraded ? "text-red-400 font-bold" : "text-white"}>{stats.degraded ? "YES" : "NO"}</span></div>
              <div className="flex justify-between mt-2 pt-2 border-t border-green-500/20"><span>DPR Multiplier:</span><span className="text-white">{stats.dprMultiplier}x</span></div>
              <div className="flex justify-between"><span>Actual DPR:</span><span className="text-white">{stats.actualDpr.toFixed(2)}x</span></div>
              <div className="flex justify-between mt-2 pt-2 border-t border-green-500/20"><span>Resolution:</span><span className="text-white">{stats.canvasWidth} x {stats.canvasHeight}</span></div>
              <div className="flex justify-between mt-2 pt-2 border-t border-green-500/20"><span>Concurrency:</span><span className="text-white">{stats.concurrency} Cores</span></div>
              <div className="flex justify-between"><span>Device RAM:</span><span className="text-white">~{stats.memory} GB</span></div>
              <div className="flex flex-col mt-2 pt-2 border-t border-green-500/20">
                <span>GPU Renderer:</span>
                <span className="text-white truncate opacity-80 mt-0.5" title={stats.renderer}>{stats.renderer}</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowStats(!showStats)}
          className="group p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all text-white/50 hover:text-white"
          title="Stats for nerds"
        >
          <Terminal className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
