# QA, SEO and performance checklist (launch gate)

## Facts (fail = do not launch)
- [ ] Every date, amount, link on the page matches `docs/CONTEXT.md` and the live Unstop page (open both side by side).
- [ ] Spelling "Venture Vortex" everywhere; no "Vertex". "₹50,000" identical everywhere. Times shown in IST.
- [ ] Register buttons open `https://unstop.com/o/cxKq1kz?lb=usedZ8to` — click every one.
- [ ] Open items in CONTEXT.md resolved or hidden. No personal phone numbers. **No WhatsApp invite link anywhere.** The 50 startups match the official brief (numbers, names, sectors).
- [ ] Round 1 rules include the mandatory LinkedIn post, the 10–18 slide deck and the 2–4 insights.
- [ ] Only the Unstop windows appear; the caption's 5 Oct deadline does not.
- [ ] Partner order and spellings match the poster.
- [ ] Startup logos: each is the right company (spot-check 10), five monograms are intentional, trademark disclaimer is visible under the galaxy.

## SEO (built in, then verified by a human)
- [ ] `<title>` and meta description from `seo` in `event.ts`; one `<h1>`; heading order h1→h2→h3, no skips.
- [ ] `<html lang="en-IN">`; canonical URL; Open Graph + Twitter card with 1200×630 `og.png`.
- [ ] `src/app/sitemap.ts` and `src/app/robots.ts` present; sitemap submitted in Google Search Console.
- [ ] JSON-LD `Event` from `eventJsonLd()` passes the **Rich Results Test** with no errors.
- [ ] Favicon + `apple-touch-icon` + `manifest`.
- [ ] Verify the property in Google Search Console with a club-owned Google account (not a personal one); add a second owner.
- [ ] Search "venture vortex nit warangal" a week after launch and check indexing in Search Console → Pages.

## Performance budget (Lighthouse mobile, throttled)
Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100. LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Initial JS ≲ 180 KB gzipped. Hero image/wordmark ≤ 150 KB, everything else lazy. Fonts: 3 families, `display: swap`, latin subset only. No layout shift from images (set width/height). Galaxy: 50 tiny logos, `unoptimized`, no extra requests beyond the 45 files. No external scripts except Vercel Analytics.

## Accessibility
- [ ] Keyboard-only run-through; visible focus ring; skip link.
- [ ] Contrast: text ≥ 4.5:1 (plum `#6a1f97` is never text).
- [ ] All images have alt; decorative SVGs `aria-hidden`. Constellation nodes reachable by keyboard.
- [ ] `prefers-reduced-motion` respected (test by enabling it in OS settings).
- [ ] Tap targets ≥ 44px. Test at 360px width and at 200% browser zoom.

## Devices
Chrome, Safari (iOS), Firefox, Samsung Internet. A low-end Android phone on 4G is the real test: if scrolling stutters, remove animation, not content.
