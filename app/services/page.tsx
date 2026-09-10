import type { Metadata } from "next";
import Link from "next/link";
import TagLabel from "@/components/TagLabel";
import PackageCard from "@/components/PackageCard";
import Reveal from "@/components/Reveal";
import { services, packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Dev Neon",
  description:
    "SaaS, web, mobile, AI, UI/UX and backend development from Dev Neon.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-wrap mx-auto px-6 pt-20 pb-16">
        <Reveal>
          <TagLabel>services</TagLabel>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-[18ch] leading-[1.1]">
            What we build.
          </h1>
          <p className="mt-6 text-lg text-soft max-w-[52ch] leading-relaxed">
            We transform business ideas into reliable, scalable, and
            user-friendly software products — from first concept to long-term
            growth.
          </p>
        </Reveal>
      </section>

      <section className="max-w-wrap mx-auto px-6 pb-24">
        <div className="space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 50}>
              <div className="card-interactive grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-10 border hairline rounded-xl p-8 bg-white/80 hover:border-green">
                <div>
                  <span className="font-mono text-sm text-green">{s.tag}</span>
                  <h2 className="font-display text-2xl font-semibold mt-2">
                    {s.name}
                  </h2>
                </div>
                <div>
                  <p className="text-[0.975rem] text-soft leading-relaxed max-w-[58ch]">
                    {s.description}
                  </p>
                  <p className="tag-label mt-5 mb-2.5">ideal for</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.idealFor.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium text-ink/80 bg-panel px-3 py-1.5 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-soft bg-green-soft px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-panel/60 border-y hairline">
        <div className="max-w-wrap mx-auto px-6 py-24">
          <Reveal>
            <TagLabel>packages</TagLabel>
            <h2 className="font-display text-3xl font-semibold max-w-[22ch] mb-4">
              Fixed-scope packages, not hourly guesswork.
            </h2>
            <p className="text-soft max-w-[56ch] mb-12 leading-relaxed">
              Every project is scoped before we start, so you know the outcome
              and the price before we write any code. Ranges vary with scope —
              we&apos;ll confirm exact pricing after a short discovery call.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-wrap mx-auto px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold max-w-[24ch] mx-auto mb-6">
            Not sure which package fits? Tell us the project.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-green text-paper px-7 py-3.5 rounded-md text-sm font-medium hover:bg-green-deep transition-all hover:shadow-lift hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </Reveal>
      </section>
    </>
  );
}
