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
        <p className="section-eyebrow">join</p>

        <h1 className="text-4xl md:text-6xl font-black">
          if you build, apply.
        </h1>

        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          this is not for everyone.
        </p>

        <p className="text-sm text-white/50">
          no spectators. no passive members.
        </p>

        <div className="pt-6">
          <a href={FORM_URL} target="_blank">
            <Button size="lg" className="rounded-full">
              apply
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <PageSection
        eyebrow="show"
        title="what matters"
        description="that's enough."
        align="center"
      >
        <div className="mx-auto mt-8 max-w-xl space-y-4 text-left text-sm text-white/80">
          <p>show:</p>
          <p>- what you've built</p>
          <p>- or what you're trying to build</p>
        </div>
      </PageSection>

      {/* EXPECTATIONS */}
      <PageSection
        eyebrow="fit"
        title="if it makes sense to you,"
        description="you'll fit in."
        align="center"
      >
        <div className="max-w-xl mx-auto mt-6 text-sm text-white/70">no passive members.</div>
      </PageSection>

      {/* FINAL CTA */}
      <PageSection
        eyebrow="final"
        title="if you build, apply."
        description="that's enough."
        align="center"
      >
        <div className="flex justify-center mt-6">
          <a href={FORM_URL} target="_blank">
            <Button size="lg" className="rounded-full">
              apply
            </Button>
          </a>
        </div>
      </PageSection>
    </>
  );
}