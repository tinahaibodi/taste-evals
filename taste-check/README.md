# taste-check

A CLI that turns the taste-evals design rubric into something developers can run,
instead of a checklist they have to remember. Two checks:

## 1. Static check — deterministic, CI-friendly

Lints your CSS and JSX for the rubric items that are mechanically checkable.
No API keys, no browser, exits non-zero on blockers.

```bash
npx tsx src/index.ts static ../        # or any directory
```

What it catches:

| Rubric line | How |
| --- | --- |
| Spacing tokens (4/8/12/16/24/32) | Flags any `padding`/`margin`/`gap` off the scale, in CSS and inline JSX styles |
| Type scale (12/14/17/24/32) | Flags off-scale `font-size` values |
| Max 2 font families | Counts distinct primary `font-family` declarations |
| Icons: no emoji-as-icon | Detects emoji characters in markup |
| Copy ≤ 75 chars per line | Measures visible JSX text |
| Color roles | Flags raw hex colors that aren't defined as named CSS variables |

## 2. Vision check — LLM grading of a rendered screen

Sends a screenshot to a vision model and grades the judgment-call rubric items:
hierarchy, contrast, nested containers, alignment, loading/empty/error states,
consistency, and motion. Advisory by default — treat it as a reviewer comment,
not a merge gate.

```bash
export AI_GATEWAY_API_KEY=...           # Vercel AI Gateway
npx tsx src/index.ts vision ./screenshot.png
npx tsx src/index.ts vision http://localhost:3000   # needs playwright installed
npx tsx src/index.ts vision ./screen.png --model anthropic/claude-sonnet-4.5
```

## Severities

Findings use the same three levels as the QA process:

- `BLOCKER` — readability/contrast failures, broken hierarchy, ambiguous critical info. Always fails the run.
- `FIX-THIS-WEEK` — off-token spacing, icon inconsistencies, role-less colors.
- `POLISH` — cosmetic; batched.

Add `--strict` to fail the run on any finding, not just blockers.
