# Taste Check

A design audit kit your team can actually run. The site walks through a Meridian
brief, a Harvey case study, Design Evals benchmarks, a Taste Check checklist,
and the Taste CLI that keeps the rubric running after the audit.

Live site: [tastecheck.vercel.app](https://tastecheck.vercel.app)

## Stack

- Next.js (App Router) + TypeScript
- DM Sans + JetBrains Mono
- `taste-check/` — the CLI that grades CSS/JSX (static) and screenshots (vision)

## Run the site

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Run the CLI

```bash
cd taste-check
npm install
npm run build && npm link

taste-check static ../src
taste-check vision http://localhost:3000
```

See [`taste-check/README.md`](./taste-check/README.md) for the twelve criterion
rubric, weights, CI wiring, and severity rules.

## Structure

```
app/                    Next.js app (layout, page, globals)
components/
  Hero.tsx              Landing gateway
  MeridianBrief.tsx     Client brief
  HarveyBreakdown.tsx   Case study + Taste Benchmarks
  BadDesign.tsx         Design Evals (Good / Bad weights)
  QaProcess.tsx         Taste Check checklist + severities
  ToolWalkthrough.tsx   Taste CLI install and usage
  EvalRunner.tsx        Example Results panel
  benchmarks.ts         Shared twelve criterion scores and weights
taste-check/            CLI source (static + vision)
```
