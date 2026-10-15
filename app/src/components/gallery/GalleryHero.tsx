import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { SplitText } from "gsap/SplitText";
import CoffeeRing from "@/components/CoffeeRing";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** Gallery §1 — "The Good Stuff" typographic navy hero with drifting rings. */
export default function GalleryHero() {
  const root = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-gal-fade]", { opacity: 1, y: 0 });
        return;
      }

      const split = new SplitText(h1Ref.current, {
        type: "chars",
        charsClass: "gallery-hero-char",
      });
      gsap.set(split.chars, { yPercent: 110, rotate: 6, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        "[data-gal-rule]",
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
          "[data-gal-fade]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.1,
        );

      // Coffee rings drift at 0.6× scroll speed.
      gsap.utils.toArray<HTMLElement>("[data-gal-ring]").forEach((ring, i) => {
        gsap.fromTo(
          ring,
          { yPercent: i % 2 === 0 ? -14 : 14 },
          {
            yPercent: i % 2 === 0 ? 14 : -14,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="grain relative -mt-16 flex min-h-[48dvh] items-center justify-center overflow-hidden bg-navy-deep md:-mt-20"
    >
      {/* Drifting gold coffee rings */}
      <div data-gal-ring className="absolute -left-16 top-8">
        <CoffeeRing className="relative h-56 w-56" rotate={-14} opacity={0.12} />
      </div>
      <div data-gal-ring className="absolute -right-12 top-1/3">
        <CoffeeRing className="relative h-72 w-72" rotate={22} opacity={0.1} />
      </div>
      <div data-gal-ring className="absolute bottom-0 left-1/4 hidden md:block">
        <CoffeeRing className="relative h-40 w-40" rotate={48} opacity={0.08} />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 pb-14 pt-32 text-center md:pt-36">
        <span className="inline-flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span data-gal-rule className="block h-[1.5px] w-12 bg-gold" />
          Gallery · Atmars
          <span data-gal-rule className="block h-[1.5px] w-12 bg-gold" />
        </span>
        <h1
          ref={h1Ref}
          className="mx-auto mt-6 overflow-hidden whitespace-pre-wrap pb-[0.15em] -mb-[0.15em] font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-cream"
        >
          The <em className="italic text-butterscotch">good stuff.</em>
        </h1>
        <p
          data-gal-fade
          className="mx-auto mt-5 max-w-[52ch] font-sans text-xl font-light leading-[1.65] text-cream/85 opacity-0"
        >
          Fresh plates, careful pours, happy locals — straight from the kiosk at
          Null Island Mall.
        </p>
      </div>
    </section>
  );
}
