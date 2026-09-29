# Page specification — section by section

Route `/`. Sections live in `src/features/venture-vortex/sections/`; the page is exported as `<VentureVortexPage />` (`index.tsx`, wrapped in `data-theme="vortex"` + `.grain`). Facts come only from `src/data/event.ts` / `startups.ts`. **Already built by Claude (adapt, do not rewrite):** `sections/Startups.tsx`, `components/Spiral.tsx`, `Countdown.tsx`, `TornEdge.tsx`, `FloatingRegister.tsx`. Everything else is a stub with an OWNER comment.

## 0. Pill nav (Satyam)
Floating centred pill: wordmark · About · Rounds · Prizes · The 50 · FAQ · **Register ↗** (accent). Mobile: wordmark + Register + menu sheet. `target="_blank" rel="noopener noreferrer"` to `event.registerUrl`.

## 1. Hero + descent (Satyam)
Mono label `TECHNOZION 2026 · NIT WARANGAL · 30–31 OCT`. H1 **Decode the business. Craft what's next.** ("Decode" in signal red). Sub: "An all-India student startup strategy competition. Tear down one of 50 Indian startups, build the strategy, and defend it live in front of the panel." CTA Register on Unstop; text link "See the rounds ↓". Mono facts row: `₹50,000 PRIZE POOL · FREE · TEAMS OF 2–4 · FINALE ON CAMPUS`. `<Spiral/>` behind. `<Countdown/>` chip (top-right desktop). Implement the descent in DESIGN.md as a stretch goal after the static hero is merged. H1 must be in server HTML.

## 2. Ticker + facts strip (Satyam)
`Ticker`: mono marquee. `FactsStrip`: four numerals separated by 1px rules: ₹50,000 pool · 50 startups · 3 rounds · 2–4 per team. Only the prize counts up.

## 3. The orbits — Understand → Build & Sell → Defend (Sumit)
Concentric rings with the dot-on-spiral animation (DESIGN.md §2). Beside it, three entries: numeral, name, one sentence, date window (from `rounds`), mode tag ONLINE / ON CAMPUS. Mobile: rings above, entries below. Round 3 visually heaviest.

## 4. Round 1 — dossier reader (Saad)
Left sticky index (7 areas), right panels with each area's sub-points from `event.round1Areas`. After the panels: **"What to submit"** (deck 10–18 slides + sources; full names on title slide; end with 2–4 insights), then a boxed **mandatory LinkedIn post** block with the four rules from `round1Deliverable.linkedin` and a button to the club's LinkedIn page (`event.linkedinUrl`, label "Entrepreneurship Club-NIT Warangal"). Then judging bars (30/25/25/20 as CSS widths animating once) and the four research rules. CTA "Read the brief on Unstop →".

## 5. Round 2 — two doors (Sumit)
Two large panels, Vertical A and Vertical B, with their four deliverables each. Note: "Problem statements are shared with shortlisted teams only." Do not invent judging criteria.

## 6. Round 3 — the boardroom (Sumit)
Full-width vortex-deep panel, huge `30–31 OCT`. Live pitch then hot-seat defence. Judging bars 30/30/20/20. "NIT Warangal campus, during Technozion."

## 7. Prizes (Sumit)
Giant **₹50,000** (lavender, glow underline), "total cash prize pool". Three lines: Upstox courses · Exclusive goodies · National-level certificates. **No split.**

## 8. The 50 (built)
Heading "Pick one of these fifty." Galaxy on desktop, grouped list on mobile, disclaimer below.

## 9. Eligibility + FAQ (Saad)
Native `<details>`. FAQ (answers only from CONTEXT.md): Who can register? · Team size? · Fee? · Can teammates be from different colleges? · Can I change my team later? (locks when Round 1 registration closes) · Is the final online? (no, on campus) · Do I have to post on LinkedIn? (yes, mandatory, rules above) · How long should the deck be? (10–18 slides) · Where do I submit? (Unstop) · Who do I contact? (e_club@nitw.ac.in) · How do I get the WhatsApp group? (Unstop sends it directly after you register — do not link it here). Emit `FAQPage` JSON-LD only if every answer is visible verbatim.

## 10. Partners on paper (Saad)
`<TornEdge/>` then the cream band: Organised by E-Club NIT Warangal → In collaboration with Master's Union → Powered by Unstop → Outreach partner School2Startup. Uniform 40px logo height, alt text, greyscale→colour on hover.

## 11. Final CTA + footer (Saad)
"Teams lock after Round 1 registration closes. Get yours in." + Register. Footer: e_club@nitw.ac.in, Instagram, LinkedIn, © 2026 E-Club NIT Warangal, disclaimers, `/privacy` link (state: no cookies; Vercel Analytics only). **No WhatsApp link.**

## Global
Skip link, focus order = visual order, 80px anchor offset for the nav, all external links `rel="noopener noreferrer"`.
