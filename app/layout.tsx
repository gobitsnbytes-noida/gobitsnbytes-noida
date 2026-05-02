import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description: "City fork of Bits&Bytes",
};

function Navbar() {
  const primaryNavLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/join", label: "JOIN" },
  ];

  const socialNavLinks = [
    { href: "https://github.com/gobitsnbytes-noida", label: "GITHUB", external: true },
    { href: "https://www.instagram.com/gobitsnbytes.noida", label: "INSTAGRAM", external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#4a3c67] bg-[#140d24]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src="/logo.svg" alt="Bits&Bytes Noida logo" className="h-7 w-7 rounded-full object-cover" />
          <span className="truncate text-xs font-semibold tracking-tight text-[#f4efff] sm:text-sm md:text-base">
            BITS&amp;BYTES NOIDA
          </span>
        </Link>

        <div className="hidden items-center gap-3 text-[11px] font-medium uppercase tracking-tight text-[#b5a9cf] sm:flex sm:gap-5 md:gap-7 md:text-xs">
          {primaryNavLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-[#e0c3ff]">
              {item.label}
            </Link>
          ))}
          {socialNavLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hidden transition hover:text-[#e0c3ff] md:inline"
            >
              {item.label}
            </a>
          ))}
        </div>

        <details className="group relative sm:hidden">
          <summary className="cursor-pointer list-none text-xs font-medium uppercase tracking-tight text-[#b5a9cf] transition hover:text-[#e0c3ff]">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 min-w-40 space-y-2 bg-[#140d24] p-3 text-right text-xs font-medium uppercase tracking-tight text-[#b5a9cf]">
            {primaryNavLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block transition hover:text-[#e0c3ff]">
                {item.label}
              </Link>
            ))}
            {socialNavLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-[#e0c3ff]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#120a1f] font-sans text-[#f4efff] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}