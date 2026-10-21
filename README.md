# Apex Ignite — Precision Plastic Injection Molding

A single-page corporate website for Apex Ignite, a manufacturer of precision thermoplastic injection-molded components. It is designed to match a richly styled industrial B2B site in visual and CSS complexity: mega menus, an off-canvas info panel, a search overlay, tabbed content, an animated FAQ accordion, counters, marquees, a quote modal and floating contact buttons.

## Sections

Top bar · sticky header with three mega menus · hero with animated headline and live "plant status" card · animated stats ribbon · about collage with rotating badge · tabbed Achievements / Mission / Vision / Capabilities / Quality panel · product grid with "Send a query" modal · scrolling ticker · four-step process · "Why choose us" radial layout · industries grid · FAQ accordion with CTA strip · brand marquee · contact section with form and stylised map · footer · floating WhatsApp/call/email buttons · back-to-top button with a scroll-progress ring.

## Tech

- TanStack Start (React 19) on Netlify
- Hand-written CSS in `src/site.css` (custom properties, clip-path, conic/radial gradients, masks, `:has()`, `color-mix()`, keyframe choreography, reduced-motion support)
- Radix UI primitives for accessible tabs, accordion and dialog
- Netlify Forms for the contact and quote forms
- Netlify Image CDN for responsive WebP delivery of the generated photography in `public/img`

## Run locally

```bash
pnpm install
netlify dev        # full Netlify emulation (forms, image CDN)
# or
pnpm dev           # Vite only, on port 3000
```

## Editing content

All copy, products, industries, FAQs, stats and contact details live in `src/data/site.ts`. The address, phone and email values are placeholders; replace them with the real details before launch.
