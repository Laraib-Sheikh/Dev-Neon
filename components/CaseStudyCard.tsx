import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data";

export default function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index?: number;
}) {
  const num =
    typeof index === "number"
      ? String(index + 1).padStart(2, "0")
      : null;
  const cover = study.images?.[0];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group card-interactive block border hairline rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm hover:border-green relative"
    >
      {cover ? (
        <div className="relative aspect-[16/10] bg-panel overflow-hidden border-b hairline">
          <Image
            src={cover}
            alt={study.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ) : (
        <div
          className="pointer-events-none absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle, rgba(14,107,85,0.12), transparent 70%)",
          }}
        />
      )}

      <div className="p-6 sm:p-7 relative">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            {num && (
              <span className="font-display text-2xl font-semibold text-green/40 group-hover:text-green transition-colors shrink-0">
                {num}
              </span>
            )}
            <span className="tag-label text-soft truncate">{study.category}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {study.recent && (
              <span className="text-[0.7rem] font-mono text-green border border-green/30 bg-green-soft px-2 py-0.5 rounded">
                recent
              </span>
            )}
            {study.concept && (
              <span className="text-[0.7rem] font-mono text-rust border border-rust/30 bg-rust-soft px-2 py-0.5 rounded">
                concept
              </span>
            )}
          </div>
        </div>
        <h3 className="font-display text-xl font-semibold mb-2.5 group-hover:text-green transition-colors">
          {study.name}
        </h3>
        <p className="text-[0.925rem] text-soft leading-relaxed mb-5">
          {study.summary}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {study.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-soft bg-panel px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="text-sm text-green opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 font-medium">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
