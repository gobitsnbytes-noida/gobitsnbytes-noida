import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description: "Building the next generation of builders in Noida",
};

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          Bits<span className="text-gray-400">&</span>Bytes Noida
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/events" className="hover:text-white transition">Events</a>
          <a href="/join" className="hover:text-white transition">Join</a>
        </div>

      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800 mt-20">
      © {new Date().getFullYear()} Bits&Bytes Noida
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}