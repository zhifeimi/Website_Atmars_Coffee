/** Gallery tile data (gallery.md §3). */

export type GalleryCategory = "coffee" | "food" | "cafe-life";
export type GalleryFilter = "all" | GalleryCategory;

export interface GalleryTile {
  id: number;
  src: string;
  category: GalleryCategory;
  /** Tailwind aspect class giving the masonry its organic rhythm. */
  aspect: string;
  caption: string;
  alt: string;
}

export const FILTERS: { key: GalleryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "coffee", label: "Coffee" },
  { key: "food", label: "Food" },
  { key: "cafe-life", label: "Café Life" },
];

export const TILES: GalleryTile[] = [
  {
    id: 1,
    src: "/images/cappuccino-art.webp",
    category: "coffee",
    aspect: "aspect-[4/5]",
    caption: "Rosetta, poured on the La Marzocco",
    alt: "Moody rosetta latte art in a grey ceramic cup on dark marble",
  },
  {
    id: 2,
    src: "/images/pancakes.webp",
    category: "food",
    aspect: "aspect-[3/2]",
    caption: "Ricotta hotcakes, berries & maple",
    alt: "Hotcakes stacked with berries and dripping sauce",
  },
  {
    id: 3,
    src: "/images/latte-pour.webp",
    category: "coffee",
    aspect: "aspect-[4/5]",
    caption: "The navy cup, out and about",
    alt: "Branded navy Atmars takeaway cup held outdoors",
  },
  {
    id: 4,
    src: "/images/breakfast-flatlay.webp",
    category: "food",
    aspect: "aspect-[3/2]",
    caption: "The Null Island spread",
    alt: "Null Island breakfast flat-lay with waffles, benedict and granola",
  },
  {
    id: 5,
    src: "/images/takeaway-cup.webp",
    category: "cafe-life",
    aspect: "aspect-[4/5]",
    caption: "Grabbed on the way through the mall",
    alt: "Customer holding a navy branded takeaway cup",
  },
  {
    id: 6,
    src: "/images/atmars-benny.webp",
    category: "food",
    aspect: "aspect-[4/3]",
    caption: "Meridian Benedict — the signature",
    alt: "Meridian Benedict — poached eggs with golden hollandaise on sourdough",
  },
  {
    id: 7,
    src: "/images/latte-duo.webp",
    category: "coffee",
    aspect: "aspect-[4/3]",
    caption: "Two lattes, gold pitchers",
    alt: "Two lattes with gold pitchers — brand-colour product shot",
  },
  {
    id: 8,
    src: "/images/hero-burrito.webp",
    category: "food",
    aspect: "aspect-[4/3]",
    caption: "Breakfast burrito, wrapped in navy",
    alt: "Breakfast burrito in navy branded wrap with egg-crack action",
  },
  {
    id: 9,
    src: "/images/brunch-table.webp",
    category: "food",
    aspect: "aspect-[16/10]",
    caption: "Brunch for the whole table",
    alt: "Overhead brunch table with waffles, fried-egg avo toast, berries, juice and coffee",
  },
  {
    id: 10,
    src: "/images/waffles.webp",
    category: "food",
    aspect: "aspect-[3/2]",
    caption: "Waffles, maple & blueberries",
    alt: "Waffles with maple syrup and blueberries, overhead",
  },
  {
    id: 11,
    src: "/images/latte-topdown.webp",
    category: "coffee",
    aspect: "aspect-[3/2]",
    caption: "From above",
    alt: "Latte art photographed from directly above on a warm wood table",
  },
  {
    id: 12,
    src: "/images/cheeseburger.webp",
    category: "food",
    aspect: "aspect-[3/2]",
    caption: "The Orbit Smash Burger",
    alt: "Smash burger with melty cheese, close-up",
  },
  {
    id: 13,
    src: "/images/cafe-counter.webp",
    category: "cafe-life",
    aspect: "aspect-[16/9]",
    caption: "Our navy & gold home at K105",
    alt: "Wide view of the navy and gold Atmars kiosk interior",
  },
  {
    id: 14,
    src: "/images/hero-iced-palms.webp",
    category: "coffee",
    aspect: "aspect-[3/2]",
    caption: "Iced coffee weather",
    alt: "Iced coffee held up against palm trees on a bright day",
  },
];

export function countFor(filter: GalleryFilter): number {
  return filter === "all"
    ? TILES.length
    : TILES.filter((t) => t.category === filter).length;
}
