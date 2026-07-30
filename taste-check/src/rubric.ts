/**
 * The taste-evals rubric, expressed as data so both the static and vision
 * checks grade against the exact same criteria.
 */

export type Severity = "blocker" | "fix-this-week" | "polish";

export interface RubricItem {
  id: string;
  label: string;
  /** Which check can evaluate this item. */
  tier: "static" | "vision" | "both";
  defaultSeverity: Severity;
}

export const SPACING_SCALE = [0, 4, 8, 12, 16, 24, 32];
export const TYPE_SCALE = [12, 14, 17, 24, 32];
export const MAX_FONT_FAMILIES = 2;
export const MAX_LINE_LENGTH = 75;

export const RUBRIC: RubricItem[] = [
  {
    id: "type-scale",
    label: `Type: no more than ${MAX_FONT_FAMILIES} font families; sizes only from the scale (${TYPE_SCALE.join(" / ")})`,
    tier: "both",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "hierarchy",
    label: "Hierarchy: semibold = heading, medium = label, regular = body — no arbitrary bolding",
    tier: "vision",
    defaultSeverity: "blocker",
  },
  {
    id: "spacing-tokens",
    label: `Spacing: every padding/margin is a token value (${SPACING_SCALE.filter(Boolean).join(" / ")}) — nothing eyeballed`,
    tier: "static",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "color-roles",
    label: "Color: every color has a named role (primary, neutral, success, danger) — none decorative",
    tier: "both",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "nested-cards",
    label: "Containers: no card nested inside another card without a stated reason",
    tier: "vision",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "icons",
    label: "Icons: functional only — same set, same stroke weight, no emoji-as-icon",
    tier: "both",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "contrast",
    label: "Contrast: body text passes 4.5:1 against its background",
    tier: "vision",
    defaultSeverity: "blocker",
  },
  {
    id: "copy",
    label: `Copy: line length ≤ ${MAX_LINE_LENGTH} characters; labels say what the control does`,
    tier: "both",
    defaultSeverity: "polish",
  },
  {
    id: "alignment",
    label: "Alignment: everything sits on the grid — nothing floats",
    tier: "vision",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "states",
    label: "States: loading, empty, and error states exist and use the interface's voice",
    tier: "vision",
    defaultSeverity: "blocker",
  },
  {
    id: "consistency",
    label: "Consistency: the screen uses the same type, spacing and color logic as the rest of the app",
    tier: "vision",
    defaultSeverity: "fix-this-week",
  },
  {
    id: "motion",
    label: "Motion: any animation improves usability (orientation, feedback) — otherwise cut it",
    tier: "vision",
    defaultSeverity: "polish",
  },
];

export interface Finding {
  rubricId: string;
  severity: Severity;
  message: string;
  /** file:line for static findings; region description for vision findings. */
  where?: string;
}
