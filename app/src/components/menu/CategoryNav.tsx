/** Sticky category pill nav — Framer Motion (layoutId glide), IntersectionObserver tracking. */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "./data";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/hooks/use-lenis";

const SCROLL_OFFSET = 140;

export default function CategoryNav() {
  const [active, setActive] = useState<string>(CATEGORIES[0].id);
  const [shown, setShown] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* Track active section via IntersectionObserver (middle viewport band). */
  useEffect(() => {
    const sections = CATEGORIES.map((c) =>
      document.getElementById(c.id),
    ).filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Slide the bar down once the hero has scrolled ~40% past. */
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("menu-hero");
      const threshold = hero ? hero.offsetHeight * 0.4 : window.innerHeight * 0.25;
      setShown(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* On mobile, keep the active pill visible inside the scrollable bar. */
  useEffect(() => {
    const bar = barRef.current;
    const pill = pillRefs.current[active];
    if (!bar || !pill) return;
    const target =
      pill.offsetLeft - bar.clientWidth / 2 + pill.clientWidth / 2;
    bar.scrollTo({
      left: target,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [active]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    setActive(id);
    window.scrollTo({
      top: y,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <motion.div
      initial={false}
      animate={{ y: shown ? 0 : "-110%", opacity: shown ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-16 z-40 -mb-[62px] border-b border-gold/25 bg-cream-warm/90 backdrop-blur-md md:top-20",
        !shown && "pointer-events-none",
      )}
    >
      <div
        ref={barRef}
        className="scrollbar-none flex items-center gap-2.5 overflow-x-auto px-5 py-3 md:justify-center md:px-8"
        role="tablist"
        aria-label="Menu categories"
      >
        {CATEGORIES.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              ref={(el) => {
                pillRefs.current[c.id] = el;
              }}
              role="tab"
              aria-selected={isActive}
              onClick={() => jump(c.id)}
              className={cn(
                "relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300",
                isActive
                  ? "border-navy text-cream"
                  : "border-navy/40 bg-transparent text-navy hover:border-navy",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="menu-cat-active"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-navy"
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-2">
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                )}
                {c.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
