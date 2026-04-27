import "./globals.css";

export const metadata = {
  title: "Bits&Bytes Noida",
  description: "Building the next generation of builders in Noida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}