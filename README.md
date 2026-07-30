# Taste Labs — Field Notes

A Rauno-style field-notes web app for the Taste Labs planning doc: what LLMs think good
design is, the good-design checklists, the bad-design critique (with annotated card
examples), and a QA process designed to be realistic for Meridian's two-developer team.

## Stack
- Next.js 14 (App Router) + TypeScript
- Framer Motion for scroll reveals, the hero entrance, and self-drawing annotation arrows

## Run it
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Where to add animations
- `components/Reveal.tsx` — the shared scroll-reveal wrapper (tweak duration/easing once, applies everywhere)
- `components/Annot.tsx` — handwritten annotations + SVG arrows that draw themselves on scroll (`pathLength`)
- `components/Hero.tsx` — hero entrance sequence
- `components/QaProcess.tsx` — interactive 12-point checklist (client component with state)

All motion respects `prefers-reduced-motion`.

## Structure
```
app/layout.tsx          fonts + metadata
app/globals.css         design tokens (colors, hand/mono/sans fonts, panels, cards)
app/page.tsx            assembles the sections
components/
  Hero.tsx              handwritten red title
  Brief.tsx             deliverables + nice-to-haves from the doc
  LlmGoodDesign.tsx     Harvey / Sierra / Cognition
  HarveyBreakdown.tsx   full Harvey good-design breakdown
  GoodDesignChecklist.tsx  the general checklist
  BadDesign.tsx         annotated card examples + all 14 bad-design bullets
  QaProcess.tsx         3 gates, 12-point rubric, severity levels, issue template
```
