#!/usr/bin/env node
import { resolve } from "node:path";
import { existsSync } from "node:fs";
import { printReport, exitCode } from "./report.js";
import { runStaticCheck } from "./static-check.js";

const USAGE = `taste-check — run the design rubric against your code

Usage:
  taste-check static [dir]              Deterministic lint of CSS/JSX
                                        (spacing tokens, type scale, font count,
                                        emoji-as-icon, copy length, color roles)
  taste-check vision <url|image> [opts] LLM grading of a rendered screen
                                        (hierarchy, contrast, nesting, alignment,
                                        states, consistency, motion)

Options:
  --strict          Exit non-zero on any finding (default: blockers only)
  --model <id>      Vision model (default: openai/gpt-4o, via Vercel AI Gateway)
  -h, --help        Show this help

Vision check requires AI_GATEWAY_API_KEY (or provider key) in the environment.
Grading a live URL also requires: npm install playwright && npx playwright install chromium
`;

async function main(): Promise<number> {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    console.log(USAGE);
    return 0;
  }

  const strict = args.includes("--strict");
  const modelFlag = args.indexOf("--model");
  const model = modelFlag !== -1 ? args[modelFlag + 1] : "openai/gpt-4o";
  const positional = args.filter(
    (a, i) => !a.startsWith("--") && (modelFlag === -1 || i !== modelFlag + 1),
  );
  const [command, target] = positional;

  if (command === "static") {
    const dir = resolve(target ?? ".");
    if (!existsSync(dir)) {
      console.error(`error: directory not found: ${dir}`);
      return 2;
    }
    const findings = runStaticCheck(dir);
    printReport(`static · ${dir}`, findings);
    return exitCode(findings, strict);
  }

  if (command === "vision") {
    if (!target) {
      console.error("error: vision check needs a URL or an image path\n");
      console.log(USAGE);
      return 2;
    }
    // Imported lazily so the static check works without the `ai` dependency resolved.
    const { runVisionCheck } = await import("./vision-check.js");
    const findings = await runVisionCheck(target, model);
    printReport(`vision · ${target} · ${model}`, findings);
    return exitCode(findings, strict);
  }

  console.error(`error: unknown command "${command}"\n`);
  console.log(USAGE);
  return 2;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(`\nerror: ${err instanceof Error ? err.message : err}`);
    process.exit(2);
  },
);
