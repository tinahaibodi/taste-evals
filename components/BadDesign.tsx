import Reveal from "./Reveal";
import { SCORES } from "./benchmarks";

/* "Passes when" text per criterion; scores come from the benchmarks so the
   good chart reads as the reference implementation (Harvey). */
const GOOD_PASSES: Record<string, string> = {
  "Art direction and imagery":
    "Commissioned or curated imagery; photos and illustrations share one cohesive style and color grading.",
  Typography: "Clear type scale (display, heading, body, caption).",
  Hierarchy: "Weight, styling and variation match their role.",
  "Spacing and layout":
    "Effective padding and whitespace; a grid that governs text, images and sections.",
  Colour: "Clear color palette with clear roles: primary, neutrals, semantic.",
  "Motion and effects":
    "Noise, blur accentuate and animation is reserved for select intentional moments.",
  Copy: "Good line length and letter spacing, text properly aligned and centered.",
  "Icons and detail": "One icon style with deliberate borders, dividers and strokes.",
  "Interaction states":
    "Hover, focus, active and disabled treatments exist and stay consistent.",
  "Responsive behavior":
    "Grid, type scale and containers hold at tablet and mobile breakpoints.",
  "States and feedback":
    "Empty, loading and error states designed for every required form and flow.",
  "Marketing to product consistency":
    "Type, spacing and colour logic carry from the site into the product design.",
};

/* The failure signature per criterion; the weight it costs comes from the
   shared benchmarks data. */
const ANTI_FIRES: Record<string, string> = {
  "Art direction and imagery":
    "Template driven aesthetics; generic patterns with no product identity.",
  Typography: "Fonts chosen because they're fashionable, not appropriate.",
  Hierarchy: "No visual hierarchy; everything competes for attention.",
  "Spacing and layout":
    "Nested containers without purpose; proportions feel subtly off.",
  Colour: "Gradients, accents and hues everywhere; colour as decoration.",
  "Motion and effects":
    "Glassmorphism, shadows and blur without intent; motion that doesn't improve usability.",
  Copy: "Styling over communication; flair instead of clarity.",
  "Icons and detail":
    "Decorative emoji and icon boxes that add no meaning; redundant visual detail.",
  "Interaction states":
    "Buttons and links give no feedback; states missing or improvised per component.",
  "Responsive behavior":
    "Layouts collapse arbitrarily; desktop is the only considered width.",
  "States and feedback": "Blank screens, spinners without context, errors that dead end.",
  "Marketing to product consistency":
    "The app feels like a different company than its marketing site.",
};

const WEIGHT_TOTAL = SCORES.reduce((sum, s) => sum + s.weight, 0);

const METHODS: { category: string; method: string; how: string; passes: string }[] = [
  {
    category: "Deterministic craft",
    method: "static",
    how: "Lints the CSS and JSX: spacing off the token scale, type sizes off the scale, more than two font families, emoji as icons, overlong lines, colors without a named role.",
    passes: "No blocker findings",
  },
  {
    category: "Visual and compositional",
    method: "vision",
    how: "A 1440x900 full page screenshot is graded by an LLM against the rubric, one criterion at a time, with the evidence named.",
    passes: "No blocker findings; score meets threshold",
  },
  {
    category: "Functional",
    method: "vision + human",
    how: "Vision flags missing empty, loading and error states; hover, focus and breakpoint behavior is confirmed by hand in review.",
    passes: "Every state present and consistent",
  },
  {
    category: "Trust",
    method: "human",
    how: "Marketing and product surfaces are compared side by side for the same type, spacing and colour logic.",
    passes: "One system on both sides",
  },
];

export default function BadDesign() {
  return (
    <section id="part-2">
      <div className="col prose">
        <Reveal>
          <h2 className="section-title">Good Design Benchmarks</h2>

          <h3 className="point-title">Good Design</h3>
          <div className="rubric scored simple">
            <div className="rubric-row head">
              <div>Eval</div>
              <div>Weight</div>
              <div>Passes when</div>
            </div>
            {SCORES.map(({ criterion, weight }) => (
              <div className="rubric-row" key={criterion}>
                <div className="rubric-name">{criterion}</div>
                <div className="rubric-score">
                  {weight}
                  <span className="unit">%</span>
                </div>
                <div className="rubric-test">{GOOD_PASSES[criterion]}</div>
              </div>
            ))}
            <div className="rubric-row total">
              <div className="rubric-name">Total</div>
              <div className="rubric-score">
                {WEIGHT_TOTAL}
                <span className="unit">%</span>
              </div>
              <div className="rubric-test" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="col prose" style={{ marginTop: 24 }}>
        <Reveal>
          <h3 className="point-title">Bad Design</h3>
          <div className="rubric scored simple">
            <div className="rubric-row head">
              <div>Eval</div>
              <div>Weight</div>
              <div>Fires when</div>
            </div>
            {SCORES.map(({ criterion, weight }) => (
              <div className="rubric-row" key={criterion}>
                <div className="rubric-name">{criterion}</div>
                <div className="rubric-score">
                  {weight}
                  <span className="unit">%</span>
                </div>
                <div className="rubric-test">{ANTI_FIRES[criterion]}</div>
              </div>
            ))}
            <div className="rubric-row total">
              <div className="rubric-name">Total</div>
              <div className="rubric-score">
                {WEIGHT_TOTAL}
                <span className="unit">%</span>
              </div>
              <div className="rubric-test">
                The same weights, applied to the failure signatures. A screen loses a
                row&apos;s weight when that row fires.
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="col prose" style={{ marginTop: 24 }}>
        <Reveal>
          <h2 className="section-title">Grading Methodology</h2>
          <div className="rubric compare methods">
            <div className="rubric-row head">
              <div>Category</div>
              <div>Method</div>
              <div>How it works</div>
              <div>Passes when</div>
            </div>
            {METHODS.map(({ category, method, how, passes }) => (
              <div className="rubric-row" key={category}>
                <div className="rubric-name">{category}</div>
                <div className="rubric-method">{method}</div>
                <div className="rubric-test">{how}</div>
                <div className="rubric-test">{passes}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 22 }}>
            Each finding is a <b>blocker</b> or a <b>non blocker</b>.
          </p>
          <p>
            Blockers are hard stops a reviewer would refuse to ship: illegible contrast,
            a dead end error state, a layout that breaks at tablet width.
          </p>
          <p>
            Non blockers are quality signals: a margin off the token scale, a slightly
            long line.
          </p>
          <p>
            A screen <b>passes</b> when it clears every blocker; its <b>score</b> is
            the weighted aggregate of the twelve criteria, using the weights above. A
            screen that fails a blocker scores zero, no matter how pretty it is.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
