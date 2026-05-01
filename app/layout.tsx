import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description: "City fork of Bits&Bytes",
};

function Navbar() {
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/join", label: "JOIN" },
    { href: "https://github.com/gobitsnbytes", label: "GITHUB", external: true },
    { href: "https://instagram.com/gobitsnbytes", label: "INSTAGRAM", external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#2a2a2a] bg-[#050505]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Bits&Bytes Noida logo" className="h-7 w-7 rounded-full object-cover" />
          <span className="text-sm font-semibold tracking-tight text-[#E5E5E5] md:text-base">
            BITS&amp;BYTES NOIDA
          </span>
        </Link>

        <div className="flex items-center gap-5 text-[11px] font-medium uppercase tracking-tight text-gray-400 md:gap-7 md:text-xs">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#E5E5E5]"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="transition hover:text-[#E5E5E5]">
                {item.label}
              </Link>
            )
          )}
        </div>
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
      <body className="min-h-screen bg-[#050505] font-sans text-[#E5E5E5] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}