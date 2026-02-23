"use client";

import { useEffect, useRef, useState } from "react";

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [forceStaticFallback, setForceStaticFallback] = useState(false);
  const fpsRef = useRef<number>(60);
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
    if (typeof navigator !== "undefined") {
      const concurrency = navigator.hardwareConcurrency || 4;
      // @ts-expect-error deviceMemory is non-standard but widely supported in Chromium
      const memory = navigator.deviceMemory || 4;

      if (concurrency <= 2 || memory <= 2) {
        // Extremely low end device, skip WebGL entirely to save battery and avoid panics
        setForceStaticFallback(true);
        return;
      } else if (concurrency <= 4 || memory <= 4) {
        // Lower end device, start with conservative defaults
        fpsRef.current = 30;
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

    const pixelRatio = Math.min(window.devicePixelRatio, dprMultiplier);

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

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    resize();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);

      // Skip if not visible or reduced motion is preferred
      if (!isVisible || prefersReducedMotion) return;

      // Frame rate limiting
      const elapsed = currentTime - lastFrameTimeRef.current;
      const currentFrameInterval = 1000 / fpsRef.current;

      if (elapsed < currentFrameInterval) return;

      // Dynamic Framerate Scaling (monitor requested framerate vs actual)
      // Ignore huge jumps (like switching tabs) which might spike the elapsed time
      if (elapsed > currentFrameInterval * 1.5 && elapsed < 1000) {
        frameDropsRef.current++;
        // If we consistently drop frames (e.g. 30 frames dropped), lower the target FPS
        if (frameDropsRef.current > 30 && fpsRef.current > 30) {
          fpsRef.current = 30;
          frameDropsRef.current = 0;
          console.warn("WebGL Shader: Performance degraded, dynamically scaling target FPS down to 30.");
        }
      } else {
        // Recover frame drop count if it's hitting targets consistently
        frameDropsRef.current = Math.max(0, frameDropsRef.current - 1);
      }

      lastFrameTimeRef.current = currentTime - (elapsed % currentFrameInterval);

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
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0 pointer-events-none"
      style={{
        width: "100vw",
        height: "100vh",
        willChange: "auto",
      }}
    />
  );
}
