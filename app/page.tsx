export default function Home() {
  return (
    <main className="px-6 py-24 max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-3xl font-semibold tracking-tight">
        Bits&Bytes Noida
      </h1>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mt-2">
        A city fork of Bits&Bytes
      </p>

      {/* Core message */}
      <div className="mt-10 space-y-4 text-gray-300 text-sm leading-relaxed">
        <p>
          This is not a club.
        </p>

        <p>
          It’s a group of people who build.
        </p>

        <p>
          If you’re here to learn by doing, you’ll fit in.
        </p>

        <p>
          If you’re here to watch, you probably won’t stay.
        </p>
      </div>

      {/* Action */}
      <div className="mt-12">
        <a
          href="/join"
          className="text-sm underline underline-offset-4 hover:text-white transition"
        >
          Join the fork →
        </a>
      </div>

    </main>
  );
}