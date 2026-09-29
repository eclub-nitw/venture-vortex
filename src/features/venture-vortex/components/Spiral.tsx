// Decorative logarithmic spiral (server component, pure SVG, ~2 KB). Rotates slowly via CSS; killed by prefers-reduced-motion.
const ARMS = 5;
function armPath(phase: number): string {
  const pts: string[] = [];
  for (let th = 0; th <= 19.2; th += 0.16) {
    const r = 4 * Math.exp(0.2 * th);
    pts.push(`${(r * Math.cos(th + phase)).toFixed(1)},${(r * Math.sin(th + phase)).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}
const paths = Array.from({ length: ARMS }, (_, i) => armPath((i * Math.PI * 2) / ARMS));

export function Spiral({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="-200 -200 400 400" fill="none" className={`animate-[spin_90s_linear_infinite] ${className}`}>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={i % 2 ? "var(--color-vortex-lavender)" : "var(--color-vortex-plum)"} strokeOpacity={i % 2 ? 0.35 : 0.9} strokeWidth={1.4} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      ))}
      <circle r="5" fill="var(--color-vortex-ink)" stroke="var(--color-vortex-lavender)" strokeOpacity=".6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
