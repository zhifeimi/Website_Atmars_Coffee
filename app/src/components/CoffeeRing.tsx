import { cn } from "@/lib/utils";

/** Faint gold coffee-ring / cup-stain watermark SVG. */
export default function CoffeeRing({
  className,
  opacity = 0.08,
  rotate = 12,
}: {
  className?: string;
  opacity?: number;
  rotate?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute", className)}
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
      fill="none"
    >
      <circle cx="100" cy="100" r="78" stroke="#c0a34e" strokeWidth="7" strokeDasharray="330 60 90 20" strokeLinecap="round" />
      <circle cx="104" cy="97" r="60" stroke="#c0a34e" strokeWidth="3" strokeDasharray="200 40 130 10" strokeLinecap="round" opacity="0.7" />
      <circle cx="96" cy="103" r="88" stroke="#c0a34e" strokeWidth="1.5" strokeDasharray="120 90 60 200" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
