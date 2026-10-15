import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/hooks/use-lenis";
import Steam from "@/components/Steam";
import CoffeeRing from "@/components/CoffeeRing";

const DRINKS = [
  { name: "Flat White", price: "5.20" },
  { name: "Cappuccino", price: "5.20" },
  { name: "Spiced Chai Latte", price: "5.90", note: "pair it with our date & walnut loaf" },
];

/** The Coffee — moody coffee feature (home.md §6). */
export default function Coffee() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        "[data-coffee-img]",
        { clipPath: "inset(8% 8% 8% 8% round 2rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 2rem)",
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        },
      );
      gsap.fromTo(
        "[data-coffee-img] img",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-coffee-img]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      gsap.from("[data-coffee-text] > *", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-coffee-text]", start: "top 78%", once: true },
      });
      gsap.from("[data-drink-leader]", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.8,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: { trigger: "[data-drink-list]", start: "top 85%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="grain section-pad relative overflow-hidden bg-navy-deep">
      <CoffeeRing className="-left-20 bottom-10 h-80 w-80" rotate={-24} opacity={0.07} />

      <div className="container-site grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* Image */}
        <div className="relative lg:col-span-7">
          <div className="espresso-glow absolute -inset-12" />
          <div data-coffee-img className="relative overflow-hidden rounded-[2rem] shadow-card-warm">
            <img
              src="/images/cappuccino-art.webp"
              alt="Rosetta latte art in a grey ceramic cup on dark marble"
              className="h-[420px] w-full scale-[1.18] object-cover md:h-[560px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="relative lg:col-span-5">
          <Steam className="-left-10 -top-24 h-44 w-56 opacity-70" />
          <div data-coffee-text className="relative">
            <span className="eyebrow eyebrow-on-navy">The Coffee</span>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-cream">
              Poured on a La Marzocco.{" "}
              <em className="italic text-butterscotch">Roasted in-house.</em>
            </h2>
            <p className="mt-5 max-w-[48ch] font-sans text-[1.05rem] leading-[1.7] text-cream/85">
              We serve our award-winning house roast — roasted with obsession,
              extracted with care. Every cup starts on our La Marzocco, and if
              chai is more your speed, ours is brewed from whole spices.
            </p>

            <ul data-drink-list className="mt-8 space-y-4">
              {DRINKS.map((drink) => (
                <li key={drink.name}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[1.375rem] font-semibold text-cream">
                      {drink.name}
                    </span>
                    <span data-drink-leader className="dotted-leader-light mx-1 flex-1" />
                    <span className="tnum font-sans text-base font-semibold text-gold">
                      ${drink.price}
                    </span>
                  </div>
                  {drink.note && (
                    <span className="mt-1 inline-block font-hand text-xl text-butterscotch" style={{ transform: "rotate(-2deg)" }}>
                      {drink.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <Link to="/menu" className="btn-ghost-gold group mt-9">
              See all drinks
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
