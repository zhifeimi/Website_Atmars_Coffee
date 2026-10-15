import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import OpenNowPill from "@/components/OpenNowPill";
import { SITE } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PLATFORMS = [
  { name: "Bopple", href: SITE.bopple },
  { name: "Uber Eats", href: "https://www.ubereats.com/" },
  { name: "DoorDash", href: "https://www.doordash.com/" },
  { name: "Hey You", href: "https://www.heyyou.com.au/" },
];

/** Visit / order CTA (home.md §10). */
export default function VisitCta() {
  return (
    <section className="grain section-pad relative overflow-hidden bg-navy-deep">
      {/* Warm pulsing glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="espresso-glow absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container-site relative">
        {/* Top — centered */}
        <SectionHeading
          tone="navy"
          eyebrow="Find Us"
          title={
            <>
              Hungry? <em className="italic text-butterscotch">We're just near the food court.</em>
            </>
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mt-5 flex flex-col items-center gap-3 text-center"
        >
          <p className="font-sans text-lg font-light text-cream/85">
            {SITE.addressShort} · {SITE.hours.short}
          </p>
          <OpenNowPill />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Link to="/visit" className="btn-gold group">
            Plan Your Visit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <a href={SITE.phoneHref} className="btn-ghost-gold">
            <Phone className="h-4 w-4" />
            Call {SITE.phone}
          </a>
        </motion.div>

        {/* Bottom — order strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[2rem] border border-[rgba(192,163,78,0.3)] bg-[rgba(8,44,82,0.55)] px-8 py-10 backdrop-blur-md md:px-14"
        >
          <img
            src="/images/cafe-counter-customers.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
            loading="lazy"
          />
          <div className="relative text-center">
            <span className="eyebrow eyebrow-on-navy justify-center">
              Order Ahead &amp; Delivery
            </span>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {PLATFORMS.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: EASE }}
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-gold px-6 py-2.5 font-sans text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink"
                >
                  {p.name}
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm text-cream/60">
              Order direct on Bopple, or search “Atmars” on your
              favourite delivery app.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
