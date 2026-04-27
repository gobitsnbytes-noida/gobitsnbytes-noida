import type React from "react";
import type { Metadata, Viewport } from "next";
import { Anton, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PageBackground } from "@/components/page-background";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { FloatingAiAssistant } from "@/components/client-only-components";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-accent-sans",
  weight: ["400"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3E1E68" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Bits&Bytes Noida | Student Builder Community",
    template: "%s | Bits&Bytes Noida",
  },

  description:
    "Bits&Bytes Noida is a student-led builder community focused on building real-world projects. Currently launching and forming the founding team.",

  keywords: [
    "Bits&Bytes Noida",
    "student coding club noida",
    "teen developers india",
    "school coding community",
    "builder community india",
  ],

  authors: [{ name: "Bits&Bytes Noida Team" }],
  creator: "Bits&Bytes Noida",
  publisher: "Bits&Bytes Noida",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.vercel.app",
    siteName: "Bits&Bytes Noida",
    title: "Bits&Bytes Noida",
    description:
      "Launching a premium student builder community in Noida.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bits&Bytes Noida",
    description:
      "Launching a premium student builder community in Noida.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Bits&Bytes Noida",
    url: "https://gobitsnbytes-noida.vercel.app",
    description:
      "A student-led builder community in Noida focused on real-world projects and execution.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/gobitsnbytes.noida",
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${anton.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>

      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <PageBackground />

          <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden">
            <Navigation />
            <main className="flex-1 w-full">{children}</main>
            <Footer />

            <Suspense fallback={null}>
              <FloatingAiAssistant />
            </Suspense>
          </div>

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}