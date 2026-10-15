import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CoffeeRing from "@/components/CoffeeRing";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Subtle warm glow that pulses behind the Bopple hero card (3s loop). */
const GlowPulse = memo(function GlowPulse() {
  return (
    <motion.span
      aria-hidden
      animate={{ opacity: [0.25, 0.5, 0.25] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="espresso-glow absolute -inset-6 rounded-[2rem]"
    />
  );
});

type Platform = {
  name: string;
  tagline: string;
  href: string;
  hero?: boolean;
  badge?: string;
};

const PLATFORMS: Platform[] = [
  {
    name: "Bopple",
    tagline: "Order ahead & skip the queue",
    href: SITE.bopple,
    hero: true,
    badge: "our preferred pickup partner",
  },
  {
    name: "Uber Eats",
    tagline: "Delivery",
    href: "https://www.ubereats.com/",
  },
  {
    name: "DoorDash",
    tagline: "Delivery",
    href: "https://www.doordash.com/",
  },
  {
    name: "Hey You",
    tagline: "Order ahead & earn on every coffee",
    href: "https://www.heyyou.com.au/",
  },
];

function PlatformCard({ p, index }: { p: Platform; index: number }) {
  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.8, delay: 0.25 + index * 0.1, ease: EASE }}
      className={cn(
        "group relative flex flex-col rounded-2xl p-6 text-left transition-all duration-300 ease-out-expo hover:-translate-y-1.5 md:p-7",
        p.hero
          ? "bg-gold text-navy-ink shadow-card-warm hover:bg-gradient-to-r hover:from-gold hover:to-butterscotch"
          : "border border-gold/30 bg-cream/[0.06] text-cream backdrop-blur-sm hover:border-gold",
      )}
    >
      {p.hero && <GlowPulse />}
      <span className="relative flex items-start justify-between gap-3">
        <span className="font-display text-2xl font-semibold md:text-[1.75rem]">
          {p.name}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] opacity-0 transition-all duration-300 group-hover:opacity-100",
            p.hero ? "text-navy-ink" : "text-gold",
          )}
        >
          Order
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </span>
      </span>
      <span
        className={cn(
          "relative mt-2 font-sans text-sm leading-[1.6]",
          p.hero ? "text-navy-ink/85" : "text-cream/75",
        )}
      >
        {p.tagline}
      </span>
      {p.badge && (
        <span className="relative mt-4 inline-flex w-fit rounded-full bg-navy-ink/15 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-ink">
          {p.badge}
        </span>
      )}
    </motion.a>
  );
}

/** Order online — platform panel (visit.md §4). */
export default function OrderPanel() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 1, ease: EASE }}
          className="grain relative overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-14 shadow-card md:px-14 md:py-20"
        >
          {/* Background photo at 12% + warm glow */}
          <img
            aria-hidden
            src="/images/hero-iced-palms.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep/70"
          />
          <div
            aria-hidden
            className="espresso-glow absolute -top-1/4 left-1/2 h-[80%] w-[80%] -translate-x-1/2"
          />
          <CoffeeRing
            className="-left-20 -bottom-24 h-72 w-72"
            opacity={0.08}
            rotate={22}
          />

          <div className="relative">
            <SectionHeading
              tone="navy"
              eyebrow="Order Ahead & Delivery"
              title={
                <>
                  Your order,{" "}
                  <em className="italic text-butterscotch">your way.</em>
                </>
              }
              lead="Skip the queue with order-ahead, or get Atmars delivered to your door."
              className="[&_h2]:text-[clamp(2rem,4vw,3rem)]"
            />

            <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
              {PLATFORMS.map((p, i) => (
                <PlatformCard key={p.name} p={p} index={i} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-center font-sans text-xs text-cream/50"
            >
              Delivery platform prices may differ from in-store menu.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
