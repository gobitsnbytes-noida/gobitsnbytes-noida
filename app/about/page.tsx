export default function About() {
  return (
    <main className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-20 bg-[#120F0A]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#97192C_0%,#3E1E68_35%,#120F0A_72%)] opacity-80" />

      <div className="mx-auto max-w-4xl">
        <p className="inline-flex items-center rounded-full border border-[#716F6C] bg-[#120F0A]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#FDBE6E]">
          about
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          Bits&amp;Bytes is a system.
        </h1>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-[#D0CFCE] md:text-base">
          <p>This is the Noida fork.</p>
          <p>Same floor.</p>
          <p>Different city.</p>
          <p>teen-led.</p>
          <p>ships publicly.</p>
          <p>we don't run sessions.</p>
          <p>we don't hand-hold.</p>
          <p>people show up.</p>
          <p>they build.</p>
          <p>they ship.</p>
          <p>that's the whole thing.</p>
        </div>
      </div>
    </main>
  );
}