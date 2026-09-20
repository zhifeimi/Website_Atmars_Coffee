import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getOpenState } from "@/lib/site";

/** Live open/closed pill computed from local time vs trading hours. */
export default function OpenNowPill({ className }: { className?: string }) {
  const [state, setState] = useState(() => getOpenState());

  useEffect(() => {
    const id = window.setInterval(() => setState(getOpenState()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "glass-chip inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/90",
        className,
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          state.open ? "bg-gold animate-pulse-dot" : "bg-berry",
        )}
      />
      {state.label}
    </span>
  );
}
