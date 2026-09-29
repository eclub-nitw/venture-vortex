// Torn-paper edge, copied in spirit from the poster's footer. Place it as the FIRST child of the cream partner band.
// The shape is generated once from a fixed seed, so server and client always match.
function edge(): string {
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const W = 1440, H = 48;
  let d = `M0 ${H}`;
  for (let x = 0; x <= W; x += 16) d += ` L${x} ${(4 + rnd() * 28).toFixed(1)}`;
  return `${d} L${W} ${H} Z`;
}
const PATH = edge();

export function TornEdge() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 48" preserveAspectRatio="none" className="-mb-px block h-8 w-full md:h-12">
      <path d={PATH} fill="var(--color-vortex-paper)" />
    </svg>
  );
}
