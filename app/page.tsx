export default function Home() {
  return (
    <main className="min-h-screen flex items-center px-6">

      <div className="max-w-4xl mx-auto w-full">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Bits&Bytes Noida
        </h1>

        <p className="mt-3 text-sm text-white/50">
          city fork
        </p>

        <div className="mt-12 space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">

          <p>
            not a club.
          </p>

          <p>
            a place where people build.
          </p>

          <p>
            no spectators.
          </p>

          <p>
            if you make things, you’ll fit in.
          </p>

        </div>

        <div className="mt-14">
          <a
            href="/join"
            className="inline-block border border-white/20 px-6 py-3 text-sm hover:bg-white hover:text-black transition"
          >
            join the fork →
          </a>
        </div>

      </div>

    </main>
  );
}