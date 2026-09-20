import { Link } from "react-router";
import { motion } from "framer-motion";
import { Baby, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Mum's Café Day reminder strip (visit.md §5). */
export default function MumsStrip() {
  return (
    <section className="border-y border-gold/25 bg-cream py-10">
      {/* Pram icon gentle rock on strip hover */}
      <style>{`
        .visit-mums-strip:hover .visit-pram {
          animation: visit-pram-rock 3s ease-in-out infinite;
        }
        @keyframes visit-pram-rock {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .visit-mums-strip:hover .visit-pram { animation: none; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="visit-mums-strip container-site flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold">
          <Baby className="visit-pram h-6 w-6" strokeWidth={1.75} />
        </span>
        <p className="font-sans text-base leading-[1.7] text-espresso md:text-lg">
          <strong className="font-semibold">Mum's Café Day</strong> — free
          coffee for mums with prams, every second Tuesday of the month.
        </p>
        <span className="inline-block -rotate-2 font-hand text-2xl text-berry">
          on us!
        </span>
        <Link
          to="/about"
          className="group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-caramel underline-offset-4 transition-colors hover:text-gold hover:underline"
        >
          Read our story
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </motion.div>
    </section>
  );
}
