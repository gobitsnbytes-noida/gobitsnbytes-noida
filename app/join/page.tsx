export default function Join() {
  return (
    <main className="px-6 py-24 max-w-xl mx-auto">

      <h1 className="text-2xl font-medium">
        join
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        if you build, apply.
      </p>

      <form className="mt-10 space-y-6">

        <input
          placeholder="name"
          className="w-full bg-transparent border-b border-gray-700 py-2 outline-none"
        />

        <input
          placeholder="email"
          className="w-full bg-transparent border-b border-gray-700 py-2 outline-none"
        />

        <textarea
          placeholder="what do you build?"
          className="w-full bg-transparent border-b border-gray-700 py-2 outline-none"
        />

        <button className="text-sm underline">
          submit →
        </button>

      </form>

    </main>
  );
}