import Reveal from "./Reveal";

const POINTS: { id: string; title: string; caption: string; body: string }[] = [
  {
    id: "art-direction",
    title: "Good art direction and imagery",
    caption:
      "Harvey's hero treatments: commissioned 3D renders and abstract textures in a dark, editorial frame.",
    body:
      "Their use of new media and art direction. They commissioned 3D renders and abstract textures rather than stock photography that help enhance the visualization of the legal market and their customer base (legal firms and internal in-house GCs). They use dark, editorial hero treatments that emulate the courthouse, legal documents and the restrained visual language that is present in the branding of legal firms, legal documents and court rooms.",
  },
  {
    id: "typography",
    title: "Good use of typography",
    caption:
      "The type scale in practice: display, heading, body and caption sizes, each with one job.",
    body:
      "Clear type scale with defined sizes for display, heading, body, caption. They use a sans serif that has generous line spacing and document-like formatting. They restrain their typeface count and only use two families so the weight variation looks more precise.",
  },
  {
    id: "whitespace",
    title: "Padding and whitespace used effectively",
    caption: "Token-based spacing holding a dense, document-heavy layout together.",
    body:
      "Token-based and even spacing that visualizes document heavy legal work, while also being consistent so there is no clutter.",
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
      "Font weight, styling and variation all match: semibold = heading, medium = label, regular = body. All-caps eyebrow labels consistently mark section starts and use of no arbitrary bolding makes the text more clean.",
  },
  {
    id: "copy",
    title: "Use of copy",
    caption: "Comfortable line lengths and headlines that never run full-bleed.",
    body:
      "~60\u201375 character measure on body and headlines never full-bleed. Tightened tracking at display sizes, slight positive tracking on all-caps labels. Copy tone fits the containers that are displayed and aren\u2019t misaligned.",
  },
  {
    id: "colour",
    title: "Limited colour with clear roles",
    caption: "A near-monochrome base with one accent that always means action.",
    body:
      "Primary, neutrals, semantic: near-monochrome neutral base with a single accent, so accent reliably means action/emphasis. Colour is never decorative. Alongside this, muted palettes (navy, charcoal, white, slate) with minimal decoration, with limited gradients or playful illustrations to emulate the legal industry that it\u2019s embodying.",
  },
  {
    id: "interaction",
    title: "Interaction states",
    caption: "Hover tint and overlay treatments on buttons and links.",
    body:
      "Hover, focus, active, disabled treatments on buttons, links and inputs are light but effective. They use a hover tint and overlay hover (a semi-transparent layer that is applied on hover using opacity).",
  },
  {
    id: "motion",
    title: "Motion quality",
    caption: "Blur and fade accentuating the use-case carousel.",
    body:
      "Animation is reserved for the use-case carousel and the customer carousel, where blur and fade accentuate the full range of use cases Harvey could be applied to. New media videos autoload and autoplay with minimal performance cost.",
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
    title: "Marketing-to-product consistency",
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

/* Same nine criteria as "The rubric" in Good vs. bad, scored against Harvey. */
const SCORES: { criterion: string; score: number; why: string }[] = [
  {
    criterion: "Art direction & imagery",
    score: 5,
    why: "Commissioned 3D renders and abstract textures; nothing reads as stock.",
  },
  {
    criterion: "Typography",
    score: 5,
    why: "Clear type scale, two families, weight variation doing the work.",
  },
  {
    criterion: "Hierarchy",
    score: 5,
    why: "Semibold = heading, medium = label, regular = body; no arbitrary bolding.",
  },
  {
    criterion: "Spacing & layout",
    score: 4,
    why: "Token-based spacing and a held grid; document-heavy views run dense.",
  },
  {
    criterion: "Colour",
    score: 5,
    why: "Near-monochrome base with one accent that always means action.",
  },
  {
    criterion: "Effects & motion",
    score: 4,
    why: "Grain and blur accentuate dark-section headlines; motion stays restrained.",
  },
  {
    criterion: "Copy",
    score: 4,
    why: "Comfortable measure and considered tracking; some marketing pages run long.",
  },
  {
    criterion: "Icons & detail",
    score: 5,
    why: "Limited and intentional: external link indicators and media player play buttons only.",
  },
  {
    criterion: "Intention",
    score: 5,
    why: "Every choice is traceable to the legal audience; nothing feels generated.",
  },
  {
    criterion: "Interaction states",
    score: 4,
    why: "Hover tint and overlay treatments are light but effective across buttons, links and inputs.",
  },
  {
    criterion: "Motion quality",
    score: 5,
    why: "Animation reserved for the carousels; autoplaying media carries minimal performance cost.",
  },
  {
    criterion: "Responsive behavior",
    score: 5,
    why: "Grid, type scale and image containers hold at tablet and mobile breakpoints.",
  },
  {
    criterion: "States & feedback",
    score: 4,
    why: "Empty, loading and error states handled across demo, signup and sales-booking forms.",
  },
  {
    criterion: "Marketing-to-product consistency",
    score: 5,
    why: "The same type, spacing and colour logic carries into cards, buttons and components in-product.",
  },
];

const TOTAL = SCORES.reduce((sum, s) => sum + s.score, 0);
const MAX = SCORES.length * 5;

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
            <h3 className="point-title">The rubric, scored</h3>
            <p>
              Every criterion above, each scored out of 5 against Harvey.
            </p>
            <div className="rubric scored">
              <div className="rubric-row head">
                <div>Criterion</div>
                <div>Score</div>
                <div>Why</div>
              </div>
              {SCORES.map(({ criterion, score, why }) => (
                <div className="rubric-row" key={criterion}>
                  <div className="rubric-name">{criterion}</div>
                  <div className="rubric-score">{score}/5</div>
                  <div className="rubric-test">{why}</div>
                </div>
              ))}
              <div className="rubric-row total">
                <div className="rubric-name">Total</div>
                <div className="rubric-score">
                  {TOTAL}/{MAX}
                </div>
                <div className="rubric-test">
                  Strong across the board; loses points only where density, page length and
                  light-touch interaction and form coverage leave room to tighten.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
