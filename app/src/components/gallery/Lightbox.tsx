import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryTile } from "./tiles";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Gallery §4 — shared-element lightbox (layoutId morph from the grid). */
export default function Lightbox({
  tiles,
  index,
  onClose,
  onNavigate,
}: {
  tiles: GalleryTile[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number, direction: 1 | -1) => void;
}) {
  const tile = tiles[index];
  const direction = useRef<1 | -1>(1);
  // First open morphs straight out of the grid; only later prev/next
  // navigations get the crossfade + x-shift entrance.
  const openingMorph = useRef(true);
  useEffect(() => {
    openingMorph.current = false;
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      direction.current = dir;
      onNavigate((index + dir + tiles.length) % tiles.length, dir);
    },
    [index, tiles.length, onNavigate],
  );

  // Keyboard navigation + scroll lock while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${tile.caption}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-ink/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:rotate-90 hover:bg-gold hover:text-navy-ink"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev / next chevrons (desktop; mobile swipes) */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:bg-gold hover:text-navy-ink md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Image + caption */}
      <figure className="relative z-10 flex max-h-full flex-col items-center px-4">
        <motion.img
          key={tile.id}
          layoutId={`gallery-img-${tile.id}`}
          src={tile.src}
          alt={tile.alt}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          initial={
            openingMorph.current
              ? false
              : { opacity: 0, x: 40 * direction.current }
          }
          animate={{ opacity: 1, x: 0 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_e, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
          className="max-h-[78vh] max-w-[85vw] rounded-2xl border border-gold/40 object-contain shadow-card-warm"
        />
        <AnimatePresence mode="wait">
          <motion.figcaption
            key={tile.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
            className="mt-5 text-center"
          >
            <p className="font-display text-2xl italic text-cream">
              {tile.caption}
            </p>
            <p className="tnum mt-2 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              {index + 1} / {tiles.length}
            </p>
          </motion.figcaption>
        </AnimatePresence>
      </figure>
    </motion.div>
  );
}
