"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ devneon build", className: "text-paper/50" },
  { text: "› product discovery ......... ", status: "done" },
  { text: "› interface + data model .... ", status: "done" },
  { text: "› web application ........... ", status: "done" },
  { text: "› ai integration ............ ", status: "done" },
  { text: "› deployment ................. ", status: "done" },
  { text: "✓ shipped to production", className: "text-rust mt-3", final: true },
];

export default function AnimatedTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const delay = visibleCount === 0 ? 400 : 520;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative bg-ink rounded-xl p-6 font-mono text-[0.8125rem] leading-loose shadow-lift overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(14,107,85,0.35), transparent 55%)",
        }}
      />
      <div className="relative">
        <div className="flex gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-rust/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
        </div>
        {lines.slice(0, visibleCount).map((line, i) => (
          <p
            key={i}
            className={`${line.className ?? "text-paper/85"} animate-line-in`}
          >
            {line.text}
            {line.status && <span className="text-green">{line.status}</span>}
            {i === visibleCount - 1 && visibleCount < lines.length && (
              <span
                className={`inline-block w-2 h-3.5 ml-0.5 align-middle bg-green ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </p>
        ))}
        {visibleCount === 0 && (
          <p className="text-paper/50">
            <span
              className={`inline-block w-2 h-3.5 align-middle bg-green ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </p>
        )}
      </div>
    </div>
  );
}
