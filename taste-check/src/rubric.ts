/**
 * The Taste Check design rubric, matching the twelve Design Evals criteria
 * on the site. Static and vision checks grade against the same ids; human
 * criteria are listed for documentation and the checklist, not automated.
 */

export type Severity = "blocker" | "fix-this-week" | "polish";

export type Method = "static" | "vision" | "both" | "human";

export interface RubricItem {
  id: string;
  label: string;
  /** How the Taste CLI harness measures this item. */
  method: Method;
  defaultSeverity: Severity;
  /** Weight toward the final grade, in percent. Sums to 100. */
  weight: number;
}

export const SPACING_SCALE = [0, 4, 8, 12, 16, 24, 32];
export const TYPE_SCALE = [12, 14, 17, 24, 32];
export const MAX_FONT_FAMILIES = 2;
export const MAX_LINE_LENGTH = 75;

export const RUBRIC: RubricItem[] = [
  {
    id: "art-direction",
    label:
      "Art direction and imagery: commissioned or curated imagery; photos and illustrations share one cohesive style and color grading",
    method: "human",
    defaultSeverity: "fix-this-week",
    weight: 10,
  },
  {
    id: "typography",
    label: `Typography: clear type scale (display, heading, body, caption); at most ${MAX_FONT_FAMILIES} font families; sizes only from (${TYPE_SCALE.join(" / ")})`,
    method: "both",
    defaultSeverity: "fix-this-week",
    weight: 12,
  },
  {
    id: "hierarchy",
    label:
      "Hierarchy: weight, styling and variation match their role; semibold = heading, medium = label, regular = body",
    method: "vision",
    defaultSeverity: "blocker",
    weight: 12,
  },
  {
    id: "spacing-layout",
    label: `Spacing and layout: every padding/margin/gap is a token value (${SPACING_SCALE.filter(Boolean).join(" / ")}); a grid governs text, images and sections`,
    method: "both",
    defaultSeverity: "fix-this-week",
    weight: 12,
  },
  {
    id: "colour",
    label:
      "Colour: clear palette with clear roles (primary, neutrals, semantic); no decorative raw hex",
    method: "both",
    defaultSeverity: "fix-this-week",
    weight: 8,
  },
  {
    id: "motion-effects",
    label:
      "Motion and effects: noise and blur accentuate; animation is reserved for select intentional moments that improve usability",
    method: "vision",
    defaultSeverity: "polish",
    weight: 6,
  },
  {
    id: "copy",
    label: `Copy: good line length (≤ ${MAX_LINE_LENGTH} chars) and letter spacing; text properly aligned and centered`,
    method: "both",
    defaultSeverity: "polish",
    weight: 8,
  },
  {
    id: "icons-detail",
    label:
      "Icons and detail: one icon style with deliberate borders, dividers and strokes; no emoji as icons",
    method: "both",
    defaultSeverity: "fix-this-week",
    weight: 4,
  },
  {
    id: "interaction-states",
    label:
      "Interaction states: hover, focus, active and disabled treatments exist and stay consistent",
    method: "human",
    defaultSeverity: "fix-this-week",
    weight: 8,
  },
  {
    id: "responsive",
    label:
      "Responsive behavior: grid, type scale and containers hold at tablet and mobile breakpoints",
    method: "human",
    defaultSeverity: "blocker",
    weight: 8,
  },
  {
    id: "states-feedback",
    label:
      "States and feedback: empty, loading and error states designed for every required form and flow",
    method: "vision",
    defaultSeverity: "blocker",
    weight: 8,
  },
  {
    id: "consistency",
    label:
      "Marketing to product consistency: type, spacing and colour logic carry from the site into the product design",
    method: "vision",
    defaultSeverity: "fix-this-week",
    weight: 4,
  },
];

export interface Finding {
  rubricId: string;
  severity: Severity;
  message: string;
  /** file:line for static findings; region description for vision findings. */
  where?: string;
}
