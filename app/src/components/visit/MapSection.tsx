import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  Car,
  TrainFront,
  Baby,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MAP_EMBED =
  "https://www.google.com/maps?q=Ariel%27s%20Dapto%2C%20Kiosk%20K105%2C%20Dapto%20Mall%2C%2075-87%20Princes%20Hwy%2C%20Dapto%20NSW%202530&z=16&output=embed";

const TIPS: { icon: LucideIcon; lead: string; body: string }[] = [
  {
    icon: Store,
    lead: "In the mall",
    body: "We're on the Ground Floor at Kiosk K105, right near Coles.",
  },
  {
    icon: Car,
    lead: "Parking",
    body: "Free undercover parking at Dapto Mall — enter off the Princes Highway.",
  },
  {
    icon: TrainFront,
    lead: "By train",
    body: "Dapto Station is a short ride away; buses stop at the mall interchange.",
  },
  {
    icon: Baby,
    lead: "Prams & wheelchairs",
    body: "Step-free access throughout the centre — bring the whole crew.",
  },
];

/** Map & getting here (visit.md §3). */
export default function MapSection() {
  const [mapFailed, setMapFailed] = useState(false);

  return (
    <section className="section-pad overflow-hidden bg-cream-warm">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        {/* Map panel */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(6% round 2rem)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% round 0rem)" }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gold/40 bg-navy-deep shadow-card"
          >
            {mapFailed ? (
              /* Fallback if the iframe is blocked */
              <div className="grain flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/40 text-gold">
                  <MapPin className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <p className="font-display text-2xl font-semibold text-cream">
                  {SITE.addressShort}
                </p>
                <p className="max-w-[40ch] font-sans text-sm text-cream/70">
                  {SITE.address}
                </p>
                <a
                  href={SITE.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold mt-2"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <iframe
                title="Map — Ariel's Dapto, Dapto Mall"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                onError={() => setMapFailed(true)}
                className="h-full w-full border-0"
              />
            )}
          </motion.div>
          {!mapFailed && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-center lg:text-left"
            >
              <a
                href={SITE.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-caramel underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Getting here */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Getting Here"
            title={
              <>
                Easy to find,{" "}
                <em className="italic text-caramel">hard to leave.</em>
              </>
            }
          />
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
            className="mt-8 space-y-6"
          >
            {TIPS.map((tip) => (
              <motion.li
                key={tip.lead}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
                }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-cream text-gold">
                  <tip.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="font-sans text-base leading-[1.7] text-navy-ink/80">
                  <strong className="font-semibold text-navy-ink">
                    {tip.lead}:
                  </strong>{" "}
                  {tip.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.6 }}
            className="mt-8 inline-block font-hand text-2xl text-butterscotch"
            style={{ textShadow: "0 1px 0 rgba(6,34,63,0.12)" }}
          >
            look for the navy &amp; gold kiosk
          </motion.p>
        </div>
      </div>
    </section>
  );
}
