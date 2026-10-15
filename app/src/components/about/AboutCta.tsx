import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CoffeeRing from "@/components/CoffeeRing";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const word = {
  hidden: { opacity: 0, y: 28 },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.7, ease: EASE },
  }),
};

/** About §7 — closing CTA band (navy-deep). */
export default function AboutCta() {
  return (
    <section className="grain section-pad relative overflow-hidden bg-navy-deep">
      <CoffeeRing className="-right-24 bottom-8 h-96 w-96" rotate={18} opacity={0.07} />

      {/* Warm glow pulse behind */}
      <motion.div
        aria-hidden
        className="espresso-glow absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-site relative text-center">
        <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] text-cream">
          <motion.span variants={word} custom={0} initial="hidden" whileInView="shown" viewport={{ once: true }} className="inline-block">
            Come&nbsp;say
          </motion.span>{" "}
          <motion.em variants={word} custom={1} initial="hidden" whileInView="shown" viewport={{ once: true }} className="inline-block italic text-butterscotch">
            g'day.
          </motion.em>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-4 font-sans text-xl font-light leading-[1.65] text-cream/80"
        >
          Kiosk K105, Null Island Mall — near the food court.
        </motion.p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            <Link to="/visit" className="btn-gold group">
              Plan Your Visit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          >
            <Link to="/menu" className="btn-ghost-gold">
              See the Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
