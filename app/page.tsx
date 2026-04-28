export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bits&Bytes Noida
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Building the next generation of builders in Noida
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          After building a strong community in Lucknow, Bits&Bytes is expanding to Noida.
          We are assembling a founding team of developers, designers, and innovators.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/join"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Join the Founding Team
          </a>

          <a
            href="/about"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>

      </div>
    </div>
  );
}