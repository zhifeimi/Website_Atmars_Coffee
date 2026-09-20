import { memo } from "react";
import { cn } from "@/lib/utils";

/** Pure-CSS steam: 3 blurred white blobs rising on a loop. */
function SteamInner({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute overflow-visible", className)}
    >
      <span className="steam-blob animate-steam-rise left-0 bottom-0" />
      <span
        className="steam-blob animate-steam-rise left-14 bottom-2"
        style={{ animationDelay: "2.3s", animationDuration: "8.5s" }}
      />
      <span
        className="steam-blob animate-steam-rise left-28 bottom-0"
        style={{ animationDelay: "4.6s", animationDuration: "6.5s" }}
      />
    </div>
  );
}

const Steam = memo(SteamInner);
export default Steam;
