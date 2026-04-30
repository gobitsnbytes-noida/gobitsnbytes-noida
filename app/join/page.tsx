export default function Home() {
  return (
    <main className="relative px-6 py-24 max-w-3xl mx-auto">

      {/* subtle industrial grid */}
      <div className="absolute inset-0 -z-10 opacity-20 
        bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
        linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      {/* heading */}
      <h1 className="text-3xl font-medium tracking-tight">
        Bits&Bytes Noida
      </h1>

      <p className="text-xs text-gray-500 mt-1">
        city fork
      </p>

      {/* content */}
      <div className="mt-12 space-y-5 text-sm text-gray-300 leading-relaxed">

        <p>not a club.</p>
        <p>people who build.</p>
        <p>ships publicly.</p>
        <p>no spectators.</p>

      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="/join"
          className="text-sm underline underline-offset-4 hover:text-white"
        >
          join →
        </a>
      </div>

    </main>
  );
}