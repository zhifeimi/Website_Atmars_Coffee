import { useRef } from "react";
import { Store } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ENTRIES = [
  {
    year: "2015",
    title: "The first Ariel's",
    body: "The first Ariel's opens. One café, one family, one promise.",
    highlight: false,
  },
  {
    year: "2015–2022",
    title: "Seven locals",
    body: "The family grows — seven cafés across the Illawarra, each one somebody's local.",
    highlight: false,
  },
  {
    year: "Dec 2022",
    title: "Dapto opens",
    body: "Ariel's Dapto opens at Kiosk K105, Dapto Mall. All-day breakfast and Campos coffee come to the heart of Dapto.",
    highlight: true,
  },
  {
    year: "Today",
    title: "Thank you, Dapto",
    body: "4.6★ on DoorDash, 4.5★ on Uber Eats, and a community that keeps coming back. Thank you, Dapto.",
    highlight: false,
    caveat: "we love our locals",
  },
];

/** About §4 — scrub-drawn vertical timeline, 2015 → Dapto → today. */
export default function Timeline() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-tl-line]", { scaleY: 1 });
        return;
      }

      // Central line draws as the section scrolls (scrub-linked).
      gsap.fromTo(
        "[data-tl-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: "[data-tl-track]",
            start: "top 72%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );

      // Nodes pop (spring) when crossed.
      gsap.utils.toArray<HTMLElement>("[data-tl-node]").forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: "back.out(2)",
            scrollTrigger: { trigger: node, start: "top 78%", once: true },
          },
        );
      });

      // Cards slide in from their side.
      gsap.utils.toArray<HTMLElement>("[data-tl-card]").forEach((card) => {
        const fromLeft = card.dataset.side === "left";
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -48 : 48 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 80%", once: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-pad relative overflow-hidden bg-cream">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-on-cream justify-center">
            The Journey
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-navy">
            The road to <em className="italic text-caramel">Dapto.</em>
          </h2>
        </div>

        <div data-tl-track className="relative mx-auto mt-16 max-w-4xl">
          {/* Central gold line (left rail on mobile) */}
          <div className="absolute bottom-4 left-7 top-2 w-[2px] -translate-x-1/2 bg-gold/25 md:left-1/2">
            <div data-tl-line className="h-full w-full origin-top bg-gold" />
          </div>

          {ENTRIES.map((entry, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={entry.year}
                className="relative pb-14 last:pb-0 md:grid md:grid-cols-2 md:gap-x-36"
              >
                {/* Node */}
                <div
                  data-tl-node
                  className={cn(
                    "absolute left-7 top-1 z-10 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border-2 font-display font-semibold md:left-1/2",
                    entry.highlight
                      ? "h-16 min-w-16 border-caramel bg-caramel px-4 text-lg text-cream shadow-card-warm"
                      : "h-14 min-w-14 border-gold bg-cream px-3 text-lg text-navy shadow-card",
                  )}
                >
                  {entry.highlight && (
                    <>
                      {/* Gold pulse ring — the hero node */}
                      <span className="absolute inset-0 -z-10 animate-ping rounded-full border-2 border-gold [animation-duration:2s]" />
                      <Store className="h-5 w-5 text-navy-ink" aria-hidden />
                    </>
                  )}
                  {entry.year}
                </div>

                {/* Card */}
                <div
                  data-tl-card
                  data-side={left ? "left" : "right"}
                  className={cn(
                    "pl-24 md:pl-0",
                    left
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2 md:text-left",
                  )}
                >
                  <h3 className="font-display text-[1.5rem] font-semibold leading-[1.15] text-espresso">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-[44ch] font-sans text-[1rem] leading-[1.7] text-navy-ink/75 md:max-w-none">
                    {entry.body}
                  </p>
                  {entry.caveat && (
                    <span
                      className="mt-2 inline-block font-hand text-xl text-berry"
                      style={{ transform: "rotate(-2deg)" }}
                    >
                      {entry.caveat}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
