"use client";

import { CpuArchitecture } from "@/components/ui/cpu-architecture";

export default function CpuDemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white">
      <h1 className="text-2xl font-bold mb-8">CPU Architecture Component Demo</h1>
      <div className="w-full max-w-2xl p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <CpuArchitecture className="w-full h-auto" />
      </div>
      <div className="mt-8 text-center text-sm text-white/50">
        <p>This component is now used as the global loading animation.</p>
        <p className="mt-2 italic">Replace existing "Entropy" component occurrences.</p>
      </div>
    </div>
  );
}
