export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 py-20 text-[#D0CFCE] md:py-24">
      <div className="absolute inset-0 -z-20 bg-[#120F0A]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#97192C_0%,#3E1E68_35%,#120F0A_72%)] opacity-85" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(208,207,206,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(208,207,206,0.06)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute -left-20 top-8 -z-10 h-56 w-56 rounded-full bg-[#E45A92]/15 blur-3xl" />
      <div className="absolute -right-10 bottom-12 -z-10 h-56 w-56 rounded-full bg-[#FC920D]/15 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#716F6C] bg-[#120F0A]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#FDBE6E]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FC920D]" />
          Bits&Bytes Noida - city fork
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
          Local build. Same protocol. Teens who ship publicly.
        </h1>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#D0CFCE]/90 md:text-base">
          This is not a chapter, franchise, or branch office. This is a local instantiation of Bits&Bytes in Noida.
          We preserve the floor, adapt the ceiling, and build with city-native energy.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.15em] text-[#A09F9D]">
          <span className="rounded-full border border-[#413F3B] bg-[#120F0A]/80 px-3 py-1.5">Teen-led</span>
          <span className="rounded-full border border-[#413F3B] bg-[#120F0A]/80 px-3 py-1.5">Ships publicly</span>
          <span className="rounded-full border border-[#413F3B] bg-[#120F0A]/80 px-3 py-1.5">Builder-first</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/join"
            className="rounded-full border border-[#FDBE6E] bg-[#FC920D] px-6 py-3 text-sm font-medium text-[#120F0A] shadow-[0_8px_30px_rgba(252,146,13,0.25)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Join the build
          </a>
          <a
            href="https://gobitsnbytes.org/coc"
            className="rounded-full border border-[#716F6C] bg-[#120F0A]/60 px-6 py-3 text-sm font-medium text-[#D0CFCE] transition duration-200 hover:-translate-y-0.5 hover:border-[#A09F9D] hover:text-white"
          >
            Read canonical CoC
          </a>
        </div>

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#413F3B] bg-[#120F0A]/80 p-6 backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-[#716F6C]">
            <h2 className="text-sm uppercase tracking-[0.22em] text-[#FDBE6E]">The floor - never changes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#D0CFCE]">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC920D]" />Code of Conduct is reproduced exactly from the canonical page.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC920D]" />Founders section remains exact: names, roles, and descriptions unchanged.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC920D]" />Terminology stays strict: fork, city fork, local build, Bits&amp;Bytes Noida.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC920D]" />Operating condition stays fixed: teen-led and ships publicly.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#413F3B] bg-[#120F0A]/80 p-6 backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-[#716F6C]">
            <h2 className="text-sm uppercase tracking-[0.22em] text-[#FDBE6E]">The ceiling - must adapt</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#D0CFCE]">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E45A92]" />Visual identity borrows from Noida: color, texture, and pace.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E45A92]" />Programs are shaped by local schools, industries, and build constraints.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E45A92]" />Voice reads like Noida builders talking to other builders.</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#E45A92]" />No generic student org aesthetic and no corporate startup gloss.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#5D2F77]/60 bg-[#1E0509]/70 p-6 shadow-[0_10px_40px_rgba(62,30,104,0.25)]">
          <h3 className="text-sm uppercase tracking-[0.22em] text-[#E45A92]">Drift check before shipping</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#D0CFCE]">
            Remove the city name. If it still feels like Bits&amp;Bytes, it is correct. If it does not, it is drifting.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#A09F9D]">
            Never use chapter, franchise, branch, or affiliate.
          </p>
        </section>
      </div>
    </main>
  );
}