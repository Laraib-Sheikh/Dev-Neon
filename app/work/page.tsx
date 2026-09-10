import type { Metadata } from "next";
import TagLabel from "@/components/TagLabel";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — Dev Neon",
  description: "Featured work from Dev Neon — SaaS, mobile, e-commerce and AI projects.",
};

export default function WorkPage() {
  return (
    <section className="max-w-wrap mx-auto px-6 pt-20 pb-24">
      <Reveal>
        <TagLabel>work</TagLabel>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-[18ch] leading-[1.1] mb-6">
          Our featured work.
        </h1>
        <p className="text-lg text-soft max-w-[52ch] leading-relaxed mb-14">
          Projects marked{" "}
          <span className="font-mono text-xs text-rust border border-rust/30 bg-rust-soft px-1.5 py-0.5 rounded">
            concept
          </span>{" "}
          are Dev Neon-built demos — a look at how we&apos;d approach the
          problem end to end.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <CaseStudyCard study={s} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
