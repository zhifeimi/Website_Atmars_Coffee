import { motion } from "framer-motion";

const ITEMS = [
  "House-Roasted Coffee",
  "All-Day Breakfast",
  "House-Made Waffles",
  "Ricotta Hotcakes",
  "Breakfast Burritos",
  "Fresh Smoothies",
  "Free-Range Eggs",
];

function Star() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="mx-6 h-3.5 w-3.5 shrink-0 fill-gold"
    >
      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
    </svg>
  );
}

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap font-display text-xl italic text-gold">
            {item}
          </span>
          <Star />
        </span>
      ))}
    </div>
  );
}

/** Gold marquee strip (home.md §2). */
export default function Marquee() {
  return (
    <div className="overflow-hidden bg-cream py-5">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="marquee relative -mx-[2vw] h-16 w-[104vw] border-y border-[rgba(192,163,78,0.3)] bg-navy-deep"
        style={{ rotate: "-1.5deg" }}
      >
        <div className="marquee-track h-full items-center">
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </motion.div>
    </div>
  );
}
