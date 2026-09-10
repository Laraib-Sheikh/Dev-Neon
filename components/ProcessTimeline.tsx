"use client";

import { useState } from "react";
import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="hidden lg:flex items-center gap-1 mb-10 overflow-x-auto pb-1">
        {processSteps.map((p, i) => (
          <div key={p.step} className="flex items-center flex-1 min-w-0">
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`group flex flex-col items-center gap-2 w-full transition-colors ${
                active === i ? "text-green" : "text-soft hover:text-ink"
              }`}
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono border transition-all duration-300 ${
                  active === i
                    ? "bg-green text-paper border-green scale-110"
                    : "bg-white border-line group-hover:border-green"
                }`}
              >
                {p.step}
              </span>
              <span className="font-display text-sm font-semibold truncate max-w-full">
                {p.name}
              </span>
            </button>
            {i < processSteps.length - 1 && (
              <div
                className={`h-px flex-1 mx-1 transition-colors duration-300 ${
                  i < active ? "bg-green" : "bg-line"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 -mx-1 px-1 scrollbar-thin">
        {processSteps.map((p, i) => (
          <button
            key={p.step}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 px-3.5 py-2 rounded-md text-sm font-medium border transition-colors ${
              active === i
                ? "bg-green text-paper border-green"
                : "bg-white hairline text-soft"
            }`}
          >
            {p.step} {p.name}
          </button>
        ))}
      </div>

      <div
        key={processSteps[active].step}
        className="rounded-xl bg-white border hairline p-8 sm:p-10 animate-fade-up"
      >
        <div className="flex items-baseline gap-4 mb-3">
          <span className="font-display text-3xl text-green font-semibold">
            {processSteps[active].step}
          </span>
          <h3 className="font-display text-2xl font-semibold">
            {processSteps[active].name}
          </h3>
        </div>
        <p className="text-[1.05rem] text-soft leading-relaxed max-w-[58ch]">
          {processSteps[active].detail}
        </p>
      </div>
    </div>
  );
}
