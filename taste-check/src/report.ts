import { Finding, RUBRIC, Severity } from "./rubric.js";

const COLORS = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
};

const SEV_BADGE: Record<Severity, string> = {
  blocker: `${COLORS.red}${COLORS.bold}BLOCKER${COLORS.reset}`,
  "fix-this-week": `${COLORS.yellow}FIX-THIS-WEEK${COLORS.reset}`,
  polish: `${COLORS.cyan}POLISH${COLORS.reset}`,
};

const SEV_ORDER: Severity[] = ["blocker", "fix-this-week", "polish"];

export function printReport(title: string, findings: Finding[]): void {
  console.log(`\n${COLORS.bold}taste-check · ${title}${COLORS.reset}\n`);

  if (findings.length === 0) {
    console.log(`${COLORS.green}all checks pass — ship it ✓${COLORS.reset}\n`);
    return;
  }

  const byRubric = new Map<string, Finding[]>();
  for (const f of findings) {
    const list = byRubric.get(f.rubricId) ?? [];
    list.push(f);
    byRubric.set(f.rubricId, list);
  }

  for (const item of RUBRIC) {
    const list = byRubric.get(item.id);
    if (!list) continue;
    console.log(`${COLORS.bold}${item.label}${COLORS.reset}`);
    for (const f of list.sort(
      (a, b) => SEV_ORDER.indexOf(a.severity) - SEV_ORDER.indexOf(b.severity),
    )) {
      const where = f.where ? `${COLORS.dim}${f.where}${COLORS.reset}  ` : "";
      console.log(`  ${SEV_BADGE[f.severity]}  ${where}${f.message}`);
    }
    console.log();
  }

  const counts = SEV_ORDER.map((s) => {
    const n = findings.filter((f) => f.severity === s).length;
    return n > 0 ? `${n} ${s}` : null;
  }).filter(Boolean);
  console.log(`${COLORS.bold}${findings.length} finding${findings.length === 1 ? "" : "s"}${COLORS.reset} ${COLORS.dim}(${counts.join(", ")})${COLORS.reset}\n`);
}

/** Exit code contract: blockers always fail; --strict fails on anything. */
export function exitCode(findings: Finding[], strict: boolean): number {
  if (findings.some((f) => f.severity === "blocker")) return 1;
  if (strict && findings.length > 0) return 1;
  return 0;
}
