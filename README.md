# Venture Vortex 2026 — landing page

Landing page for Venture Vortex (E-Club NIT Warangal × Master's Union, powered by Unstop), Technozion 2026.

## First-time setup (each contributor)
```bash
git clone <REPO_URL> venture-vortex
cd venture-vortex
npm install
npm run dev        # http://localhost:3000
```
Node 20+ required (`node -v`).

## Workflow
1. `git checkout main && git pull`
2. `git checkout -b yourname/section-name`  (e.g. `satyam/hero`)
3. Work only in your files (see `docs/TASKS.md`). Commit small and often: `git add -A && git commit -m "hero: masked headline reveal"`
4. `git push -u origin yourname/section-name`, then open a Pull Request on GitHub → `main`. Fill in the PR checklist.
5. Wahid/Saad review and merge. Never push straight to `main`.

## Read before coding
`AGENTS.md` (paste into your AI) · `docs/CONTEXT.md` · `docs/DESIGN.md` · `docs/PAGE-SPEC.md` · `docs/TASKS.md` · `docs/QA-SEO.md`

## Deploy
Vercel → Import Git Repository → framework Next.js (auto). Every push to `main` deploys to production; every PR gets a preview URL.
