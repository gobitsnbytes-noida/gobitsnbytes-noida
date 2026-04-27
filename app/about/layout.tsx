import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bits&Bytes Noida | Founding Team",
  description:
    "Learn about Bits&Bytes Noida — a student-led builder community focused on real-world projects. Meet the founding team and the vision behind the Noida chapter.",
  verification: {
    google:"kxsOlXIibWjV2NCJwp_BSTjfu5VoArR2Vh_00bpLoZA"
  }
    keywords: [
    "Bits&Bytes Noida",
    "student coding club noida",
    "teen developers noida",
    "school coding community india",
    "builder community noida",
  ],
  alternates: {
    canonical: "https://gobitsnbytes-noida.vercel.app/about",
  },
  openGraph: {
    title: "About Bits&Bytes Noida",
    description:
      "Meet the founding team and vision behind Bits&Bytes Noida.",
    url: "https://bitsnbytes-noida.vercel.app/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}