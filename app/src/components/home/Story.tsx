import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CoffeeRing from "@/components/CoffeeRing";
import { SITE } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Welcome / brand story split (home.md §3). */
export default function Story() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream">
      <CoffeeRing className="-right-16 -top-16 h-72 w-72" rotate={18} />

      <div className="container-site grid grid-cols-1 items-center gap-14 lg:grid-cols-5 lg:gap-10">
        {/* Left — text */}
        <div className="lg:col-span-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow eyebrow-on-cream"
          >
            Welcome to Ariel's Dapto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
            className="mt-5 max-w-[20ch] font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-navy"
          >
            Your local café, <em className="italic text-caramel">right inside</em> Dapto Mall.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            transition={{ staggerChildren: 0.15 }}
            className="mt-7 max-w-[58ch] space-y-5 font-sans text-[1.05rem] leading-[1.7] text-navy-ink/85"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } }}
            >
              Since 2015, Ariel's has been the Illawarra's local café —
              family-owned, community-first, and obsessed with doing the simple
              things brilliantly. Our Dapto kiosk opened in December 2022,
              bringing the same generous plates and award-winning Campos coffee
              to Kiosk K105, near Coles.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } }}
            >
              Whether it's a flat white on the school run, a big breakfast that
              actually is big, or pancakes the kids will talk about all week —
              this is your spot.
            </motion.p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mt-9 border-l-[3px] border-gold pl-6 font-display text-2xl italic leading-snug text-espresso"
          >
            “{SITE.motto}”
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-9"
          >
            <Link to="/about" className="btn-ghost-navy group">
              Read our story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* Right — image composition */}
        <div className="relative lg:col-span-2">
          <div className="espresso-glow absolute -inset-10 -z-0 rounded-full" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <img
              src="/images/dapto-flatlay.png"
              alt="The Dapto breakfast spread — waffles, eggs benedict and granola on the table"
              className="w-full rounded-[2rem] object-cover shadow-card-warm"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="absolute -bottom-10 -left-[15%] w-[55%]"
          >
            <img
              src="/images/latte-duo.jpg"
              alt="Two lattes poured with gold pitchers"
              className="w-full rounded-2xl border-[3px] border-gold object-cover shadow-card"
              loading="lazy"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.5 }}
            className="absolute -top-5 right-2 font-hand text-2xl text-caramel"
          >
            the full spread
          </motion.span>
        </div>
      </div>
    </section>
  );
}
