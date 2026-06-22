# Machina — Next.js rebuild

A production-quality, pixel-faithful Next.js recreation of the **Machina** AI
automation agency site (originally built in Framer). Single long landing page
plus a `/contact` route.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + TypeScript
- **motion** (Framer Motion) — scroll reveals, headline word-stagger, carousels, count-up
- **lenis** — global smooth scroll
- **CSS Modules + CSS variables** — Framer's design tokens and type presets ported verbatim
- Fonts via `next/font/google`: Inter Tight (display), Inter (body), Geist Mono (labels)

## Project structure

```
app/
  layout.tsx          fonts, metadata, LenisProvider
  page.tsx            landing page (composes sections in order)
  globals.css         design tokens, reset, typography presets
  contact/            matching contact route (hero + form)
components/
  layout/             Navbar, Footer, LenisProvider
  sections/           Hero, ClientLogos, Services, Process, CaseStudy,
                      SingleTestimonial, Impact, Pricing, Testimonials,
                      Integration, FAQ, BeforeFooterCTA
  ui/                 Button, Eyebrow, Reveal, AnimatedHeading, Collapse,
                      Carousel, Marquee, CountUp, SectionHeader, Container
lib/
  content.ts          all copy/data (industries, steps, plans, faqs, …)
  motion.ts           shared animation variants / easings
  fonts.ts            next/font config
  useAnchorScroll.ts  Lenis-aware in-page anchor navigation
public/images/        all site assets (copied from the Framer export)
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Fidelity notes

- Breakpoints match the original exactly: desktop `>=1200px`, tablet
  `810-1199.98px`, phone `<=809.98px`. Max container width `1400px`.
- The source is a Framer template; some content is intentionally placeholder
  (identical testimonial quotes, empty FAQ answers for Q2-Q5) and is replicated
  as-is. The Framer "REMIX THIS TEMPLATE" badge and "Powered by" attribution
  were dropped.
- The Impact counters animate to best-effort targets (the originals were
  rendered by a runtime code component and not present in the static export).
- Content is centralized in `lib/content.ts` for easy editing.
