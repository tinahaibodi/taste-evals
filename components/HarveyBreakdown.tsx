import Reveal from "./Reveal";
import EvalRunner from "./EvalRunner";
import { SCORES, TOTAL, MAX } from "./benchmarks";

const POINTS: { id: string; title: string; caption: string; body: string }[] = [
  {
    id: "art-direction",
    title: "Good art direction and imagery",
    caption:
      "Harvey's hero treatments: commissioned 3D renders and abstract textures in a dark, editorial frame.",
    body:
      "Their use of new media and art direction. They commissioned 3D renders and abstract textures rather than stock photography that help enhance the visualization of the legal market and their customer base (legal firms and internal GCs). They use dark, editorial hero treatments that emulate the courthouse, legal documents and the restrained visual language that is present in the branding of legal firms, legal documents and court rooms.",
  },
  {
    id: "typography",
    title: "Good use of typography",
    caption:
      "The type scale in practice: display, heading, body and caption sizes, each with one job.",
    body:
      "Clear type scale with defined sizes for display, heading, body, caption. They use a sans serif that has generous line spacing and document style formatting. They restrain their typeface count and only use two families so the weight variation looks more precise.",
  },
  {
    id: "whitespace",
    title: "Padding and whitespace used effectively",
    caption: "Token based spacing holding a dense, document heavy layout together.",
    body:
      "Token based and even spacing that visualizes document heavy legal work, while also being consistent so there is no clutter.",
  },
  {
    id: "noise-blur",
    title: "Noise and blur to accentuate",
    caption: "Grain and blur on a dark section pushing focus to the headline.",
    body:
      "Subtle grain/texture and use of blur used on dark sections to help accentuate the headlines.",
  },
  {
    id: "grid",
    title: "Grid use for text placement and image containers",
    caption: "The same column grid and image aspect ratios repeating across pages.",
    body:
      "Columns held consistently across pages and image containers share aspect ratios so marketing pages and case studies align as siblings.",
  },
  {
    id: "hierarchy",
    title: "Text hierarchy used effectively",
    caption: "Weight doing the work: semibold headings, medium labels, regular body.",
    body:
      "Font weight, styling and variation all match: semibold = heading, medium = label, regular = body. All caps eyebrow labels consistently mark section starts and use of no arbitrary bolding makes the text more clean.",
  },
  {
    id: "copy",
    title: "Use of copy",
    caption: "Comfortable line lengths and headlines that never run full bleed.",
    body:
      "A 60 to 75 character measure on body and headlines that never run full bleed. Tightened tracking at display sizes, slight positive tracking on all caps labels. Copy tone fits the containers that are displayed and aren\u2019t misaligned.",
  },
  {
    id: "colour",
    title: "Limited colour with clear roles",
    caption: "A near monochrome base with one accent that always means action.",
    body:
      "Primary, neutrals, semantic: near monochrome neutral base with a single accent, so accent reliably means action/emphasis. Colour is never decorative. Alongside this, muted palettes (navy, charcoal, white, slate) with minimal decoration, with limited gradients or playful illustrations to emulate the legal industry that it\u2019s embodying.",
  },
  {
    id: "interaction",
    title: "Interaction states",
    caption: "Hover tint and overlay treatments on buttons and links.",
    body:
      "Hover, focus, active, disabled treatments on buttons, links and inputs are light but effective. They use a hover tint and overlay hover (a semi transparent layer that is applied on hover using opacity).",
  },
  {
    id: "motion",
    title: "Motion quality",
    caption: "Blur and fade accentuating the use case carousel.",
    body:
      "Animation is reserved for the use case carousel and the customer carousel, where blur and fade accentuate the full range of use cases Harvey could be applied to. New media videos autoload and autoplay with minimal performance cost.",
  },
  {
    id: "responsive",
    title: "Responsive behavior",
    caption: "The same grid and type scale holding at tablet and mobile widths.",
    body:
      "The grid, type scale, and image containers hold at tablet and mobile breakpoints, staying consistent with desktop.",
  },
  {
    id: "states",
    title: "States and feedback",
    caption: "Form states across demo requests, signup and sales booking.",
    body:
      "Empty, loading, and error states are handled across the forms for demo requests, signup, and booking a sales call for team support.",
  },
  {
    id: "consistency",
    title: "Marketing to product consistency",
    caption: "The same type, spacing and colour logic carried into the product itself.",
    body:
      "The brand\u2019s type, spacing, and colour logic carry into the visualisation of the app itself. In the screen recording, you can see the same styling treatment applied across cards, buttons, and other components.",
  },
  {
    id: "iconography",
    title: "Iconography",
    caption: "External link indicators and play buttons on the media player.",
    body:
      "Icon use is limited and intentional, restricted to external link indicators and play buttons on the media player for new media videos.",
  },
];

