# Who builds what (soft target: about two days; no hard deadline)

Team: **Satyam** and **Sumit** (first-years, vibe-coding allowed; midsems come first), **Saad** (senior; owns the deeper sections and reviews), **Wahid** (head of tech: repo, data, deploy, final review).

Claude has already built and browser-tested the hardest parts: the startup galaxy (`Startups.tsx`), `Spiral`, `Countdown`, `TornEdge` and `FloatingRegister`. Adapt them; do not rewrite them.

| Owner | Files (only these) | Deliverable | Effort |
|---|---|---|---|
| **Wahid** | repo, `src/data/*`, `layout.tsx`, `globals.css`, `tokens.css`, deploy, SEO | scaffold on `main` **before** anyone starts; fills open items | Day 0 |
| **Satyam** | `sections/Nav.tsx`, `Hero.tsx`, `Ticker.tsx`, `FactsStrip.tsx` | sections 0–2 (static first; descent animation last) | 3–4 h |
| **Sumit** | `sections/Journey.tsx`, `Round2.tsx`, `Round3.tsx`, `Prizes.tsx` | sections 3, 5, 6, 7 | 4 h |
| **Saad** | `sections/Round1.tsx` (dossier), `Eligibility.tsx`, `Faq.tsx`, `Partners.tsx`, `Footer.tsx` + review of the galaxy | sections 4, 9, 10, 11 | 5 h |
| **Wahid + Saad** | integration, fact check vs CONTEXT.md, Lighthouse, launch | QA sign-off | Day 2 |

## Rules for everyone
1. Own branch: `git checkout -b satyam/hero`. Never commit to `main`.
2. Touch only your files. Need something elsewhere? Ask Wahid.
3. Open a Pull Request when your section renders; Wahid or Saad reviews with the PR checklist.
4. Load `AGENTS.md` in your AI tool, then paste your kickoff prompt (docs/KICKOFF-PROMPTS.md).
5. First-years: ship a simpler version rather than nothing. Saad can finish it.

## Schedule
Day 0 evening: scaffold, invites, PDF shared · Day 1: build on branches, first PRs by night · Day 2: fixes, facts, Lighthouse, deploy.
