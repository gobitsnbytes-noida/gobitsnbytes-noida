import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description: "Building the next generation of builders in Noida",
};

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <div className="font-bold text-lg">Bits&Bytes Noida</div>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/about" className="hover:text-white">About</a>
        <a href="/join" className="hover:text-white">Join</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800 mt-10">
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}