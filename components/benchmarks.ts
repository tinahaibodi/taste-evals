/* Same criteria as "The rubric" in Good vs. Bad, scored against Harvey.
   `method` says how the Taste CLI harness measures the criterion; see the
   harness notes under the benchmarks table. Rows are ordered by category
   (visual, functional, trust). */
export type Method = "static + vision" | "vision" | "human";

export interface ScoreDef {
  criterion: string;
  method: Method;
  /* how much the criterion counts toward the final grade, in percent (sums to 100) */
  weight: number;
  score: number;
  why: string;
}

export const SCORES: ScoreDef[] = [
  {
    criterion: "Art direction and imagery",
    weight: 10,
    method: "human",
    score: 5,
    why: "Commissioned 3D renders and abstract textures; nothing reads as stock.",
  },
  {
    criterion: "Typography",
    weight: 12,
    method: "static + vision",
    score: 5,
    why: "Clear type scale, two families, weight variation doing the work.",
  },
  {
    criterion: "Hierarchy",
    weight: 12,
    method: "vision",
    score: 5,
    why: "Semibold = heading, medium = label, regular = body; no arbitrary bolding.",
  },
  {
    criterion: "Spacing and layout",
    weight: 12,
    method: "static + vision",
    score: 4,
    why: "Token based spacing and a held grid; document heavy views run dense.",
  },
  {
    criterion: "Colour",
    weight: 8,
    method: "static + vision",
    score: 5,
    why: "Near monochrome base with one accent that always means action.",
  },
  {
    criterion: "Motion and effects",
    weight: 6,
    method: "vision",
    score: 5,
    why: "Grain and blur accentuate dark section headlines; animation reserved for the carousels with minimal performance cost.",
  },
  {
    criterion: "Copy",
    weight: 8,
    method: "static + vision",
    score: 4,
    why: "Comfortable measure and considered tracking; some marketing pages run long.",
  },
  {
    criterion: "Icons and detail",
    weight: 4,
    method: "static + vision",
    score: 5,
    why: "Limited and intentional: external link indicators and media player play buttons only.",
  },
  {
    criterion: "Interaction states",
    weight: 8,
    method: "human",
    score: 4,
    why: "Hover tint and overlay treatments are light but effective across buttons, links and inputs.",
  },
  {
    criterion: "Responsive behavior",
    weight: 8,
    method: "human",
    score: 5,
    why: "Grid, type scale and image containers hold at tablet and mobile breakpoints.",
  },
  {
    criterion: "States and feedback",
    weight: 8,
    method: "vision",
    score: 4,
    why: "Empty, loading and error states handled across demo, signup and sales booking forms.",
  },
  {
    criterion: "Marketing to product consistency",
    weight: 4,
    method: "vision",
    score: 5,
    why: "The same type, spacing and colour logic carries into cards, buttons and components in the product.",
  },
];

export const TOTAL = SCORES.reduce((sum, s) => sum + s.score, 0);
export const MAX = SCORES.length * 5;
