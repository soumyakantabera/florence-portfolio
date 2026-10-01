# Portfolio Site — Soumyakanta Bera (Finance · Data · AI)

Single-page portfolio to cite from LinkedIn, aimed at Italian recruiters for finance,
FP&A, credit risk, data and AI-related roles. Light mode, modern and minimal, with
light colorful accents (chosen direction: **Soft mesh minimal**).

## What gets built

One long page (built inside the Lovable app as a single route, so it publishes as one URL):

1. **Top bar** — monogram "SB" + name, section links (Profile, Experience, Skills, Contact),
   sticky EN/IT toggle, "Download CV" button.
2. **Hero** — real professional photo (extracted from the CV, rounded card with soft
   color glow), availability pill ("Available immediately · Milan"), big headline
   (Finance, Data & AI positioning), intro paragraph (India → Florence → Milan,
   permit convertible outside the quota system), CTA buttons: Download CV (EN),
   Download CV (IT), LinkedIn link, skill chips.
3. **Stats strip** — M.Sc. University of Florence · M&A internship experience · 2 languages.
4. **Experience** — M&A Analyst Intern, Valdonica SRL (Tuscany), Oct–Dec 2024, with the
   DCF/comps, P&L, due-diligence bullets from the CV.
5. **Flagship projects** (centerpiece, outcome-first with real numbers from the CV):
   - FP&A budget-vs-actual reporting pack — ~4h → ~30min
   - ETL pipeline + Power BI dashboard — 10 metrics, data prep under 20 min
   - MSc thesis early-warning model — 279 firms, 14 countries, 17.1% vs 12.6%,
     DOI SSRN 10.2139/ssrn.7082778
6. **Skills** — grouped: Finance & FP&A / Excel & Modelling / Credit & Risk /
   BI & Analytics (Power BI, SQL, Python) / Business analysis.
7. **Education & certifications** — MSc Florence (2023–2026), BBA MAKAUT India;
   CFI, Microsoft Power BI Data Analyst, Google Data Analytics, Wharton, SAP, etc.
8. **Languages** — English C1, Italian B1 (in consolidamento).
9. **Contact** — dark closing band with CV download buttons (all four), LinkedIn,
   email + phone. Footer with privacy/consent note (from CV).

## Bilingual EN/IT

- Toggle in the top bar (and a default guess: Italian browsers → IT, else EN).
- All copy authored in both languages, drawn from the EN and IT CVs already uploaded
  (the IT CVs give authentic Italian phrasing — reuse it, don't machine-translate ad hoc).
- CV download buttons follow the current language: EN page offers EN CVs first,
  IT page offers IT CVs first, but all four remain reachable.

## Assets (all real, nothing generated)

- Photo: the headshot extracted from the CV, uploaded via Lovable Assets (CDN pointer).
- Four CV PDFs uploaded via Lovable Assets; download links use the CDN URLs with
  `download` attribute and readable filenames
  (e.g. `Soumyakanta_Bera_CV_FinancialAnalyst_EN.pdf`).

## Design tokens (from chosen direction "Soft mesh minimal")

- Fonts: Space Grotesk (display) + Inter (body), loaded via `<link>` in the root route head.
- Palette: ink #171a21, soft gray #6b7280, brand blue #2f6df6, accent amber #f59e0b,
  light violet/green support accents; page background = soft pastel mesh gradients
  (blue / amber / violet / green radials) over near-white #f8fafc. Light mode only.
- White cards, rounded-2xl, soft ring + shadow; restrained motion (gentle fade/settle
  on scroll, small hover lift on cards/buttons). Mobile-responsive throughout.

## Technical notes

- TanStack Start single route `src/routes/index.tsx`; no database, no auth needed.
- Language state via React context + localStorage persistence; both languages are
  static strings, no backend calls.
- Head metadata on the route: unique title/description/og tags, og:type website,
  twitter:card (no og:image — photo is a bundled asset).
- Replace the template placeholder index page; keep __root.tsx structure.

## Steps

1. Upload photo + 4 CV PDFs via lovable-assets; note CDN URLs.
2. Create `src/content/portfolio.ts` with the full EN + IT content model.
3. Build the page (sections above) with the direction's tokens and composition.
4. Wire the EN/IT toggle, language-aware CV buttons, smooth-scroll nav.
5. Update route head metadata; verify with Playwright (desktop + mobile, both languages,
   downloads working) and check build logs are clean.