export default function HarveyBreakdown() {
  return (
    <section id="part-1-1">
      <div className="col prose">
        <Reveal>
          <h2 className="section-title">What Makes Great Design? Lessons from Harvey</h2>
        </Reveal>

        {POINTS.map(({ id, title, caption, body }) => (
          <Reveal key={id}>
            <div className="point">
              <h3 className="point-title">{title}</h3>
              <figure className="point-figure">
                <img
                  src={`https://picsum.photos/seed/harvey-${id}/1200/675`}
                  alt={title}
                  loading="lazy"
                />
                <figcaption className="point-caption">{caption}</figcaption>
              </figure>
              <p>{body}</p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="point">
            <h3 className="point-title">Taste Benchmarks</h3>
            <p>Every criterion above, each scored out of 5 against Harvey.</p>
            <p>The twelve criteria fall into three categories.</p>
            <p>
              <b>Visual and compositional</b> (coherence, originality, craft,
              hierarchy and restraint) covers art direction and imagery, typography,
              hierarchy, spacing and layout, colour, motion and effects, copy, and
              icons and detail.
            </p>
            <p>
              <b>Functional</b> (task completion, error recovery and accessibility)
              covers interaction states, responsive behavior, and states and feedback.
            </p>
            <p>
              <b>Trust</b> (capability communication, explainability and data/consent)
              covers marketing to product consistency. The method column says how the
              harness measures each one; the Harness section below explains the methods.
            </p>
            <div className="rubric scored">
              <div className="rubric-row head">
                <div>Criterion</div>
                <div>Method</div>
                <div>Score</div>
                <div>Why</div>
              </div>
              {SCORES.map(({ criterion, method, score, why }) => (
                <div className="rubric-row" key={criterion}>
                  <div className="rubric-name">{criterion}</div>
                  <div className="rubric-method">{method}</div>
                  <div className="rubric-score">
                    {score}
                    <span className="unit">/5</span>
                  </div>
                  <div className="rubric-test">{why}</div>
                </div>
              ))}
              <div className="rubric-row total">
                <div className="rubric-name">Total</div>
                <div className="rubric-method" />
                <div className="rubric-score">
                  {TOTAL}
                  <span className="unit">/{MAX}</span>
                </div>
                <div className="rubric-test">
                  The intention is legible throughout: every choice is traceable to the legal
                  audience and nothing feels generated. Points come off only where density,
                  page length and light touch interaction coverage leave room to tighten.
                </div>
              </div>
            </div>

            <h3 className="point-title" style={{ marginTop: 40 }}>
              Harness
            </h3>
            <p>
              <span className="def-term">Static:</span> a <b>deterministic</b> lint the
              Taste CLI runs over the codebase&apos;s CSS and JSX. It checks{" "}
              <code>spacing tokens</code>, the <code>type scale</code>, a two family
              font budget, emoji as icons, copy line length, and colors without a named
              role. It runs in CI and needs no key.
            </p>
            <p>
              <span className="def-term">Vision:</span> sends a 1440x900 full page
              screenshot to an LLM, which grades it against the same rubric and returns
              each finding as <b>blocker</b>, <b>fix this week</b>, or <b>polish</b>,
              with the evidence named.
            </p>
            <p>
              <span className="def-term">Human:</span> marks judgment the harness cannot
              automate yet: art direction intent, hover and focus states, and responsive
              behavior (the harness shoots a single fixed viewport).
            </p>
            <p>
              Motion and cross screen consistency are graded from one static screenshot,
              so <code>vision</code> results there need human confirmation.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="point">
            <h3 className="point-title">Example Results</h3>
            <p>
              What a grading run looks like end to end: the target, the screenshot the
              harness captures, and the graded rubric it returns.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="wide">
        <Reveal>
          <EvalRunner />
        </Reveal>
      </div>
    </section>
  );
}
