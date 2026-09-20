/** Menu page hero — GSAP only (split-text headline + scrubbed bg scale). */

import { useRef } from "react";
import { Star, Clock } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { SplitText } from "gsap/SplitText";
import CoffeeRing from "@/components/CoffeeRing";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function MenuHero() {
  const root = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-hero-fade]", { opacity: 1, y: 0 });
        return;
      }

      const split = new SplitText(h1Ref.current, {
        type: "chars",
        charsClass: "hero-char",
      });
      gsap.set(split.chars, { yPercent: 110, rotate: 6, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        "[data-hero-rule]",
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
          "[data-hero-fade]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.14, duration: 0.8 },
          1.05,
        );

      // Background image slow push-in over the first ~80vh of scroll.
      gsap.fromTo(
        "[data-hero-bg]",
        { scale: 1 },
        {
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 0.8}`,
            scrub: true,
          },
        },
      );

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="menu-hero"
      ref={root}
      className="grain relative -mt-16 flex min-h-[62dvh] items-center justify-center overflow-hidden bg-navy-deep md:-mt-20"
    >
      {/* Background image at low opacity under navy */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          data-hero-bg
          src="/images/latte-topdown.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-navy-deep/55" />
      </div>

      {/* Large faint coffee-ring watermark, bottom-left */}
      <CoffeeRing
        className="-bottom-28 -left-24 h-96 w-96"
        opacity={0.1}
        rotate={-18}
      />

      {/* Content */}
      <div className="container-site relative z-10 pb-16 pt-32 text-center md:pt-36">
        <span className="inline-flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span data-hero-rule className="block h-[1.5px] w-12 bg-gold" />
          Ariel's Dapto · Served All Day
          <span data-hero-rule className="block h-[1.5px] w-12 bg-gold" />
        </span>
        <h1
          ref={h1Ref}
          className="mt-6 overflow-hidden font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-cream"
        >
          The <em className="italic text-butterscotch">Menu</em>
        </h1>
        <p
          data-hero-fade
          className="mx-auto mt-6 max-w-[56ch] font-sans text-xl font-light leading-[1.65] text-cream/85 opacity-0"
        >
          All-day breakfast, house-made waffles, burgers and award-winning
          Campos coffee. Prices as marked in-store; delivery platforms may
          vary.
        </p>
        <div
          data-hero-fade
          className="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0"
        >
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/90">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            = house signature
          </span>
          <span className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/90">
            <Clock className="h-3.5 w-3.5 text-gold" />
            All-day breakfast until close
          </span>
        </div>
      </div>
    </section>
  );
}
