import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bits&Bytes Noida",
  description:
    "Building the next generation of builders in Noida. Join the founding team and start building real projects.",
};

function Navbar() {
  return (
    <nav
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold" }}>Bits&Bytes Noida</div>
      <div style={{ display: "flex", gap: "16px" }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/events">Events</a>
        <a href="/join">Join</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: "20px",
        borderTop: "1px solid #eee",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p>© {new Date().getFullYear()} Bits&Bytes Noida</p>
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
      <body>
        <Navbar />

        <main style={{ minHeight: "80vh", padding: "20px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}