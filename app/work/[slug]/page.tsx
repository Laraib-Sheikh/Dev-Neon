import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TagLabel from "@/components/TagLabel";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return { title: `${study.name} — Dev Neon`, description: study.summary };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === params.slug);
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="max-w-wrap mx-auto px-6 pt-20 pb-24">
      <Reveal>
        <Link
          href="/work"
          className="text-sm text-soft hover:text-green mb-8 inline-flex items-center gap-1 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>{" "}
          All work
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-display text-3xl text-green/35 font-semibold">
            {num}
          </span>
          <TagLabel>{study.category}</TagLabel>
          {study.concept && (
            <span className="text-[0.7rem] font-mono text-rust border border-rust/30 bg-rust-soft px-2 py-0.5 rounded">
              concept project
            </span>
          )}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-[22ch] leading-[1.1] mb-5">
          {study.name}
        </h1>
        <p className="text-lg text-soft max-w-[54ch] leading-relaxed mb-14">
          {study.summary}
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 md:gap-14">
        <div className="md:col-span-2 space-y-10">
          <Reveal delay={80}>
            <div className="rounded-xl border hairline bg-white/70 p-7">
              <h2 className="tag-label mb-3">the challenge</h2>
              <p className="text-[1.05rem] text-ink/90 leading-relaxed">
                {study.problem}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border hairline bg-white/70 p-7">
              <h2 className="tag-label mb-3">our solution</h2>
              <p className="text-[1.05rem] text-ink/90 leading-relaxed mb-5">
                {study.solution}
              </p>
              {study.features && (
                <ul className="grid sm:grid-cols-2 gap-2">
                  {study.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-soft flex gap-2 items-start"
                    >
                      <span className="text-green mt-0.5">＋</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-xl border hairline bg-green-soft/60 p-7">
              <h2 className="tag-label mb-3">result</h2>
              <p className="text-[1.05rem] text-ink/90 leading-relaxed">
                {study.result}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="sticky top-24">
            <h2 className="tag-label mb-3">technology</h2>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-soft bg-panel px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-green text-paper px-5 py-3 rounded-md text-sm font-medium hover:bg-green-deep transition-colors"
            >
              Start a similar project
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-20 pt-10 border-t hairline text-center">
          <p className="font-display text-2xl font-semibold mb-6 max-w-[24ch] mx-auto">
            Have something similar in mind?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green text-paper px-7 py-3.5 rounded-md text-sm font-medium hover:bg-green-deep transition-all hover:shadow-lift hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
