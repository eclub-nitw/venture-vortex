"use client";
import { useEffect, useState } from "react";

/** Counts down to an ISO timestamp (with offset). Renders nothing before mount (no hydration mismatch) and after the time passes. */
export function Countdown({ to, label, className = "" }: { to: string; label: string; className?: string }) {
  const [ms, setMs] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setMs(new Date(to).getTime() - Date.now());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [to]);
  if (ms === null || ms <= 0) return null;
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.08em] ${className}`}>
      <span className="text-muted">{label} </span>
      <span className="tabular text-fg">{d}d {String(h).padStart(2, "0")}h {String(m).padStart(2, "0")}m</span>
    </p>
  );
}
