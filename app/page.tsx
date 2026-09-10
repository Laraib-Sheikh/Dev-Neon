import Link from "next/link";
import TagLabel from "@/components/TagLabel";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import Marquee from "@/components/Marquee";
import {
  caseStudies,
  whyUs,
  audiences,
  techStack,
} from "@/lib/data";

const stages = [
  { label: "Just an idea", hint: "Concept → MVP" },
  { label: "A prototype", hint: "Validate → Build" },
  { label: "An existing app", hint: "Modernize → Scale" },
  { label: "Needs improvement", hint: "Audit → Evolve" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-mesh overflow-hidden">
        <div className="max-w-wrap mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-16 items-center">
          <div>
            <p className="font-display text-green font-semibold tracking-tight text-lg mb-4 animate-fade-up">
              Dev Neon
            </p>
            <h1
              className="font-display text-[2.6rem] sm:text-[3.35rem] font-semibold leading-[1.06] tracking-tight max-w-[16ch] animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Digital products that move businesses forward.
            </h1>
            <p
              className="mt-6 text-lg text-soft max-w-[46ch] leading-relaxed animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              We design, develop, and launch SaaS platforms, web apps, mobile
              experiences, and AI-powered solutions — built for real users and
              long-term growth.
            </p>
            <div
              className="mt-9 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/contact"
                className="bg-green text-paper px-6 py-3 rounded-md text-sm font-medium hover:bg-green-deep transition-all hover:shadow-lift hover:-translate-y-0.5"
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className="border hairline px-6 py-3 rounded-md text-sm font-medium hover:border-green hover:text-green transition-all hover:-translate-y-0.5 bg-white/60 backdrop-blur-sm"
              >
                View our work
              </Link>
            </div>
            <p
              className="mt-8 text-sm text-soft/80 font-mono animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              Software. Designed for Growth.
            </p>
          </div>

          <div className="animate-float">
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      <Marquee />

      {/* What we build */}
      <section className="max-w-wrap mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-12">
            <TagLabel>what we build</TagLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[28ch]">
              Ideas into reliable, scalable software.
            </h2>
            <p className="mt-4 text-soft max-w-[52ch] leading-relaxed">
              From SaaS and dashboards to mobile apps and AI — we transform
              business ideas into products people actually use.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ServiceGrid />
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-sm text-green hover:text-green-deep font-medium inline-flex items-center gap-1 group"
            >
              Explore all services
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Featured work */}
      <section className="bg-panel/50 border-y hairline">
        <div className="max-w-wrap mx-auto px-6 py-24">
          <Reveal>
            <div className="flex items-end justify-between mb-12 gap-6">
              <div>
                <TagLabel>featured work</TagLabel>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[20ch]">
                  Products we&apos;ve shaped.
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden sm:inline-flex text-sm text-green hover:text-green-deep shrink-0 font-medium items-center gap-1 group"
              >
                View all work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <CaseStudyCard study={s} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {caseStudies.slice(3).map((s, i) => (
                <CaseStudyCard key={s.slug} study={s} index={i + 3} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-wrap mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-12">
            <TagLabel>process</TagLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[24ch]">
              We don&apos;t just write code.
            </h2>
            <p className="mt-4 text-soft max-w-[52ch] leading-relaxed">
              A structured process designed to reduce risk and deliver products
              efficiently — from discovery to continuous improvement.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ProcessTimeline />
        </Reveal>
      </section>

      {/* Technologies */}
      <section className="border-y hairline bg-ink text-paper">
        <div className="max-w-wrap mx-auto px-6 py-24">
          <Reveal>
            <TagLabel>technologies</TagLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[28ch] mb-4 !text-paper">
              Chosen for the product — not forced into one stack.
            </h2>
            <p className="text-paper/65 max-w-[52ch] leading-relaxed mb-14">
              We pick the right tools for each build so your software stays
              maintainable and ready to grow.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([group, items], i) => (
              <Reveal key={group} delay={i * 60}>
                <div>
                  <p className="font-mono text-xs text-rust mb-3">{group}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span
                        key={t}
                        className="text-sm text-paper/80 border border-paper/15 px-2.5 py-1 rounded-md hover:border-green hover:text-paper transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dev Neon */}
      <section className="max-w-wrap mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-12">
            <TagLabel>why dev neon</TagLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[22ch]">
              Built around your business, not just the brief.
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {whyUs.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <div className="border-t-2 border-green pt-5 group">
                <h3 className="font-display text-lg font-semibold mb-2.5 group-hover:text-green transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-soft leading-relaxed">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-panel/60 border-y hairline">
        <div className="max-w-wrap mx-auto px-6 py-24">
          <Reveal>
            <div className="mb-12">
              <TagLabel>who we work with</TagLabel>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[20ch]">
                Partners at every stage.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => (
              <Reveal key={a.name} delay={i * 70}>
                <div className="card-interactive bg-white border hairline rounded-xl p-6 h-full hover:border-green">
                  <h3 className="font-display font-semibold text-lg mb-2.5">
                    {a.name}
                  </h3>
                  <p className="text-sm text-soft leading-relaxed">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* From idea to product */}
      <section className="max-w-wrap mx-auto px-6 py-24">
        <Reveal>
          <div className="text-center mb-12">
            <TagLabel>from idea to product</TagLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[24ch] mx-auto">
              You don&apos;t need everything figured out.
            </h2>
            <p className="mt-4 text-soft max-w-[44ch] mx-auto leading-relaxed">
              Wherever you are in the journey, we help determine the next step.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="relative text-center rounded-xl border hairline bg-white/70 p-6 hover:border-green transition-colors group">
                <span className="font-mono text-xs text-green mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display font-semibold mb-1.5">{s.label}</p>
                <p className="text-xs text-soft font-mono opacity-70 group-hover:opacity-100 transition-opacity">
                  {s.hint}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(14,107,85,0.12), transparent 60%)",
          }}
        />
        <div className="max-w-wrap mx-auto px-6 py-28 text-center relative">
          <Reveal>
            <TagLabel>let&apos;s build</TagLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-[22ch] mx-auto mb-6">
              Let&apos;s build something great.
            </h2>
            <p className="text-soft max-w-[46ch] mx-auto mb-10 leading-relaxed">
              Tell us what you&apos;re building, what problem you&apos;re
              solving, and where you want to go. We&apos;ll help you find the
              best path forward.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-green text-paper px-7 py-3.5 rounded-md text-sm font-medium hover:bg-green-deep transition-all hover:shadow-lift hover:-translate-y-0.5"
              >
                Start your project
              </Link>
              <a
                href="mailto:hello@devneon.com"
                className="inline-block border hairline px-7 py-3.5 rounded-md text-sm font-medium hover:border-green hover:text-green transition-all bg-white/60"
              >
                hello@devneon.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
