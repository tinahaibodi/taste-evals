# Taste CLI (`taste-check`)

Runs the Taste Check design rubric against your app. Same twelve criteria as
the Design Evals Good Design Benchmarks on the site, with weights that sum to
100%. Two automated checks, plus a human pass for the rest.

A screen passes when it clears every blocker. Its score is the weighted
aggregate of the twelve criteria. A screen that fails a blocker scores zero.

## Install

```bash
git clone https://github.com/tinahaibodi/taste-evals
cd taste-evals/taste-check
npm install
npm run build && npm link
```

`taste-check` is then available in any project on your machine.

## Rubric

| Criterion | Weight | Method | Passes when |
| --- | --- | --- | --- |
| Art direction and imagery | 10% | human | Commissioned or curated imagery; photos and illustrations share one cohesive style |
| Typography | 12% | static + vision | Clear type scale (display, heading, body, caption); at most 2 font families |
| Hierarchy | 12% | vision | Weight, styling and variation match their role |
| Spacing and layout | 12% | static + vision | Token spacing (`4 / 8 / 12 / 16 / 24 / 32`); a grid governs text, images and sections |
| Colour | 8% | static + vision | Clear palette with roles: primary, neutrals, semantic |
| Motion and effects | 6% | vision | Noise and blur accentuate; animation reserved for intentional moments |
| Copy | 8% | static + vision | Good line length (≤ 75 chars) and letter spacing; text aligned |
| Icons and detail | 4% | static + vision | One icon style; deliberate borders, dividers and strokes; no emoji as icons |
| Interaction states | 8% | human | Hover, focus, active and disabled treatments exist and stay consistent |
| Responsive behavior | 8% | human | Grid, type scale and containers hold at tablet and mobile |
| States and feedback | 8% | vision | Empty, loading and error states for every required form and flow |
| Marketing to product consistency | 4% | vision | Type, spacing and colour logic carry from site into product |
| **Total** | **100%** | | |

Match the static scales to your design system by editing `SPACING_SCALE` and
`TYPE_SCALE` in `src/rubric.ts`, then rebuild.

## 1. Static check

Deterministic lint of CSS and JSX for the mechanically checkable half of the
rubric. Exits nonzero on blockers.

```bash
taste-check static src/
```

What it catches:

| Criterion | How |
| --- | --- |
| Spacing and layout | Flags `padding` / `margin` / `gap` off the spacing scale in CSS and inline JSX |
| Typography | Flags off-scale `font-size` values; counts primary `font-family` declarations (max 2) |
| Icons and detail | Detects emoji characters in markup |
| Copy | Measures visible JSX text length |
| Colour | Flags raw hex colors that are not defined as named CSS variables |

## 2. Vision check

Sends a screenshot to a vision model and grades the heuristic criteria:
hierarchy, motion and effects, states and feedback, marketing to product
consistency, plus a second look at the static + vision rows. Advisory by
default; treat it as a reviewer comment, not a merge gate.

```bash
export AI_GATEWAY_API_KEY=...
npm install playwright && npx playwright install chromium

taste-check vision http://localhost:3000/expenses
taste-check vision ./screenshot.png --model anthropic/claude-sonnet-4.5
```

## 3. Human pass

Art direction, interaction states, and responsive behavior are not graded by
the CLI. Do a final check of the hierarchy and motion interactions before
merging the PR with the changes. The interactive checklist lives on the site
under Taste Check.

## Gate pull requests

```yaml
# .github/workflows/taste.yml
name: taste check
on: pull_request
jobs:
  static:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: taste-check static src/
```

## Severities

Same three levels as the Taste Check page:

- `BLOCKER` — readability or contrast failures, broken hierarchy, missing empty
  or error states, anything that makes a spending amount ambiguous. Always fails
  the run.
- `FIX-THIS-WEEK` — off-token spacing, icon inconsistencies, role-less colors.
- `POLISH` — cosmetic; batched.

Add `--strict` to fail the run on any finding, not just blockers.
