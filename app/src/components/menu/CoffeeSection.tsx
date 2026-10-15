/** Coffee & Tea — moody navy interlude. GSAP only (clip reveal, parallax, row stagger). */

import { useRef } from "react";
import { Coffee, Star, Flame } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import Steam from "@/components/Steam";
import { COFFEE_ITEMS } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-coffee-reveal]", { opacity: 1, y: 0 });
        gsap.set("[data-coffee-leader]", { scaleX: 1 });
        gsap.set("[data-coffee-img-wrap]", { clipPath: "inset(0% 0% 0% 0%)" });
        return;
      }

      // Image: clip reveal on entry, then parallax scrub.
      gsap.fromTo(
        "[data-coffee-img-wrap]",
        { clipPath: "inset(12% 8% 12% 8% round 2rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 2rem)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "[data-coffee-img-wrap]",
            start: "top 88%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        "[data-coffee-img]",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-coffee-img-wrap]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Header + rows stagger in; leaders draw; chips pop after their row.
      // Trigger on the section (which abuts the hero) so the entrance fires at
      // initial load even on short viewports — the list top can sit below 88%.
      const section = root.current;
      if (!section) return;
      gsap.fromTo(
        "[data-coffee-reveal]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        "[data-coffee-leader]",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          stagger: 0.07,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        "[data-coffee-chip]",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.07,
          duration: 0.5,
          delay: 0.35,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      id="coffee"
      ref={root}
      className="grain section-pad relative overflow-hidden bg-navy-deep"
    >
      <div className="container-site relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — sticky photographed feature */}
          <div className="relative lg:sticky lg:top-40 lg:col-span-5">
            <div
              data-coffee-img-wrap
              className="relative overflow-hidden rounded-[2rem]"
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                <img
                  data-coffee-img
                  src="/images/cappuccino-art.webp"
                  alt="Rosetta latte art in a grey ceramic cup on dark marble"
                  className="h-full w-full scale-[1.2] object-cover"
                  loading="lazy"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-ink/50 via-transparent to-transparent"
              />
              <Steam className="left-[12%] top-[8%] h-36 w-44" />
            </div>
            <span
              aria-hidden
              className="espresso-glow absolute -bottom-16 -left-16 -z-10 h-72 w-72"
            />
          </div>

          {/* Right — menu list */}
          <div className="lg:col-span-7" data-coffee-list>
            <span
              data-coffee-reveal
              className="eyebrow eyebrow-on-navy inline-flex"
            >
              House roast · La Marzocco
            </span>
            <h2
              data-coffee-reveal
              className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-cream"
            >
              Coffee &amp; <em className="italic text-butterscotch">Tea</em>
            </h2>

            <div className="mt-10">
              {COFFEE_ITEMS.map((item) => (
                <div
                  key={item.name}
                  data-coffee-reveal
                  className="group rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05] sm:px-4"
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="shrink-0 font-display text-[1.375rem] font-semibold leading-[1.15] text-cream">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span
                        data-coffee-chip
                        className="inline-flex shrink-0 items-center gap-1 rounded-full bg-berry px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-cream"
                      >
                        <Flame className="h-2.5 w-2.5" />
                        Popular
                      </span>
                    )}
                    {item.price && (
                      <>
                        <span
                          data-coffee-leader
                          aria-hidden
                          className="mx-1 min-w-6 flex-1 -translate-y-1 border-b-2 border-dotted border-gold/40 transition-colors duration-300 group-hover:border-gold/70"
                        />
                        <span className="tnum shrink-0 font-sans text-base font-semibold text-gold transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                          ${item.price}
                        </span>
                      </>
                    )}
                  </div>
                  {item.desc && (
                    <p className="mt-1 max-w-[52ch] font-sans text-sm leading-relaxed text-cream/65">
                      {item.desc}
                    </p>
                  )}
                  {item.note && (
                    <span
                      className="mt-1 inline-block font-hand text-xl text-butterscotch"
                      style={{ transform: "rotate(-2deg)" }}
                    >
                      {item.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Side note card */}
            <div
              data-coffee-reveal
              className="mt-10 flex items-start gap-4 rounded-2xl border border-gold/30 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Coffee className="h-5 w-5" />
              </span>
              <p className="font-sans text-[15px] leading-relaxed text-cream/85">
                Every cup starts on our La Marzocco with our award-winning house-roasted
                beans.
              </p>
            </div>

            <p
              data-coffee-reveal
              className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/80"
            >
              <Star className="h-3 w-3 fill-gold/80" />
              Award-winning house roast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
