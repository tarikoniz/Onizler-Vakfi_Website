"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-light border-y border-gray-light">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-charcoal group-hover:text-navy transition-colors">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full bg-navy/[0.06] flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-navy rotate-45" : "group-hover:bg-navy/10"
                }`}
              >
                <Plus className={`w-4 h-4 ${isOpen ? "text-white" : "text-navy"}`} />
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-charcoal/60 leading-relaxed pb-6 pr-12 text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
