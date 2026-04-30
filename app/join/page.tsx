"use client";

import { PageSection } from "@/components/page-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FORM_URL =
  "https://forms.gle/SSAbJfczyuJLswPL8";

export default function Join() {
  return (
    <>
      {/* HERO */}
      <section className="section-shell text-center space-y-6">
        <p className="section-eyebrow">Join the Founding Team</p>

        <h1 className="text-4xl md:text-6xl font-black">
          Build something real.
        </h1>

        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Bits&Bytes Noida is forming its founding community of student builders.
          If you want to create real projects, not just learn — you belong here.
        </p>

        <p className="text-sm text-white/50">
          Limited spots • Early members only
        </p>

        <div className="pt-6">
          <a href={FORM_URL} target="_blank">
            <Button size="lg" className="rounded-full">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <PageSection
        eyebrow="Why Join"
        title="What you'll actually do"
        description="This is not a passive community. You’ll build, collaborate, and ship."
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3 mt-8">

          {[
            {
              title: "Build Real Projects",
              desc: "Work on actual products instead of just tutorials.",
            },
            {
              title: "Work with Builders",
              desc: "Surround yourself with serious, driven people.",
            },
            {
              title: "Grow Through Execution",
              desc: "Learn by doing, shipping, and improving.",
            },
          ].map((item) => (
            <div key={item.title} className="card-surface text-center">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}

        </div>
      </PageSection>

      {/* EXPECTATIONS */}
      <PageSection
        eyebrow="Expectations"
        title="Who should apply"
        description="We’re looking for people who want to build, not just watch."
        align="center"
      >
        <div className="max-w-xl mx-auto space-y-4 mt-6 text-white/70 text-sm">

          <p>• School students interested in tech</p>
          <p>• Willing to spend time building</p>
          <p>• Ready to collaborate and learn fast</p>
          <p>• Curious, consistent, and proactive</p>

        </div>
      </PageSection>

      {/* FINAL CTA */}
      <PageSection
        eyebrow="Start Now"
        title="Be part of the first batch"
        description="This is your chance to join early and shape the community."
        align="center"
      >
        <div className="flex justify-center mt-6">
          <a href={FORM_URL} target="_blank">
            <Button size="lg" className="rounded-full">
              Apply to Join
            </Button>
          </a>
        </div>
      </PageSection>
    </>
  );
}