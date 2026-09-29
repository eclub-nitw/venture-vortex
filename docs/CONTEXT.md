# Venture Vortex 2026 — Project Context (paste this to your AI first)

## What we are building
A single-page **information landing page** for Venture Vortex, the flagship competition of the Entrepreneurship Club (E-Club), NIT Warangal, held within Technozion 2026. It explains the event and sends people to **Register on Unstop**. It does **not** collect registrations, payments or personal data. Target: about two days, no hard deadline. Hosted first on Vercel, later merged into the main E-Club site as `/venture-vortex`.

## Verified facts (source of truth is `src/data/event.ts`)
| Item | Value | Source |
|---|---|---|
| Name | Venture Vortex (spelled VORTEX) | poster |
| Tagline | Decode the business. Craft what's next. | poster |
| Organiser | Entrepreneurship Club (E-Club), NIT Warangal | poster, caption |
| In collaboration with | Master's Union | poster logo + caption |
| Powered by / Outreach partner | Unstop / School2Startup (S2S) | poster, caption |
| Fest and finale | Technozion, NIT Warangal, 30–31 Oct 2026, on campus | poster, Unstop |
| Prize | ₹50,000 total cash prize pool + Upstox courses + exclusive goodies + national-level certificates | poster, caption |
| Team | 2–4 members; cross-college and cross-year allowed; team locks when Round 1 registration closes | Unstop |
| Eligibility | UG/PG students across India; working professionals can also participate | Unstop, caption |
| Fee | Free | Unstop, caption |
| Register | https://unstop.com/o/cxKq1kz?lb=usedZ8to | Unstop |
| Contact / socials | e_club@nitw.ac.in · Instagram @eclubnitw · LinkedIn: linkedin.com/company/entrepreneurship-club-nitw | Unstop, E-Club |

**Dates: the Unstop timeline is absolute (E-Club decision).** The page shows only these windows (IST):
| Round | Name | Window | Mode |
|---|---|---|---|
| 1 | Behind the Startup (startup teardown) | 24 Sep 2026 09:00 → 9 Oct 2026 08:00 | Online, Unstop |
| 2 | Strategy Build | 11 Oct 2026 08:00 → 18 Oct 2026 20:00 | Online, Unstop |
| 3 | Boardroom Showdown (grand finale) | 30 Oct 2026 08:00 → 31 Oct 2026 20:00 | Live, NIT Warangal campus |
The Instagram caption's "registration deadline 5 Oct" is NOT shown.

## Round 1 — official brief "Behind the Startup: Startup Teardown"
**Objective.** Choose one of the 50 startups and study how it grew, what made it different, how it makes money and what challenges it faces. Not a company profile: focus on the decisions and strategies that helped it stand out.
**Seven areas** (exact headings): 1 Business Journey & Milestones · 2 Core Differentiation · 3 Business & Revenue Model · 4 Innovation & Moat · 5 Challenges & Strategic Weaknesses · 6 Current Market Position · 7 Future Growth Opportunities. Each has 3–5 sub-points (in `event.round1Areas`). End with **2–4 key strategic insights**, each backed by evidence.
**Deliverable.** (1) A deck of **10–18 slides** with a list of sources; full names of all team members on the title slide. (2) **Mandatory LinkedIn post** from your own account: tag the club page (Entrepreneurship Club-NIT Warangal) and the company's page, highlight the startup's product/idea, publish it inside the Round 1 period, and include the post link in your submission.
**Research rules.** Reliable, recent sources; support numbers with sources; use company documents, interviews, filings, industry reports, credible news; do not rely only on AI summaries, Wikipedia or generic articles.
**Judging.** Depth of Research 30% · Understanding of Journey & Differentiation 25% · Critical Analysis & Strategic Insight 25% · Structure & Presentation 20%.
**The 50 startups** are in `src/data/startups.ts`, copied from the brief with its numbering and sector labels. The 8 galaxy groups are our layout grouping only.

## Round 2 / Round 3 (Unstop panel)
Round 2: pick **Vertical A Marketing Strategy Challenge** (brand positioning, target audience profiles, GTM channels, a 20–60 second ad concept) or **Vertical B Product Strategy & MVP Building** (user personas, MVP feature prioritisation, key success metrics, wireframes). Problem statements go to shortlisted teams only.
Round 3: finalists pitch live to industry experts, founders and faculty, then a live boardroom defence and Q&A. Judging: Strategy Strength & Business Viability 30% · Handling of Live Defence / Q&A 30% · Creativity & Originality 20% · Presentation & Storytelling 20%.

## Decisions from E-Club (28–29 Sep 2026)
- Spelling is **Venture Vortex**. Instagram post link not needed; LinkedIn page URL above is official (confirmed correct).
- **Prize split (winner vs runner-up) stays undisclosed for now — this is a confirmed E-Club decision, not a gap.** Do not add it even if someone asks; check back with Wahid before ever showing a number.
- **WhatsApp group link is NOT on the public page.** Confirmed mechanism: registered teams receive it **directly from Unstop, after registering** — not emailed or posted by E-Club. FAQ/Eligibility copy can say "You'll get the WhatsApp group link from Unstop after you register" but must not include the link itself.
- Hero wordmark: request the transparent "VENTURE VORTEX" wordmark (the event logotype, not the round E-Club club logo) from the design team; until it arrives, use the CSS chrome-gradient type (fallback specified in DESIGN.md). Wahid mentioned a possible existing file at `C:\Users\tipty\e-club-event\public` named something like `ecell-logo` — that folder is outside this project and outside Claude's file access; confirm whether that file is actually the Venture Vortex wordmark or the E-Club circular logo (they are different assets) before using it, and copy whichever applies into `public/images/brand/` here.
- Institute permission for the NIT Warangal name/emblem and the domain question will be confirmed with the institute by **Wed 30 Sep 2026** (E-Club main site).

## Still open (nothing below may be invented; hide until confirmed)
1. Shortlist announcement date: not published.
2. Postal code `506004` in JSON-LD: confirm.
3. Logos: 45 of 50 startup logos were fetched from the companies' own sites; five use monograms (Digantara, TartanSense, Aina, Ather Energy, Exponent Energy) until a verified logo is found. Master's Union, Unstop, S2S, Technozion and E-Club logo files must come from the design team.
4. Unstop's Round 3 text says "Venture Vertex" and contains placeholder wording. E-Club will ask Unstop to fix it — do not copy it either way.

## Never publish
Personal phone numbers of coordinators. The WhatsApp invite link itself (referring to how to get it is fine). The prize split. Anything not in this file. Any claim that a listed startup endorses, sponsors or partners with the event.
