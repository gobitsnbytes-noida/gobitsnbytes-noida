"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageSection } from "@/components/page-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">

      {/* HERO */}
      <section className="section-shell text-center space-y-6">
        <p className="section-eyebrow">Launching Soon</p>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Bits&Bytes Noida
        </h1>

        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
          We don’t just ideate, we dominate.
        </p>

        <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
          A premium student-led builder community focused on creating real-world projects.
          Currently in planning stage — building the founding team.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link href="/join">
            <Button size="lg" className="rounded-full">
              Explore
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>


      {/* ABOUT */}
      <PageSection
        eyebrow="About"
        title="Building the next generation of student builders"
        description="Bits&Bytes Noida is the upcoming chapter of the Bits&Bytes network. We aim to bring together ambitious school students to build real projects and grow through execution."
        align="center"
      />


      {/* BACKED BY */}
      <PageSection
        eyebrow="Network"
        title="Backed by Bits&Bytes"
        description="Bits&Bytes is a teen-led coding community known for high-impact hackathons and real project building. The Noida chapter brings the same vision to a new city."
        align="center"
      />


      {/* TEAM */}
      <PageSection
        eyebrow="Founding Team"
        title="Meet the builders behind this"
        align="center"
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


      {/* CTA */}
      <PageSection
        eyebrow="Join Us"
        title="Be part of something early"
        description="We’re currently forming our founding community. If you want to build, learn, and grow — this is your place."
        align="center"
      >
        <div className="flex justify-center mt-6">
          <Link href="/join">
            <Button size="lg" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </PageSection>

    </div>
  );
}