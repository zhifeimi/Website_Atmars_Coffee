import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Award, Coffee, CupSoda } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import Steam from "@/components/Steam";
import CoffeeRing from "@/components/CoffeeRing";

gsap.registerPlugin(ScrollTrigger);

const FACTS = [
  { icon: Award, text: "Award-winning house-roasted coffee" },
  { icon: Coffee, text: "La Marzocco machine" },
  { icon: CupSoda, text: "Chai brewed from whole spices" },
];

/** About §5 — The craft: house roast & La Marzocco (navy-deep). */
export default function Craft() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Left text block reveals.
      gsap.from("[data-craft-text] > *", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-craft-text]", start: "top 78%", once: true },
      });

      // Mini-facts slide in left-to-right, staggered, icons pop.
      gsap.from("[data-craft-fact]", {
        opacity: 0,
        x: -28,
        duration: 0.7,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-craft-facts]", start: "top 85%", once: true },
      });
      gsap.from("[data-craft-fact-icon]", {
        scale: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(2)",
        scrollTrigger: { trigger: "[data-craft-facts]", start: "top 85%", once: true },
      });

      // Image clip-reveal + parallax.
      gsap.fromTo(
        "[data-craft-img]",
        { clipPath: "inset(8% 8% 8% 8% round 2rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 2rem)",
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 72%", once: true },
        },
      );
      gsap.fromTo(
        "[data-craft-img] img",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-craft-img]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="grain section-pad relative overflow-hidden bg-navy-deep">
      <CoffeeRing className="-left-24 top-16 h-80 w-80" rotate={-18} opacity={0.07} />

      <div className="container-site grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* Text */}
        <div className="relative lg:col-span-6">
          <Steam className="-left-8 -top-24 h-44 w-56 opacity-70" />
          <div data-craft-text className="relative">
            <span className="eyebrow eyebrow-on-navy">The Craft</span>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-cream">
              Great coffee is{" "}
              <em className="italic text-butterscotch">no accident.</em>
            </h2>
            <p className="mt-5 max-w-[50ch] font-sans text-[1.05rem] leading-[1.7] text-cream/85">
              We roast our own beans because we obsess over coffee the way we obsess
              over breakfast. Our award-winning house roast meets the La Marzocco
              every morning, dialled in by hand before the first flat white
              leaves the machine.
            </p>

            <ul data-craft-facts className="mt-8 space-y-4">
              {FACTS.map((fact) => (
                <li key={fact.text} data-craft-fact className="flex items-center gap-4">
                  <span
                    data-craft-fact-icon
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold"
                  >
                    <fact.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-sans text-[1rem] font-medium text-cream/90">
                    {fact.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/menu#coffee" className="btn-ghost-gold group mt-9">
              Taste the difference
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:col-span-6">
          <div className="espresso-glow absolute -inset-12" />
          <div data-craft-img className="relative overflow-hidden rounded-[2rem] shadow-card-warm">
            <img
              src="/images/latte-duo.jpg"
              alt="Two lattes beside gold pitchers on the counter"
              className="h-[380px] w-full scale-[1.18] object-cover md:h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
