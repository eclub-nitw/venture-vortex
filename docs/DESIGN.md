# Design system — Venture Vortex

## Concept: "The Descent"
The poster is a black hole swallowing a stock chart, then a torn edge into a clean cream band. The page is that story as a scroll: **you fall into the vortex, pass through three orbits (the rounds), reach the boardroom at the core, and land on paper.** Every section is one step of the fall. Research on four leading E-Cell sites (docs/RESEARCH-E-CELLS.md) shows they are all dark/grey/gold, card-and-carousel layouts; ours is built on one idea (the vortex) with signature moments none of them have.

## Anti-slop rules (reviewers reject PRs that break these)
- NO purple→blue gradient blobs, floating orbs, aurora or mesh backgrounds. Violet comes from flat colour and thin spiral strokes.
- NO glassmorphism card grids, no icon-in-a-circle above headings, no emoji icons. One blurred surface only: the pill nav.
- NO Inter, Poppins, Space Grotesk, Oswald or default system look. Fonts are fixed below. NO italic-serif-word-in-the-headline trick (it is everywhere, including two of the reference sites).
- NO clichés: "Unleash", "Elevate", "Seamless", "Next-gen", "Empower". Short, specific copy, numbers first.
- NO centred-everything. 12-col grid, left-aligned, deliberate asymmetry, oversized numerals, 1px rules.
- NO bouncy springs, scale-in-on-everything, or more than one signature animation per section.
- Never gate content behind a loader. Never autoplay sound. Text ≥ 16px on mobile, 60–75ch lines.

## Palette (sampled from the poster with a pixel sampler; see `tokens.css`)
| Token | Hex | Use | Contrast on ink |
|---|---|---|---|
| vortex-ink | `#160c2b` | page background | — |
| vortex-night | `#231945` | raised surfaces, tooltips | — |
| vortex-deep | `#3e2677` | section washes | — |
| vortex-plum | `#6a1f97` | spiral strokes, decoration ONLY | 2.0:1, never text |
| vortex-electric | `#b74afe` | accent, CTA fill (ink text on it) | 4.8:1 |
| vortex-lavender | `#d9d9fe` | the ₹50,000 and big numerals | 13.7:1 |
| vortex-silver | `#cac8d6` | body text on dark | 11.4:1 |
| vortex-chrome | `#f7f7f7` | headlines | 17.5:1 |
| vortex-signal | `#ff4846` | ONE word per section at most (poster's red) | 5.6:1 |
| vortex-glow | `#92d6ec` | prize underline only | 11.6:1 |
| vortex-paper | `#fefdfa` | partner band (ink text: 18.4:1) | — |
Partner colours (Unstop navy `#033479`, S2S yellow `#fed33f`) appear only inside their logos. Verify with an eyedropper on the original poster.

## Type
Display **Bricolage Grotesque** 700–800, tracking −0.02em, hero clamp(3rem, 9vw, 9rem). Body **Instrument Sans** 17–18px/1.6. Labels **JetBrains Mono** 500 uppercase 0.08em, 12–13px (dates, "R1 · 24 SEP → 09 OCT", section numbers). Wordmark: use the official transparent PNG/SVG when it arrives; until then the H1 uses a vertical silver gradient (`#f7f7f7 → #9b96ad`, `background-clip:text`).

## Signature moments (the things that make it unlike any other E-Cell page)
1. **Hero descent (scroll-linked).** Hero is `sticky` inside a 200vh wrapper. The spiral scales 1 → 5 as you scroll; from 40% progress, the next section is revealed through a growing circular `clip-path` centred on the spiral's core. Reference:
```tsx
const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
const scale = useTransform(p, [0, 1], [1, 5]);
const reveal = useTransform(p, [0.4, 1], ["circle(0% at 50% 62%)", "circle(150% at 50% 62%)"]);
// <motion.div style={{ scale }}><Spiral/></motion.div> ... <motion.div style={{ clipPath: reveal }}>next section</motion.div>
```
Under `prefers-reduced-motion` skip the scale/clip and show sections normally.
2. **Orbits (Journey).** Three concentric SVG rings: outer = Round 1 Understand, middle = Round 2 Build & Sell, core = Round 3 Defend. A dot travels a spiral path from the outer ring inward as the section scrolls; the ring it is on lights up (accent stroke) and its date/label brightens.
3. **Dossier reader (Round 1).** Sticky index of the seven teardown areas (left), long-form panels (right). The active index item highlights via IntersectionObserver. Sub-points are typeset as a ruled list.
4. **Galaxy (The 50).** Built: `sections/Startups.tsx`. 8 spiral arms, logos in cream discs, drift ≤ 6px (paused on hover), filter dims arms, picked node names itself in the core.
5. **Floating pill.** `FloatingRegister` (built): appears after the hero with a live Round 1 countdown. Inspired by the IIT Guwahati floating CTA, in our violet.
6. **Ticker.** One mono line under the hero: DECODE · TEAR DOWN · CRAFT · PITCH · DEFEND, seamless CSS marquee, pauses on hover, static under reduced motion. One word in signal red.
7. **Torn edge → paper.** `TornEdge` (built) opens into the cream partner band.
8. **Grain.** One 4% grain layer (`.grain`).

## Layout
12-col grid, max 1200px, side padding 20px (mobile) / 40px (desktop). Section rhythm 96px / 160px. Pill nav: centred, 44px high, max-width 720px, `backdrop-blur` (the only blur), 1px border. Design at 360px, then 768px, then 1440px.

## Motion language
| Item | Spec |
|---|---|
| Smooth scroll | Lenis `lerp: 0.1` (off under reduced motion) |
| Reveal | text lines slide up inside overflow-hidden masks, 700ms, `--ease-out-expo`, 40ms stagger, once, at 20% in view |
| Numbers | ₹50,000 counts up once (1.4s, tabular-nums). No other counters. |
| Cards/rows | hover lift ≤ 4px + 1px accent border, 250ms |
| Rules | transform and opacity only; every animation has a reduced-motion fallback (the global rule in `tokens.css` handles CSS ones) |
| Budget | initial JS ≲ 180 KB gz; no canvas/WebGL; hero LCP ≤ 2.5s; H1 is in the server HTML |
