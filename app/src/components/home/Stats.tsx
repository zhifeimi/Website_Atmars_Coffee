import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/hooks/use-lenis";

const STATS = [
  { value: 2015, format: (v: number) => String(Math.round(v)), label: "Family owned since" },
  { value: 7, format: (v: number) => String(Math.round(v)), label: "Illawarra locations" },
  { value: 4.6, format: (v: number) => `${v.toFixed(1)}★`, label: "DoorDash rating (200+ reviews)" },
  { value: 100, format: (v: number) => `${Math.round(v)}%`, label: "Campos coffee, always" },
];

/** Stats band with count-up numerals (home.md §5). */
export default function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray<HTMLElement>("[data-stat-value]");

      if (prefersReducedMotion()) {
        counters.forEach((el, i) => {
          el.textContent = STATS[i].format(STATS[i].value);
        });
        return;
      }

      counters.forEach((el, i) => {
        const target = STATS[i];
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target.value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
          onUpdate: () => {
            el.textContent = target.format(obj.v);
          },
        });
      });

      gsap.from("[data-stat-label]", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
      });

      gsap.from("[data-stat-hairline]", {
        scaleY: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        transformOrigin: "top",
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-navy py-16">
      <div className="container-site grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="relative flex flex-col items-center px-4 text-center">
            {i > 0 && (
              <span
                data-stat-hairline
                className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gold/25 lg:block"
              />
            )}
            <span
              data-stat-value
              className="tnum font-display text-5xl font-semibold text-gold md:text-6xl"
            >
              {stat.format(0)}
            </span>
            <span
              data-stat-label
              className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/75"
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
