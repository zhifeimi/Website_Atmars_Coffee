import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { SplitText } from "gsap/SplitText";
import OpenNowPill from "@/components/OpenNowPill";
import CoffeeRing from "@/components/CoffeeRing";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MASK =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 35%, black 70%)";

/** Visit page hero — "Find Us" (visit.md §1). GSAP-isolated (no Framer here). */
export default function VisitHero() {
  const root = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-visit-bg]", { opacity: 0.18, x: 0 });
        gsap.set("[data-visit-rule]", { scaleX: 1 });
        gsap.set("[data-visit-fade]", { opacity: 1, y: 0 });
        gsap.set("[data-visit-pill]", { opacity: 1, scale: 1 });
        return;
      }

      const split = new SplitText(h1Ref.current, { type: "chars" });
      gsap.set(split.chars, { yPercent: 110, rotate: 6, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        "[data-visit-bg]",
        { x: 80, opacity: 0 },
        { x: 0, opacity: 0.18, duration: 1 },
        0,
      )
        .fromTo(
          "[data-visit-rule]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, transformOrigin: "left" },
          0.2,
        )
        .to(
          split.chars,
          { yPercent: 0, rotate: 0, opacity: 1, stagger: 0.025, duration: 0.9 },
          0.35,
        )
        .fromTo(
          "[data-visit-fade]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.8 },
          1.0,
        )
        .fromTo(
          "[data-visit-pill]",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
          0.6,
        );

      // Slow drift parallax on the masked background photo.
      gsap.to("[data-visit-bg]", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="grain relative -mt-16 overflow-hidden bg-navy-deep pb-16 pt-28 md:-mt-20 md:pb-24 md:pt-40"
    >
      {/* Right-aligned photo at 18%, masked with a left→right navy fade */}
      <div aria-hidden className="absolute inset-y-0 right-0 w-full md:w-[60%]">
        <img
          data-visit-bg
          src="/images/takeaway-cup.webp"
          alt=""
          className="h-full w-full object-cover opacity-0"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/75 to-navy-deep/20"
      />
      <CoffeeRing
        className="-bottom-24 -right-16 h-80 w-80"
        opacity={0.08}
        rotate={-14}
      />

      {/* Content */}
      <div className="container-site relative">
        <div className="max-w-[640px]">
          <span className="inline-flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span
              data-visit-rule
              className="block h-[1.5px] w-12 origin-left scale-x-0 bg-gold"
            />
            Visit · Null Island Mall
          </span>
          <h1
            ref={h1Ref}
            className="mt-6 overflow-hidden whitespace-pre-wrap pb-[0.15em] -mb-[0.15em] font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-cream"
          >
            Right in the{" "}
            <em className="italic text-butterscotch">heart of Null Island.</em>
          </h1>
          <p
            data-visit-fade
            className="mt-6 max-w-[46ch] font-sans text-xl font-light leading-[1.65] text-cream/90 opacity-0"
          >
            Kiosk K105, Ground Floor, Null Island Mall — near the food court. Come hungry.
          </p>
          <span data-visit-pill className="mt-8 inline-block opacity-0">
            <OpenNowPill />
          </span>
        </div>
      </div>
    </section>
  );
}
