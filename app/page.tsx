export default function Home() {
  return (
    <main className="relative px-6 py-20 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(229,229,229,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(229,229,229,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-tight text-gray-400">BITS&amp;BYTES NOIDA</p>

        <h1 className="mt-6 max-w-5xl text-4xl font-semibold uppercase tracking-tight text-[#E5E5E5] md:text-7xl md:leading-[0.95]">
          NOT A CLUB.
          <br />
          PEOPLE WHO BUILD.
          <br />
          SHIPS PUBLICLY.
          <br />
          NO SPECTATORS.
        </h1>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 text-sm uppercase tracking-tight text-gray-400">
          <p>CITY FORK</p>
          <p>TEEN-LED</p>
          <p>SAME SYSTEM. DIFFERENT CITY.</p>
        </div>

        <div className="mt-12">
          <a
            href="/join"
            className="inline-flex items-center border border-[#E5E5E5] px-5 py-2.5 text-sm font-medium uppercase tracking-tight text-[#E5E5E5] transition hover:bg-[#E5E5E5] hover:text-[#050505]"
          >
            JOIN &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}