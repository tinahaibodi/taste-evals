import { readFileSync } from "node:fs";
import { generateText, Output } from "ai";
import { z } from "zod";
import { Finding, RUBRIC } from "./rubric.js";

const gradeSchema = z.object({
  results: z.array(
    z.object({
      rubricId: z.string().describe("The id of the rubric item being graded"),
      pass: z.boolean(),
      severity: z.enum(["blocker", "fix-this-week", "polish"]),
      note: z
        .string()
        .describe("One concrete sentence: what fails and where on the screen. Empty if pass."),
    }),
  ),
});

/** Vision grades heuristic criteria; human-only items stay on the checklist. */
const VISION_RUBRIC = RUBRIC.filter((r) => r.method === "vision" || r.method === "both");

function buildPrompt(): string {
  const items = VISION_RUBRIC.map(
    (r) =>
      `- id: ${r.id} · weight: ${r.weight}% · default severity: ${r.defaultSeverity}\n  ${r.label}`,
  ).join("\n");

  return `You are a design QA reviewer for a product team with no designer on staff.
Grade the attached UI screenshot against each Taste Check rubric item below.
Be strict but concrete: only fail an item if you can point at specific evidence
in the screenshot, and describe that evidence in the note (element + location).

These criteria come from the Design Evals Good Design Benchmarks. A screen
passes when it clears every blocker; its score is the weighted aggregate of
the twelve criteria. A screen that fails a blocker scores zero.

Severity rules:
- "blocker" only for readability/contrast failures, broken hierarchy, missing
  empty/loading/error states, or anything that makes critical information
  ambiguous (especially money amounts).
- Use the item's default severity otherwise, downgrading to "polish" for
  purely cosmetic issues.

Rubric:
${items}

Return one result per rubric item, passing or failing each.`;
}

async function loadImage(target: string): Promise<Uint8Array | URL> {
  if (/^https?:\/\//.test(target)) {
    // A live URL: screenshot it with Playwright if available.
    let chromium;
    try {
      ({ chromium } = await import("playwright"));
    } catch {
      throw new Error(
        "Grading a URL requires Playwright for the screenshot. Either run:\n" +
          "  npm install playwright && npx playwright install chromium\n" +
          "or pass a screenshot file instead: taste-check vision ./screen.png",
      );
    }
    const browser = await chromium.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto(target, { waitUntil: "networkidle" });
      return await page.screenshot({ fullPage: true });
    } finally {
      await browser.close();
    }
  }
  return readFileSync(target);
}

export async function runVisionCheck(
  target: string,
  model: string,
): Promise<Finding[]> {
  const image = await loadImage(target);

  const { output } = await generateText({
    model,
    output: Output.object({ schema: gradeSchema }),
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: buildPrompt() },
          { type: "image", image },
        ],
      },
    ],
  });

  const findings: Finding[] = [];
  for (const result of output.results) {
    if (result.pass) continue;
    findings.push({
      rubricId: result.rubricId,
      severity: result.severity,
      where: target,
      message: result.note,
    });
  }
  return findings;
}
