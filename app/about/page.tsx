"use client";

import { PageSection } from "@/components/page-section";

export default function About() {
  return (
    <main className="relative z-10 bg-transparent">

      {/* ABOUT */}
      <PageSection
        align="center"
        eyebrow="About"
        title="Bits&Bytes Noida"
        description="Bits&Bytes Noida is the upcoming chapter of the Bits&Bytes network. We aim to build a strong student-led builder community focused on real-world projects and execution."
        className="pt-24 md:pt-32"
      />

      {/* TEAM */}
      <PageSection
        align="center"
        eyebrow="Core Team"
        title="The original builders"
        description="The founding team behind Bits&Bytes."
      >
        <div className="grid gap-6 md:grid-cols-3 mt-8">

          {[
            { name: "Yash Singh", role: "Co-Founder" },
            { name: "Aadrika Maurya", role: "Co-Founder" },
            { name: "Akshat Kushwaha", role: "Co-Founder" },
          ].map((member) => (
            <div key={member.name} className="card-surface text-center">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-white/60">{member.role}</p>
            </div>
          ))}

        </div>
      </PageSection>

      {/* NOIDA TEAM */}
      <PageSection
        align="center"
        eyebrow="Noida Chapter"
        title="Founding Team - Noida"
        description="Building the next chapter."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">

          {[
            { name: "Aryan Chauhan", role: "Lead & Tech" },
            { name: "Nisha Rawat", role: "Sponsors" },
            { name: "Disha Yadav", role: "Operations Head" },
            { name: "Aditya Veer Kumar", role: "Creative Marketing Head" },
          ].map((member) => (
            <div key={member.name} className="card-surface text-center">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-white/60">{member.role}</p>
            </div>
          ))}

        </div>
      </PageSection>

    </main>
  );
}