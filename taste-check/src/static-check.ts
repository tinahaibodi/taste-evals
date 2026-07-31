import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";
import {
  Finding,
  MAX_FONT_FAMILIES,
  MAX_LINE_LENGTH,
  SPACING_SCALE,
  TYPE_SCALE,
} from "./rubric.js";

const SCANNED_EXTENSIONS = new Set([".css", ".scss", ".tsx", ".jsx", ".html"]);
const IGNORED_DIRS = new Set(["node_modules", ".next", ".git", "dist", "build", "out"]);

function collectFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!IGNORED_DIRS.has(entry)) collectFiles(full, out);
    } else if (SCANNED_EXTENSIONS.has(extname(entry))) {
      out.push(full);
    }
  }
  return out;
}

interface Line {
  file: string;
  lineNo: number;
  text: string;
}

function lines(root: string, file: string): Line[] {
  return readFileSync(file, "utf8")
    .split("\n")
    .map((text, i) => ({ file: relative(root, file), lineNo: i + 1, text }));
}

// ---- individual checks ----

const CSS_SPACING_PROP =
  /(?:^|[;{\s])(padding|margin|gap|row-gap|column-gap|(?:padding|margin)-(?:top|right|bottom|left))\s*:\s*([^;}]+)/g;
const JSX_SPACING_PROP = /\b(padding|margin|gap)(Top|Right|Bottom|Left|Block|Inline)?\s*:\s*(-?\d+(?:\.\d+)?)\b/g;

function checkSpacing(line: Line, isCss: boolean, findings: Finding[]): void {
  if (isCss) {
    for (const m of line.text.matchAll(CSS_SPACING_PROP)) {
      for (const px of m[2].matchAll(/(-?\d+(?:\.\d+)?)px/g)) {
        const value = Math.abs(parseFloat(px[1]));
        if (!SPACING_SCALE.includes(value)) {
          findings.push({
            rubricId: "spacing-layout",
            severity: "fix-this-week",
            where: `${line.file}:${line.lineNo}`,
            message: `${m[1]}: ${px[0]} is not on the spacing scale`,
          });
        }
      }
    }
  } else {
    for (const m of line.text.matchAll(JSX_SPACING_PROP)) {
      const value = Math.abs(parseFloat(m[3]));
      if (!SPACING_SCALE.includes(value)) {
        findings.push({
          rubricId: "spacing-layout",
          severity: "fix-this-week",
          where: `${line.file}:${line.lineNo}`,
          message: `${m[1]}${m[2] ?? ""}: ${m[3]} is not on the spacing scale`,
        });
      }
    }
  }
}

const CSS_FONT_SIZE = /font-size\s*:\s*(\d+(?:\.\d+)?)(px|rem)/g;
const JSX_FONT_SIZE = /\bfontSize\s*:\s*["']?(\d+(?:\.\d+)?)(px)?["']?/g;

function checkTypeScale(line: Line, isCss: boolean, findings: Finding[]): void {
  const regex = isCss ? CSS_FONT_SIZE : JSX_FONT_SIZE;
  for (const m of line.text.matchAll(regex)) {
    const raw = parseFloat(m[1]);
    const px = m[2] === "rem" ? raw * 16 : raw;
    if (!TYPE_SCALE.includes(px)) {
      findings.push({
        rubricId: "typography",
        severity: "fix-this-week",
        where: `${line.file}:${line.lineNo}`,
        message: `font size ${m[1]}${m[2] ?? ""} is not on the type scale`,
      });
    }
  }
}

function checkFontFamilies(allLines: Line[], findings: Finding[]): void {
  const families = new Map<string, string>(); // family -> first location
  for (const line of allLines) {
    for (const m of line.text.matchAll(/font-family\s*:\s*([^;}]+)/g)) {
      // Only the primary (first) family counts; the rest are fallbacks.
      const primary = m[1].split(",")[0].trim().replace(/["']/g, "").toLowerCase();
      if (primary.startsWith("var(") || primary === "inherit") continue;
      if (!families.has(primary)) {
        families.set(primary, `${line.file}:${line.lineNo}`);
      }
    }
  }
  if (families.size > MAX_FONT_FAMILIES) {
    findings.push({
      rubricId: "typography",
      severity: "blocker",
      message: `${families.size} font families in use (max ${MAX_FONT_FAMILIES}): ${[...families.keys()].join(", ")}`,
    });
  }
}

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE0F}]/u;

function checkEmoji(line: Line, findings: Finding[]): void {
  // Only flag emoji in JSX text content or string literals, not comments.
  if (line.text.trimStart().startsWith("//") || line.text.trimStart().startsWith("*")) return;
  const m = line.text.match(EMOJI);
  if (m) {
    findings.push({
      rubricId: "icons-detail",
      severity: "fix-this-week",
      where: `${line.file}:${line.lineNo}`,
      message: `emoji "${m[0]}" used in the interface; use a functional icon instead`,
    });
  }
}

function checkCopyLength(line: Line, findings: Finding[]): void {
  // Visible JSX text: content between a closing '>' and the next '<'.
  for (const m of line.text.matchAll(/>([^<>{}]+)</g)) {
    const text = m[1].trim();
    if (text.length > MAX_LINE_LENGTH && /\s/.test(text)) {
      findings.push({
        rubricId: "copy",
        severity: "polish",
        where: `${line.file}:${line.lineNo}`,
        message: `visible copy is ${text.length} chars on one line (max ${MAX_LINE_LENGTH}): "${text.slice(0, 40)}…"`,
      });
    }
  }
}

const HEX_COLOR = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;

function checkColorRoles(allLines: Line[], findings: Finding[]): void {
  // Colors are allowed where they get a named role: CSS custom property
  // definitions (--name: #fff). Raw hex anywhere else is a role-less color.
  for (const line of allLines) {
    if (/--[\w-]+\s*:/.test(line.text)) continue;
    for (const m of line.text.matchAll(HEX_COLOR)) {
      findings.push({
        rubricId: "colour",
        severity: "fix-this-week",
        where: `${line.file}:${line.lineNo}`,
        message: `raw color ${m[0]}; give it a named role (a CSS variable) instead`,
      });
    }
  }
}

// ---- entry point ----

export function runStaticCheck(root: string): Finding[] {
  const findings: Finding[] = [];
  const files = collectFiles(root);
  const allLines: Line[] = [];

  for (const file of files) {
    const isCss = [".css", ".scss"].includes(extname(file));
    for (const line of lines(root, file)) {
      allLines.push(line);
      checkSpacing(line, isCss, findings);
      checkTypeScale(line, isCss, findings);
      if (!isCss) {
        checkEmoji(line, findings);
        checkCopyLength(line, findings);
      }
    }
  }

  checkFontFamilies(allLines, findings);
  checkColorRoles(allLines, findings);

  return findings;
}
