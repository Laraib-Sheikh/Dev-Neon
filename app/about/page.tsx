import type { Metadata } from "next";
import Link from "next/link";
import TagLabel from "@/components/TagLabel";
import Reveal from "@/components/Reveal";
import { whyUs, audiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Dev Neon",
  description:
    "Dev Neon is a software development company helping startups and businesses turn ideas into digital products.",
};

export default function AboutPage() {
  return (
    <>
      <section className="max-w-wrap mx-auto px-6 pt-20 pb-20">
        <Reveal>
          <TagLabel>about</TagLabel>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-[22ch] leading-[1.1] mb-8">
            Software. Designed for growth.
          </h1>
          <p className="text-lg text-soft max-w-[58ch] leading-relaxed mb-5">
            Dev Neon is a software development company helping startups,
            businesses, and organizations turn ideas into powerful digital
            products.
          </p>
          <p className="text-lg text-soft max-w-[58ch] leading-relaxed">
            From SaaS platforms and business dashboards to mobile applications
            and AI-powered solutions, we design, develop, and launch software
            built for real-world users and long-term growth.
          </p>
        </Reveal>
      </section>

      <section className="border-y hairline bg-panel/60">
        <div className="max-w-wrap mx-auto px-6 py-20">
          <Reveal>
            <TagLabel>why us</TagLabel>
            <h2 className="font-display text-3xl font-semibold max-w-[24ch] mb-12">
              How we work with you.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyUs.map((v, i) => (
              <Reveal key={v.name} delay={i * 60}>
                <div className="border-t-2 border-green pt-5">
                  <h3 className="font-display text-lg font-semibold mb-2.5">
                    {v.name}
                  </h3>
                  <p className="text-sm text-soft leading-relaxed">{v.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-wrap mx-auto px-6 py-24">
        <Reveal>
          <TagLabel>who we work with</TagLabel>
          <h2 className="font-display text-3xl font-semibold max-w-[22ch] mb-10">
            Partners at every stage.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {audiences.map((a, i) => (
            <Reveal key={a.name} delay={i * 60}>
              <div className="card-interactive border hairline rounded-xl p-7 bg-white/80 hover:border-green">
                <h3 className="font-display text-lg font-semibold mb-2">
                  {a.name}
                </h3>
                <p className="text-sm text-soft leading-relaxed">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-wrap mx-auto px-6 pb-28 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold max-w-[24ch] mx-auto mb-6">
            Want to work together?
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
