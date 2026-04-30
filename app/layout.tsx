import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description: "City fork of Bits&Bytes",
};

function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="font-medium tracking-tight text-lg">
          Bits<span className="text-purple-400">&</span>Bytes Noida
        </div>

        <div className="flex gap-8 text-sm text-white/60">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/join" className="hover:text-white transition">Join</a>
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
      <body className="bg-[#050505] text-white">

        {/* subtle glow */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_40%)]" />

        <Navbar />

        <main>{children}</main>

      </body>
    </html>
  );
}