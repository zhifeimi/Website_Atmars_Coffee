import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FILTERS, countFor } from "./tiles";
import type { GalleryFilter } from "./tiles";

/** Gallery §2 — sticky filter pill bar with gliding active state. */
export default function FilterBar({
  filter,
  onChange,
}: {
  filter: GalleryFilter;
  onChange: (f: GalleryFilter) => void;
}) {
  return (
    <div className="sticky top-16 z-40 border-b border-gold/25 bg-cream-warm/90 backdrop-blur md:top-20">
      <div className="container-site flex justify-center py-4">
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="flex flex-wrap justify-center gap-2"
        >
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={active}
                onClick={() => onChange(f.key)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                  active ? "text-cream" : "text-navy/70 hover:text-navy",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="gallery-filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-navy"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                      active ? "bg-gold" : "bg-caramel/50",
                    )}
                  />
                  {f.label}
                  <span
                    className={cn(
                      "tnum text-[11px]",
                      active ? "text-gold" : "text-caramel",
                    )}
                  >
                    {countFor(f.key)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
