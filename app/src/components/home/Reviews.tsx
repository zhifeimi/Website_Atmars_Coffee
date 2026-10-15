import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

/** Sample testimonials — Atmars is fictional, so are these. */
type Review = { quote: string; name: string };

const REVIEWS: Review[] = [
  { quote: "The berry pancakes with butterscotch are dangerously good. Saturday mornings are sorted.", name: "Priya, weekend regular" },
  { quote: "Best bacon & egg roll I've had — proper bread, proper bacon, zero shortcuts.", name: "Tom, weekday commuter" },
  { quote: "They remember my order and my kids' names. It genuinely feels like our local.", name: "Hannah, mum of two" },
  { quote: "Generous plates, quick service, and so patient with our little ones.", name: "Marco & Elena" },
  { quote: "Smooth, never-bitter flat whites. I've stopped trying other places.", name: "Sam, flat white devotee" },
  { quote: "Huge menu, everything fresh, and the waffles alone are worth the trip.", name: "Aisha, first visit" },
];

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
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/70">
          {review.name}
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
              Kind words, <em className="italic text-caramel">from our locals.</em>
            </>
          }
        />

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
