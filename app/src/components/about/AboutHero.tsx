import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** About §1 — "Our Story" navy-deep page hero. */
export default function AboutHero() {
  const root = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-about-fade]", { opacity: 1, y: 0 });
        return;
      }

      const split = new SplitText(h1Ref.current, {
        type: "chars",
        charsClass: "about-hero-char",
      });
      gsap.set(split.chars, { yPercent: 110, rotate: 6, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        "[data-about-rule]",
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
          "[data-about-fade]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3 + 0.9,
        );

      // Background scales 1 → 1.06, scrubbed over the first 80vh.
      gsap.fromTo(
        "[data-about-bg]",
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
      ref={root}
      className="grain relative -mt-16 flex min-h-[62dvh] items-center justify-center overflow-hidden bg-navy-deep md:-mt-20"
    >
      {/* Background photo at 22% over navy */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          data-about-bg
          src="/images/cafe-counter.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.22]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/70" />

      {/* Content */}
      <div className="container-site relative z-10 pb-16 pt-32 text-center md:pt-36">
        <span className="inline-flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span data-about-rule className="block h-[1.5px] w-12 bg-gold" />
          Family-owned · Illawarra · Est 2015
          <span data-about-rule className="block h-[1.5px] w-12 bg-gold" />
        </span>
        <h1
          ref={h1Ref}
          className="mx-auto mt-6 max-w-[16ch] overflow-hidden whitespace-pre-wrap pb-[0.15em] -mb-[0.15em] font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-cream"
        >
          Honest is our{" "}
          <em className="italic text-butterscotch">family recipe.</em>
        </h1>
        <p
          data-about-fade
          className="mx-auto mt-6 max-w-[56ch] font-sans text-xl font-light leading-[1.65] text-cream/85 opacity-0"
        >
          Seven cafés, one family, and a simple promise made in 2015 — serve
          the Illawarra food and coffee we'd proudly serve our own.
        </p>
      </div>
    </section>
  );
}
