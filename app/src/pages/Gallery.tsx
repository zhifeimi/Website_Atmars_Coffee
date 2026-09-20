import { useCallback, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import GalleryHero from "@/components/gallery/GalleryHero";
import FilterBar from "@/components/gallery/FilterBar";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Lightbox from "@/components/gallery/Lightbox";
import InstagramCta from "@/components/gallery/InstagramCta";
import { TILES } from "@/components/gallery/tiles";
import type { GalleryFilter } from "@/components/gallery/tiles";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? TILES
        : TILES.filter((t) => t.category === filter),
    [filter],
  );

  const handleNavigate = useCallback((index: number) => {
    setSelected(index);
  }, []);

  return (
    <>
      <GalleryHero />
      <FilterBar filter={filter} onChange={setFilter} />
      <GalleryGrid tiles={filtered} onSelect={setSelected} />
      <InstagramCta />

      <AnimatePresence>
        {selected !== null && filtered[selected] && (
          <Lightbox
            tiles={filtered}
            index={selected}
            onClose={() => setSelected(null)}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </>
  );
}
