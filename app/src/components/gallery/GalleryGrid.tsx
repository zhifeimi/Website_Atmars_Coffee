import { useEffect, useMemo, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Plus } from "lucide-react";
import { prefersReducedMotion } from "@/hooks/use-lenis";
import { cn } from "@/lib/utils";
import type { GalleryTile } from "./tiles";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LAYOUT_SPRING = { type: "spring", stiffness: 300, damping: 32 } as const;

/** Responsive column count: 3 desktop / 2 tablet / 1 mobile. */
function useColumnCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () =>
      setCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

function TileCard({
  tile,
  order,
  onSelect,
}: {
  tile: GalleryTile;
  /** Position within the filtered list — drives staggered entrances. */
  order: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
      transition={{
        layout: LAYOUT_SPRING,
        duration: 0.65,
        delay: Math.min(order * 0.05, 0.6),
        ease: EASE,
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-cream-warm shadow-card"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-label={`Open photo: ${tile.caption}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      {/* Hover zoom wrapper (keeps CSS transform off the layoutId image) */}
      <div className="h-full w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.08]">
        <motion.img
          layoutId={`gallery-img-${tile.id}`}
          src={tile.src}
          alt={tile.alt}
          loading="lazy"
          className={cn("w-full object-cover", tile.aspect)}
        />
      </div>

      {/* Navy gradient overlay rises on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-ink/60 via-navy-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Caption chip slides up on hover */}
      <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-3 items-end justify-between gap-3 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
        <span className="font-display text-lg italic leading-snug text-cream">
          {tile.caption}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
          <Plus className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </motion.div>
  );
}

function Column({
  tiles,
  y,
  onSelect,
}: {
  tiles: { tile: GalleryTile; order: number }[];
  y?: MotionValue<string>;
  onSelect: (order: number) => void;
}) {
  return (
    <motion.div
      style={y ? { y } : undefined}
      className="flex min-w-0 flex-1 flex-col gap-5"
    >
      <AnimatePresence mode="popLayout">
        {tiles.map(({ tile, order }) => (
          <TileCard
            key={tile.id}
            tile={tile}
            order={order}
            onSelect={() => onSelect(order)}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

/** Gallery §3 — masonry grid with spring re-layout on filter change. */
export default function GalleryGrid({
  tiles,
  onSelect,
}: {
  tiles: GalleryTile[];
  onSelect: (index: number) => void;
}) {
  const count = useColumnCount();
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = prefersReducedMotion();

  // Alternate columns drift ±2% for subtle depth.
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });
  const yEven = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);
  const yOdd = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);

  const columns = useMemo(() => {
    const cols: { tile: GalleryTile; order: number }[][] = Array.from(
      { length: count },
      () => [],
    );
    tiles.forEach((tile, order) => {
      cols[order % count].push({ tile, order });
    });
    return cols;
  }, [tiles, count]);

  return (
    <section className="bg-cream py-16 md:py-20">
      <div ref={gridRef} className="container-site flex items-start gap-5">
        {columns.map((col, ci) => (
          <Column
            key={ci}
            tiles={col}
            y={reduced ? undefined : ci % 2 === 0 ? yEven : yOdd}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
