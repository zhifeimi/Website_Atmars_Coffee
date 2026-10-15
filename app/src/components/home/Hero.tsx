import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { SplitText } from "gsap/SplitText";
import Steam from "@/components/Steam";
import OpenNowPill from "@/components/OpenNowPill";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
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
        "[data-hero-shade]",
        { opacity: 0.9 },
        { opacity: 1, duration: 1 },
        0,
      )
        .fromTo(
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
        .from("[data-hero-sub]", { y: 20, duration: 0.8 }, 0.35)
        .fromTo(
          "[data-hero-fade]",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.8 },
          1.0,
        );

      // Scroll: content parallaxes up + fades; bg pushes in.
      gsap.to("[data-hero-content]", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
      gsap.fromTo(
        "[data-hero-bg]",
        { scale: 1 },
        {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
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
      className="relative -mt-16 flex min-h-[100svh] items-end overflow-hidden md:-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          data-hero-bg
          src="/images/hero-iced-palms.webp"
          fetchPriority="high"
          alt="Iced coffee against palm trees on a bright summer day"
          className="h-full w-full object-cover"
        />
      </div>
      <div data-hero-shade className="hero-shade absolute inset-0" />

      <Steam className="left-[6%] bottom-[10%] z-10 h-40 w-48" />

      {/* Vertical edge text (desktop) */}
      <div
        aria-hidden
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-cream/40">
          Atmars — A Virtual Café
        </span>
      </div>

      {/* Content */}
      <div
        data-hero-content
        className="container-site relative z-10 w-full pb-[12vh]"
      >
        <div className="max-w-[720px]">
          <span className="inline-flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span data-hero-rule className="block h-[1.5px] w-12 bg-gold" />
            Null Island Mall · 0°N 0°E · Est 2019
          </span>
          <h1
            ref={h1Ref}
            className="mt-6 overflow-hidden font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-cream"
          >
            Honest Coffee.
            <br />
            Honest <em className="italic text-butterscotch">Food.</em>
          </h1>
          {/* Visible from first paint: this is the LCP element, so only slide it. */}
          <p
            data-hero-sub
            className="mt-6 max-w-[52ch] font-sans text-xl font-light leading-[1.65] text-cream/90"
          >
            Award-winning house-roasted coffee, all-day breakfast and our famous
            waffles — served with a smile inside Null Island Mall.
          </p>
          <div data-hero-fade className="mt-9 flex flex-wrap gap-4 opacity-0">
            <Link to="/menu" className="btn-gold group">
              Explore the Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link to="/visit" className="btn-ghost-gold">
              Find Us
            </Link>
          </div>
        </div>
      </div>

      {/* Live hours pill */}
      <div data-hero-fade className="absolute bottom-[6vh] right-6 z-10 hidden opacity-0 sm:right-10 md:block">
        <OpenNowPill />
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-[4vh] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/50">
          scroll
        </span>
        <span className="relative block h-16 w-px overflow-hidden bg-gold/30">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold animate-scroll-dot" />
        </span>
      </div>
    </section>
  );
}
