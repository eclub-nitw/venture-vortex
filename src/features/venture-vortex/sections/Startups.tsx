"use client";
// OWNER: Saad (reference implementation by Claude — adapt, don't rewrite from scratch).
// The 50 startups sit on the 8 arms of a spiral galaxy = the vortex. Desktop: galaxy. Mobile: grouped list.
import Image from "next/image";
import { useMemo, useState } from "react";
import { startups, startupGroups, startupsDisclaimer, type Startup, type StartupGroup } from "@/data/startups";

type Placed = { s: Startup; x: number; y: number; gi: number; dx: number; dy: number; dur: number };
const TWIST = 1.9; // radians an arm turns from centre to rim

function place(): Placed[] {
  const out: Placed[] = [];
  startupGroups.forEach((g, gi) => {
    const list = startups.filter((s) => s.group === g);
    const base = (gi / startupGroups.length) * Math.PI * 2 - Math.PI / 2;
    list.forEach((s, i) => {
      const t = (i + 1) / (list.length + 1);
      const r = 0.21 + 0.76 * t;
      const a = base + t * TWIST;
      const k = (gi * 7 + i * 13) % 10;                 // deterministic pseudo-random for drift
      out.push({ s, gi, x: 50 + Math.cos(a) * r * 46, y: 50 + Math.sin(a) * r * 46, dx: (k % 2 ? 1 : -1) * (3 + (k % 4)), dy: (k % 3 ? -1 : 1) * (3 + (k % 3)), dur: 7 + k });
    });
  });
  return out;
}
function armPoints(gi: number): string {
  const base = (gi / startupGroups.length) * Math.PI * 2 - Math.PI / 2;
  const pts: string[] = [];
  for (let t = 0; t <= 1.02; t += 0.04) {
    const r = 0.21 + 0.76 * t, a = base + t * TWIST;
    pts.push(`${(50 + Math.cos(a) * r * 46).toFixed(2)},${(50 + Math.sin(a) * r * 46).toFixed(2)}`);
  }
  return pts.join(" ");
}
const initials = (n: string) => n.split(/[\s.]+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();

function Disc({ s, size }: { s: Startup; size: string }) {
  return (
    <span className="grid place-items-center rounded-full bg-vortex-paper" style={{ width: size, height: size }}>
      {s.logo ? (
        <Image src={s.logo} alt="" width={40} height={40} unoptimized className="h-[56%] w-[56%] object-contain" />
      ) : (
        <span className="font-mono text-[0.9em] font-medium text-vortex-ink">{initials(s.name)}</span>
      )}
    </span>
  );
}

export function Startups() {
  const [group, setGroup] = useState<StartupGroup | "All">("All");
  const [picked, setPicked] = useState<Startup | null>(null);
  const placed = useMemo(() => place(), []);
  const active = (g: StartupGroup) => group === "All" || group === g;

  return (
    <section id="startups" className="mx-auto max-w-[1200px] px-5 py-24 md:px-10 md:py-40">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">08 — The 50</p>
      <h2 className="mt-3 max-w-[14ch] font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] md:text-7xl">Pick one of these fifty.</h2>
      <p className="mt-5 max-w-[60ch] text-lg text-muted">One startup per team, from AI to agritech. Filter by sector, then tap a name to see the official Round 1 option.</p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
        {(["All", ...startupGroups] as const).map((g) => (
          <button key={g} type="button" aria-pressed={group === g} onClick={() => { setGroup(g); setPicked(null); }}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${group === g ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:border-fg hover:text-fg"}`}>
            {g}
          </button>
        ))}
      </div>

      {/* Desktop galaxy */}
      <div className="relative mx-auto mt-10 hidden aspect-square w-full max-w-[880px] md:block" style={{ containerType: "inline-size" }}>
        <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
          {startupGroups.map((g, gi) => (
            <polyline key={g} points={armPoints(gi)} stroke="var(--color-vortex-plum)" strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeLinecap="round"
              style={{ opacity: active(g) ? 0.9 : 0.15, transition: "opacity .4s" }} />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 grid h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line text-center" aria-live="polite">
          {picked ? (
            <div className="px-3">
              <p className="font-mono text-[1.4cqw] uppercase tracking-[0.08em] text-muted">Option {picked.n} · {picked.sector}</p>
              <p className="mt-1 font-display text-[3.2cqw] font-bold leading-none">{picked.name}</p>
            </div>
          ) : (
            <div>
              <p className="tabular font-display text-[7cqw] font-extrabold leading-none text-vortex-lavender">50</p>
              <p className="mt-1 font-mono text-[1.3cqw] uppercase tracking-[0.1em] text-muted">startups</p>
            </div>
          )}
        </div>
        {placed.map(({ s, x, y, gi, dx, dy, dur }) => {
          const on = active(startupGroups[gi]);
          return (
            <button key={s.n} type="button" onClick={() => setPicked(s)} aria-label={`${s.n}. ${s.name}, ${s.sector}`}
              className="drift group absolute rounded-full outline-offset-4 transition-opacity duration-300 hover:z-10 focus-visible:z-10"
              style={{ left: `${x}%`, top: `${y}%`, width: "5.1cqw", height: "5.1cqw", opacity: on ? 1 : 0.16, pointerEvents: on ? "auto" : "none",
                ["--dx" as string]: `${dx}px`, ["--dy" as string]: `${dy}px`, ["--dur" as string]: `${dur}s` }}>
              <Disc s={s} size="100%" />
              <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-vortex-night px-2 py-1 font-mono text-[11px] uppercase tracking-[0.06em] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile list */}
      <div className="mt-8 space-y-10 md:hidden">
        {startupGroups.filter(active).map((g) => (
          <div key={g}>
            <h3 className="border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.08em] text-highlight">{g}</h3>
            <ul className="mt-2 divide-y divide-line">
              {startups.filter((s) => s.group === g).map((s) => (
                <li key={s.n} className="flex items-center gap-3 py-3">
                  <Disc s={s} size="40px" />
                  <span className="font-display text-lg font-semibold">{s.name}</span>
                  <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.06em] text-muted">{s.sector}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-[70ch] text-sm text-muted">{startupsDisclaimer}</p>
    </section>
  );
}
