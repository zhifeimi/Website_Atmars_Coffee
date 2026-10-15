import { motion } from "framer-motion";
import { Baby, Smile, Zap, MessagesSquare, Instagram, Facebook } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CARDS = [
  {
    icon: Smile,
    title: "Kid-friendly",
    body: "Patient service and little plates for little foodies.",
  },
  {
    icon: Zap,
    title: "Fast & fresh",
    body: "In and out on your lunch break, without the compromise.",
  },
  {
    icon: MessagesSquare,
    title: "Your feedback matters",
    body: "Say g'day on Instagram or Facebook — we read everything.",
    socials: true,
  },
];

/** About §6 — Community: Mum's Café Day + local love. */
export default function Community() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream-warm">
      <div className="container-site">
        <SectionHeading
          eyebrow="Community"
          title={
            <>
              More than a café — <em className="italic text-caramel">your local.</em>
            </>
          }
        />

        {/* Mum's Café Day feature panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="grain relative mt-14 overflow-hidden rounded-[2rem] bg-navy-deep p-10 shadow-card-warm md:p-14"
        >
          <img
            src="/images/cafe-counter-customers.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
            loading="lazy"
          />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <motion.div
              initial={{ rotate: -4 }}
              whileInView={{ rotate: [0, 4, -4, 0] }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ type: "spring", stiffness: 120, damping: 8, delay: 0.35 }}
              className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/50 text-gold"
            >
              <Baby className="h-14 w-14" strokeWidth={1.5} aria-hidden />
            </motion.div>
            <div>
              <h3 className="font-display text-[2rem] font-semibold leading-[1.15] text-cream">
                Mum's Café Day
              </h3>
              <p className="mt-3 max-w-[54ch] font-sans text-[1.05rem] leading-[1.7] text-cream/85">
                Every second Tuesday of the month, mums with prams enjoy a
                free coffee on us. Because we know who's really running the
                morning shift.
              </p>
              <span className="mt-5 inline-flex items-center rounded-full border border-gold/60 px-5 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Every 2nd Tuesday · Free coffee for mums with prams
              </span>
            </div>
          </div>
        </motion.div>

        {/* Small community cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-cream p-8 shadow-card"
            >
              <card.icon
                className="h-9 w-9 text-gold transition-colors duration-300 group-hover:text-caramel"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-[1.5rem] font-semibold leading-[1.15] text-espresso">
                {card.title}
              </h3>
              <p className="mt-2 font-sans text-[0.95rem] leading-[1.7] text-navy/75">
                {card.body}
              </p>
              {card.socials && (
                <div className="mt-4 flex gap-3">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram — @atmars"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook — Atmars"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
