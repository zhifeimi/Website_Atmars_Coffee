import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import OpenNowPill from "@/components/OpenNowPill";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Week rows, Monday-first; i = JS Date.getDay() index (0 = Sunday). */
const WEEK = [
  { d: "Mon", i: 1, h: "8:00am–3:00pm" },
  { d: "Tue", i: 2, h: "8:00am–4:00pm" },
  { d: "Wed", i: 3, h: "8:00am–4:00pm" },
  { d: "Thu", i: 4, h: "8:00am–4:00pm" },
  { d: "Fri", i: 5, h: "8:00am–4:00pm" },
  { d: "Sat", i: 6, h: "8:00am–4:00pm" },
  { d: "Sun", i: 0, h: "8:00am–3:00pm" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: EASE },
  }),
};

function CardShell({
  index,
  icon: Icon,
  title,
  children,
}: {
  index: number;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12%" }}
      className="group relative flex flex-col items-center rounded-[2rem] bg-cream-warm px-8 pb-9 pt-10 text-center shadow-card transition-transform duration-300 ease-out-expo hover:-translate-y-1.5"
    >
      {/* Gold hairline top */}
      <span
        aria-hidden
        className="gold-line absolute inset-x-10 top-0 h-px"
      />
      <span className="visit-icon-draw grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:text-caramel">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold text-espresso">
        {title}
      </h3>
      {children}
    </motion.article>
  );
}

/** Info cards — where / when / say g'day (visit.md §2). */
export default function InfoCards() {
  const today = new Date().getDay();
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-12%" });

  return (
    <section className="section-pad bg-cream">
      {/* Scoped icon stroke-draw animation */}
      <style>{`
        .visit-icon-draw svg * {
          stroke-dasharray: 90;
          stroke-dashoffset: 90;
        }
        .visit-icons-in .visit-icon-draw svg * {
          animation: visit-icon-draw 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards;
        }
        @keyframes visit-icon-draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .visit-icon-draw svg * {
            stroke-dashoffset: 0;
            animation: none;
          }
        }
      `}</style>

      <div
        ref={gridRef}
        className={cn(
          "container-site grid gap-6 md:grid-cols-3 lg:gap-8",
          inView && "visit-icons-in",
        )}
      >
        {/* Where */}
        <CardShell index={0} icon={MapPin} title="Where">
          <p className="mt-4 font-sans text-base leading-[1.7] text-navy-ink/80">
            Ground Floor, Kiosk K105, Null Island Mall, 1 Virtual Street, Null Island
            0000
          </p>
          <a
            href={SITE.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-gold underline-offset-4 transition-colors hover:text-caramel hover:underline"
          >
            Get directions
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </CardShell>

        {/* When */}
        <CardShell index={1} icon={Clock} title="When">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12%" }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.05, delayChildren: 0.35 },
              },
            }}
            className="tnum mt-4 w-full space-y-1 font-sans text-sm"
          >
            {WEEK.map((row) => {
              const isToday = row.i === today;
              return (
                <motion.li
                  key={row.d}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                  className={cn(
                    "relative flex items-center justify-between rounded-lg px-3 py-1.5",
                    isToday && "font-semibold text-navy-ink",
                    !isToday && "text-navy-ink/75",
                  )}
                >
                  {isToday && (
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-12%" }}
                      transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
                      className="absolute inset-0 origin-left rounded-lg bg-gold/20"
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {row.d}
                    {isToday && (
                      <span className="rounded-full bg-gold px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-ink">
                        today
                      </span>
                    )}
                  </span>
                  <span className="relative">{row.h}</span>
                </motion.li>
              );
            })}
          </motion.ul>
          <span className="mt-5 inline-block">
            <OpenNowPill />
          </span>
        </CardShell>

        {/* Say g'day */}
        <CardShell index={2} icon={Phone} title="Say g'day">
          <a
            href={SITE.phoneHref}
            className="mt-4 font-display text-2xl font-semibold text-espresso transition-colors hover:text-caramel"
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 break-all font-sans text-base text-navy-ink/80 underline-offset-4 transition-colors hover:text-caramel hover:underline"
          >
            {SITE.email}
          </a>
          <span className="mt-6 flex items-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Atmars on Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-gold text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Atmars on Facebook"
              className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-gold text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </span>
        </CardShell>
      </div>
    </section>
  );
}
