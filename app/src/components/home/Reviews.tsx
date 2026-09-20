import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

type Review = { quote: string; source: "Google" | "DoorDash" | "Uber Eats" };

const REVIEWS: Review[] = [
  { quote: "The pancakes with berries and butterscotch sauce were 10/10!!", source: "DoorDash" },
  { quote: "Bacon and Egg roll was phenomenal – way more elevated than just a regular bacon and egg.", source: "DoorDash" },
  { quote: "We have been coming to Ariel's Dapto Mall since it opened… the awesome staff are so helpful and a pleasure to be served by.", source: "Google" },
  { quote: "Food was super high quality, plentiful and delicious. The service was prompt and so patient with our kids.", source: "Google" },
  { quote: "Everything was delicious and fast.", source: "Uber Eats" },
  { quote: "Delicious food. Great choices and variety.", source: "Uber Eats" },
];

const SOURCE_DOT: Record<Review["source"], string> = {
  Google: "bg-[#4285F4]",
  DoorDash: "bg-[#EB1700]",
  "Uber Eats": "bg-[#06C167]",
};

function Stars() {
  return (
    <span className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-gold">
          <path d="M12 2l2.9 6.26 6.6.57-5 4.4 1.5 6.47L12 16.9 5.99 19.7l1.5-6.47-5-4.4 6.6-.57z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full w-full shrink-0 select-none flex-col rounded-2xl bg-navy p-7 shadow-card">
      <Stars />
      <p className="mt-4 flex-1 font-display text-xl italic leading-relaxed text-cream">
        “{review.quote}”
      </p>
      <div className="mt-5 flex items-center gap-2.5">
        <span className={cn("h-2 w-2 rounded-full", SOURCE_DOT[review.source])} />
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/70">
          Verified {review.source} review
        </span>
      </div>
    </div>
  );
}

/** Reviews — draggable testimonial carousel (home.md §8). */
export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - perView);
  const clamped = Math.min(index, maxIndex);

  const go = useCallback(
    (next: number) => setIndex(((next % (maxIndex + 1)) + maxIndex + 1) % (maxIndex + 1)),
    [maxIndex],
  );

  // Auto-advance every 6s, paused on hover/drag.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(clamped + 1), 6000);
    return () => window.clearInterval(id);
  }, [paused, clamped, go]);

  const offsetPct = (100 / perView) * clamped;

  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <SectionHeading
          eyebrow="Word of Mouth"
          title={
            <>
              Real reviews, <em className="italic text-caramel">real locals.</em>
            </>
          }
        />

        {/* Platform rating chips */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {[
            { name: "Google", rating: "4.0" },
            { name: "Uber Eats", rating: "4.5" },
            { name: "DoorDash", rating: "4.6" },
          ].map((p) => (
            <span
              key={p.name}
              className="glass-chip inline-flex items-center gap-2 rounded-full !border-navy/15 !bg-navy px-4 py-2 font-sans text-xs font-semibold text-cream"
            >
              {p.name}
              <span className="tnum inline-flex items-center gap-1 text-gold">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-gold">
                  <path d="M12 2l2.9 6.26 6.6.57-5 4.4 1.5 6.47L12 16.9 5.99 19.7l1.5-6.47-5-4.4 6.6-.57z" />
                </svg>
                {p.rating}
              </span>
            </span>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragStart={() => setPaused(true)}
              onDragEnd={(_, info) => {
                setPaused(false);
                if (info.offset.x < -60) go(clamped + 1);
                else if (info.offset.x > 60) go(clamped - 1);
              }}
              animate={{ x: `-${offsetPct}%` }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.quote}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => go(clamped - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-navy text-navy transition-all duration-300 hover:bg-navy hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review page ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === clamped ? "w-7 bg-caramel" : "w-2 bg-navy/25 hover:bg-navy/50",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => go(clamped + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-navy text-navy transition-all duration-300 hover:bg-navy hover:text-cream"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
