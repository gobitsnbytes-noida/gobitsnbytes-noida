"use client";

const FORM_URL = "https://forms.gle/SSAbJfczyuJLswPL8";

export default function Join() {
  return (
    <main className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold uppercase tracking-tight text-[#f4efff] md:text-6xl">JOIN</h1>

        <div className="mt-10 space-y-3 text-sm uppercase tracking-tight text-[#b5a9cf] md:text-base">
          <p>IF YOU BUILD, APPLY.</p>
          <p>THIS IS NOT FOR EVERYONE.</p>
          <p>NO SPECTATORS. NO PASSIVE MEMBERS.</p>
        </div>

        <div className="mt-12 border-t border-[#4a3c67] pt-8 text-sm uppercase tracking-tight text-[#f4efff] md:text-base">
          <p>SHOW:</p>
          <p className="mt-2 text-[#b5a9cf]">- WHAT YOU&apos;VE BUILT</p>
          <p className="text-[#b5a9cf]">- OR WHAT YOU&apos;RE TRYING TO BUILD</p>
          <p className="mt-5">THAT&apos;S ENOUGH.</p>
        </div>

        <div className="mt-12">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-[#d2b4ff] bg-[#1a112b] px-5 py-2.5 text-sm font-medium uppercase tracking-tight text-[#f4efff] transition hover:bg-[#d2b4ff] hover:text-[#120a1f]"
          >
            APPLY &rarr;
          </a>
        </div>

        <div className="mt-10 text-sm uppercase tracking-tight text-[#9587b2]">
          <p>IF IT MAKES SENSE TO YOU, YOU&apos;LL FIT IN.</p>
        </div>
      </div>
    </main>
  );
}