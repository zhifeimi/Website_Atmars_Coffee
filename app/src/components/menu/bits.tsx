/** Shared Framer-Motion building blocks for the menu page (UI interactions only). */

import { memo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeatureDish, MenuItem } from "./data";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const rowVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const chipPop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 16, delay: 0.25 },
  },
};

const MotionLink = motion.create(Link);

/* ------------------------------------------------------------------ */
/* Chips                                                               */
/* ------------------------------------------------------------------ */

export function SignatureChip({ className }: { className?: string }) {
  return (
    <motion.span
      variants={chipPop}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full bg-caramel px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-cream",
        className,
      )}
    >
      <Star className="h-2.5 w-2.5 fill-cream" />
      Signature
    </motion.span>
  );
}

export function PopularChip({ className }: { className?: string }) {
  return (
    <motion.span
      variants={chipPop}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full bg-berry px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-cream",
        className,
      )}
    >
      <Flame className="h-2.5 w-2.5" />
      Popular
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Menu row — serif name, dotted leader, price (printed-menu style)    */
/* ------------------------------------------------------------------ */

export function MenuRow({
  item,
  tone = "cream",
}: {
  item: MenuItem;
  tone?: "cream" | "navy";
}) {
  const onNavy = tone === "navy";
  return (
    <motion.div
      variants={rowVariants}
      className={cn(
        "group rounded-xl px-3 py-3 transition-colors duration-300 sm:px-4",
        onNavy ? "hover:bg-white/[0.05]" : "hover:bg-cream-warm",
      )}
    >
      <div className="flex items-baseline gap-3">
        <h3
          className={cn(
            "shrink-0 font-display text-[1.375rem] font-semibold leading-[1.15]",
            onNavy ? "text-cream" : "text-espresso",
          )}
        >
          {item.name}
        </h3>
        {item.signature && <SignatureChip />}
        {item.popular && <PopularChip />}
        {item.price && (
          <>
            <span
              aria-hidden
              className={cn(
                "mx-1 min-w-6 flex-1 -translate-y-1 border-b-2 border-dotted transition-colors duration-300",
                onNavy
                  ? "border-cream/35 group-hover:border-cream/60"
                  : "border-espresso/35 group-hover:border-espresso/60",
              )}
            />
            <span className="tnum shrink-0 font-sans text-base font-semibold text-caramel transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
              ${item.price}
            </span>
          </>
        )}
        {item.thumb && (
          <img
            src={item.thumb}
            alt={item.thumbAlt ?? ""}
            loading="lazy"
            className="h-16 w-16 shrink-0 -translate-y-1 self-center rounded-full border-2 border-gold/50 object-cover shadow-card transition-all duration-500 ease-out-expo md:scale-75 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100"
          />
        )}
      </div>
      {item.desc && (
        <p
          className={cn(
            "mt-1 max-w-[52ch] font-sans text-sm leading-relaxed",
            onNavy ? "text-cream/65" : "text-navy/70",
          )}
        >
          {item.desc}
        </p>
      )}
      {item.quote && (
        <p
          className={cn(
            "mt-1 max-w-[52ch] font-sans text-sm italic leading-relaxed",
            onNavy ? "text-cream/60" : "text-navy/60",
          )}
        >
          “{item.quote}”
        </p>
      )}
      {item.note && (
        <span
          className={cn(
            "mt-1 inline-block font-hand text-xl",
            item.noteColor === "berry" ? "text-berry" : "text-butterscotch",
          )}
          style={{ transform: "rotate(-2deg)" }}
        >
          {item.note}
        </span>
      )}
    </motion.div>
  );
}

/** Stagger wrapper for a group of menu rows. */
export function RowGroup({
  children,
  className,
  stagger = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Feature dish card (design.md §6.5)                                  */
/* ------------------------------------------------------------------ */

export function DishCard({ dish }: { dish: FeatureDish }) {
  return (
    <MotionLink
      to="/gallery"
      variants={cardVariants}
      className="group relative block cursor-pointer overflow-hidden rounded-2xl bg-cream-warm shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-card-warm"
    >
      {/* Gold hairline frame draw on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-3 z-20 rounded-xl border border-gold opacity-0 transition-opacity duration-500 group-hover:opacity-80"
      />
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          variants={{
            hidden: { scale: 1.15 },
            show: { scale: 1, transition: { duration: 1.2, ease: EASE } },
          }}
          className="h-full w-full"
        >
          <img
            src={dish.img}
            alt={dish.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.07]"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-ink/40 to-transparent"
        />
        {dish.signature && (
          <motion.span
            variants={chipPop}
            className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-caramel px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-cream"
          >
            <Star className="h-3 w-3 fill-cream" />
            Signature
          </motion.span>
        )}
        {dish.price && (
          <span className="tnum absolute -bottom-1 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy font-sans text-sm font-semibold text-gold shadow-card">
            ${dish.price}
          </span>
        )}
      </div>
      <div className="relative p-6 pt-5">
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
    </MotionLink>
  );
}

/** Staggered grid of feature dish cards. */
export function DishGrid({ dishes }: { dishes: FeatureDish[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: 0.12 }}
      className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {dishes.map((d) => (
        <DishCard key={d.name} dish={d} />
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Perpetual micro-animations (isolated + memoized)                    */
/* ------------------------------------------------------------------ */

/** Breathing butterscotch glow (waffles section header). */
function BreathingGlowInner({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      animate={{ opacity: [0.25, 0.4, 0.25] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={cn("espresso-glow pointer-events-none absolute", className)}
    />
  );
}
export const BreathingGlow = memo(BreathingGlowInner);

/** Slowly rotating gold fruit-slice-style circle motif (drinks section). */
function SpinMotifInner({ className }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 120 120"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={cn("pointer-events-none absolute", className)}
      fill="none"
    >
      <circle cx="60" cy="60" r="52" stroke="#c0a34e" strokeWidth="2" />
      <circle cx="60" cy="60" r="38" stroke="#c0a34e" strokeWidth="1" opacity="0.7" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={60 + 38 * Math.cos(a)}
            y1={60 + 38 * Math.sin(a)}
            x2={60 + 52 * Math.cos(a)}
            y2={60 + 52 * Math.sin(a)}
            stroke="#c0a34e"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </motion.svg>
  );
}
export const SpinMotif = memo(SpinMotifInner);
