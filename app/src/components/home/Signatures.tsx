import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/hooks/use-lenis";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Dish = {
  name: string;
  price?: string;
  desc: string;
  img: string;
  alt: string;
  signature?: boolean;
  tag?: string;
  tagColor?: "butterscotch" | "berry";
};

const DISHES: Dish[] = [
  {
    name: "Meridian Benedict",
    price: "19.50",
    desc: "Two poached free-range eggs, wilted greens & golden turmeric hollandaise on toasted sourdough.",
    img: "/images/atmars-benny.jpg",
    alt: "Meridian Benedict — poached eggs with golden hollandaise on sourdough",
    signature: true,
    tag: "the signature",
    tagColor: "butterscotch",
  },
  {
    name: "Island Big Breakfast",
    price: "21.00",
    desc: "Eggs your way, smoky bacon, pork & fennel sausage, potato rosti, roast tomato & field mushrooms.",
    img: "/images/big-breakfast.jpg",
    alt: "Full big breakfast plate with eggs, bacon, tomato and mushrooms",
  },
  {
    name: "Ricotta Hotcake Tower",
    price: "18.50",
    desc: "Three fluffy ricotta hotcakes, mixed berries, mascarpone & warm maple.",
    img: "/images/pancakes.jpg",
    alt: "Hotcakes stacked with berries and dripping sauce",
    signature: true,
    tag: "weekend favourite",
    tagColor: "berry",
  },
  {
    name: "Equator Burrito",
    price: "17.90",
    desc: "Scrambled eggs, black beans, charred corn, pico de gallo, avocado & cheddar — grilled.",
    img: "/images/hero-burrito.jpg",
    alt: "Equator Burrito half-wrapped in Atmars navy paper",
  },
  {
    name: "Blueberry Maple Waffle",
    price: "17.90",
    desc: "House-made Belgian waffle, blueberries, maple syrup & vanilla bean cream.",
    img: "/images/waffles.jpg",
    alt: "Waffles with maple syrup and blueberries, overhead",
  },
  {
    name: "Orbit Smash Burger",
    price: "19.90",
    desc: "Double smashed beef, aged cheddar, pickles, onion jam & house sauce on a milk bun.",
    img: "/images/cheeseburger.jpg",
    alt: "Orbit Smash Burger with melty cheese, close-up",
  },
];

function DishCard({ dish }: { dish: Dish }) {
  return (
    <Link
      to="/menu"
      data-dish-card
      className="group relative w-[78vw] max-w-[420px] shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl bg-cream-warm shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-card-warm sm:w-[420px]"
    >
      <div className="relative overflow-hidden">
        <img
          src={dish.img}
          alt={dish.alt}
          className="arch h-[300px] w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.07] sm:h-[340px]"
          loading="lazy"
        />
        {dish.signature && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-caramel px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-cream">
            <Star className="h-3 w-3 fill-cream" />
            Signature
          </span>
        )}
        {dish.price && (
          <span className="tnum absolute -bottom-1 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy font-sans text-sm font-semibold text-gold shadow-card">
            ${dish.price}
          </span>
        )}
      </div>
      <div className="relative p-6 pt-5">
        {dish.tag && (
          <span
            className={cn(
              "absolute -top-7 right-6 font-hand text-2xl",
              dish.tagColor === "berry" ? "text-berry" : "text-butterscotch",
            )}
            style={{ transform: "rotate(-3deg)" }}
          >
            {dish.tag}
          </span>
        )}
        <h3 className="font-display text-[1.375rem] font-semibold leading-[1.15] text-espresso">
          {dish.name}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-navy/75">
          {dish.desc}
        </p>
        <span className="mt-4 block h-px w-0 bg-gold transition-all duration-500 ease-out-expo group-hover:w-full" />
        <span className="mt-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View dish →
        </span>
      </div>
    </Link>
  );
}

/** Signature dishes — pinned horizontal showcase (home.md §4). */
export default function Signatures() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const fraction = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const setProgress = (p: number) => {
        const idx = Math.min(
          DISHES.length,
          Math.max(1, Math.round(p * (DISHES.length - 1)) + 1),
        );
        if (fraction.current) fraction.current.textContent = String(idx);
        if (bar.current) bar.current.style.transform = `scaleX(${Math.max(0.02, p)})`;
      };

      if (prefersReducedMotion()) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const trackEl = track.current!;
        const viewportEl = viewport.current!;

        const distance = () =>
          Math.max(0, trackEl.scrollWidth - viewportEl.clientWidth);

        // Entrance: cards slide in before the pin engages.
        // fromTo with explicit ends, and no `once`: when init lands on a
        // restored/deep scroll past this section, Layout's scrollTo(0) +
        // refresh() re-captures a from-tween's ends mid-flight as the hidden
        // state (and `once` self-kills the trigger outright) — either way the
        // cards stay invisible forever.
        gsap.fromTo(
          "[data-dish-card]",
          { x: 120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: "expo.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
            },
          },
        );

        const tween = gsap.to(trackEl, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setProgress(self.progress),
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      // Mobile: native snap-scroll, progress bar tracks scroll position.
      mm.add("(max-width: 1023px)", () => {
        const viewportEl = viewport.current!;
        const onScroll = () => {
          const max = viewportEl.scrollWidth - viewportEl.clientWidth;
          setProgress(max > 0 ? viewportEl.scrollLeft / max : 0);
        };
        viewportEl.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => viewportEl.removeEventListener("scroll", onScroll);
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="grain relative overflow-hidden bg-navy-deep lg:flex lg:h-screen lg:items-center"
    >
      <div className="container-site grid w-full grid-cols-1 gap-10 py-20 lg:grid-cols-[35%_65%] lg:gap-0 lg:py-0">
        {/* Left fixed panel */}
        <div className="flex flex-col justify-center lg:pr-14">
          <span className="eyebrow eyebrow-on-navy">House Signatures</span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-cream">
            The dishes Null Island{" "}
            <em className="italic text-butterscotch">keeps talking about.</em>
          </h2>
          <p className="mt-5 max-w-[42ch] font-sans text-[1.05rem] leading-[1.7] text-cream/85">
            Six plates that built our name — scroll through the spread, from
            saffron hollandaise to butterscotch-drenched pancakes.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <span className="font-display text-3xl text-gold">
              <span ref={fraction}>1</span>
              <span className="mx-1 text-cream/40">/</span>
              <span className="text-cream/60">{DISHES.length}</span>
            </span>
            <span className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-cream/15">
              <span
                ref={bar}
                className="absolute inset-0 origin-left bg-gold"
                style={{ transform: "scaleX(0.02)" }}
              />
            </span>
          </div>
        </div>

        {/* Right — horizontal track */}
        <div
          ref={viewport}
          className="scrollbar-none -mx-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div ref={track} className="flex w-max items-stretch gap-6 lg:gap-8 lg:pl-6">
            {DISHES.map((dish) => (
              <DishCard key={dish.name} dish={dish} />
            ))}
            {/* Terminal card */}
            <div className="flex w-[70vw] max-w-[320px] shrink-0 snap-center items-center justify-center sm:w-[320px]">
              <Link
                to="/menu"
                className="group flex h-[70%] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-gold p-8 text-center transition-all duration-500 ease-out-expo hover:-translate-y-2"
              >
                <span className="font-display text-3xl font-semibold leading-tight text-navy-ink">
                  Still
                  <br />
                  hungry?
                </span>
                <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-navy-ink">
                  See the full menu
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
