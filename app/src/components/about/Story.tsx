import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";

gsap.registerPlugin(ScrollTrigger);

/** About §2 — The beginning: family story split (45/55). */
export default function Story() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Images scale 0.92 → 1, staggered (main then overlap +0.2s).
      gsap.fromTo(
        "[data-story-img-main]",
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: "[data-story-media]", start: "top 75%", once: true },
        },
      );
      gsap.fromTo(
        "[data-story-img-over]",
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: { trigger: "[data-story-media]", start: "top 75%", once: true },
        },
      );
      // Caveat annotation pops with a spring.
      gsap.fromTo(
        "[data-story-caveat]",
        { scale: 0, rotate: -12 },
        {
          scale: 1,
          rotate: -3,
          duration: 0.7,
          delay: 0.5,
          ease: "back.out(2.2)",
          scrollTrigger: { trigger: "[data-story-media]", start: "top 75%", once: true },
        },
      );
      // Gentle parallax on both images.
      gsap.fromTo(
        "[data-story-img-main] img",
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-story-media]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Right column: eyebrow → words → paragraphs block reveals.
      gsap.from("[data-story-text] > *", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-story-text]", start: "top 78%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-pad relative overflow-hidden bg-cream">
      <div className="container-site grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Image stack (45%) */}
        <div data-story-media className="relative lg:col-span-5">
          <div className="espresso-glow absolute -inset-12" />
          <div
            data-story-img-main
            className="relative overflow-hidden rounded-[2rem] shadow-card-warm"
          >
            <img
              src="/images/hero-girl-cup.webp"
              alt="A customer enjoying an Atmars coffee in the sun"
              className="h-[380px] w-full scale-[1.15] object-cover md:h-[480px]"
              loading="lazy"
            />
          </div>
          <div
            data-story-img-over
            className="absolute -right-4 -top-10 w-[55%] overflow-hidden rounded-2xl border-[3px] border-gold shadow-card md:-right-8"
          >
            <img
              src="/images/latte-pour.webp"
              alt="The navy Atmars takeaway cup, out and about"
              className="h-48 w-full object-cover md:h-60"
              loading="lazy"
            />
          </div>
          <span
            data-story-caveat
            className="absolute -bottom-6 left-4 font-hand text-2xl text-butterscotch"
            style={{ transform: "rotate(-3deg)" }}
          >
            since 2019
          </span>
        </div>

        {/* Text (55%) */}
        <div data-story-text className="lg:col-span-7 lg:pl-6">
          <span className="eyebrow eyebrow-on-cream">The Beginning</span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-navy">
            A family café that{" "}
            <em className="italic text-caramel">grew with its locals.</em>
          </h2>
          <p className="mt-6 max-w-[58ch] font-sans text-[1.05rem] leading-[1.7] text-navy-ink/80">
            Atmars — A Virtual Café began in 2019 with one simple idea: the
            island deserved a café that felt like home. Family-owned from
            day one, we built our name on generous plates, properly made
            coffee, and remembering your usual order.
          </p>
          <p className="mt-5 max-w-[58ch] font-sans text-[1.05rem] leading-[1.7] text-navy-ink/80">
            Today there are three Atmars cafés across the region — and each
            one still runs on the same recipe: honest food, honest coffee,
            honest people.
          </p>
          <p className="mt-5 max-w-[58ch] font-sans text-[1.05rem] leading-[1.7] text-navy-ink/80">
            In March 2023 we opened our Null Island kiosk inside Null Island Mall,
            right near the food court — bringing the full Atmars experience to the
            heart of Null Island: all-day breakfast, house-made waffles, and
            award-winning house-roasted coffee, seven days a week.
          </p>
          <Link to="/menu" className="btn-ghost-navy group mt-9">
            See what's on the menu
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
