"use client";

import { cn } from "@/lib/utils";
import { WebGLShader } from "@/components/ui/web-gl-shader";

type PageBackgroundProps = {
  className?: string;
};

export function PageBackground({ className }: PageBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[#060403]" />
      <WebGLShader className="absolute inset-0 opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(65%_40%_at_50%_12%,rgba(151,21,52,0.12)_0%,rgba(151,21,52,0)_70%)]" />
      <div className="absolute inset-0 opacity-20 bg-noise-texture" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />
    </div>
  );
}

export default PageBackground;

