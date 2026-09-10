"use client";

import { useState } from "react";
import { services } from "@/lib/data";

export default function ServiceGrid() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
      <div className="flex flex-col gap-1">
        {services.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`text-left rounded-lg px-4 py-3.5 transition-all duration-300 border ${
              active === i
                ? "bg-ink text-paper border-ink shadow-lift"
                : "border-transparent hover:bg-panel text-ink"
            }`}
          >
            <div className="flex items-baseline gap-3">
              <span
                className={`font-mono text-xs ${
                  active === i ? "text-green" : "text-soft"
                }`}
              >
                {s.tag}
              </span>
              <span className="font-display font-semibold text-[1.05rem]">
                {s.name}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div
        key={services[active].id}
        className="border hairline rounded-xl bg-white p-8 sm:p-10 min-h-[280px] animate-fade-up shadow-sm"
      >
        <span className="font-mono text-sm text-green">{services[active].tag}</span>
        <h3 className="font-display text-2xl font-semibold mt-2 mb-4">
          {services[active].name}
        </h3>
        <p className="text-[0.975rem] text-soft leading-relaxed mb-6">
          {services[active].description}
        </p>
        <p className="tag-label mb-3">ideal for</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {services[active].idealFor.map((item) => (
            <span
              key={item}
              className="text-xs font-medium text-ink/80 bg-panel px-3 py-1.5 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t hairline">
          {services[active].stack.map((t) => (
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
  );
}
