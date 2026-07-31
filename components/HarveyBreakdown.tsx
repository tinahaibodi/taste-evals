import Reveal from "./Reveal";

export default function HarveyBreakdown() {
  return (
    <section id="part-1-1">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Rubric · Case study</p>
          <h2 className="section-title">What makes good design? — Harvey</h2>
          <ul className="checklist">
            <li>
              <b>Good art direction and imagery</b>
              <span className="sub">
                Use of new media — commissioned 3D renders and abstract textures rather than
                stock photography; dark, editorial hero treatments that read as considered,
                not templated. Basically: edited new-media video adds an office, New York
                feel to the existing brand — it professionalizes while maintaining the brand.
              </span>
            </li>
            <li>
              <b>Good use of typography</b>
              <span className="sub">
                Clear type scale — defined sizes for display, heading, body, caption.
                Editorial serif reserved for display moments; neutral sans for headings,
                body and UI, so each size has one job. Restrained typeface count: two
                families max — weight variation does the work instead of adding fonts.
              </span>
            </li>
            <li>
              <b>Padding and whitespace used effectively</b>
              <span className="sub">
                Even, token-based spacing — denser in-product to suit document-heavy legal
                work, but consistent, so density never reads as clutter.
              </span>
            </li>
            <li>
              <b>Noise and blur to accentuate</b>
              <span className="sub">
                Subtle grain/texture on dark sections adds depth and pushes focus to the
                headline rather than competing with it.
              </span>
            </li>
            <li>
              <b>Grid use for text placement and image containers</b>
              <span className="sub">
                Columns held consistently across pages; image containers share aspect
                ratios so marketing pages and case studies align as siblings.
              </span>
            </li>
            <li>
              <b>Text hierarchy used effectively</b>
              <span className="sub">
                Font weight, styling and variation match — semibold = heading, medium =
                label, regular = body. All-caps eyebrow labels consistently mark section
                starts; no arbitrary bolding.
              </span>
            </li>
            <li>
              <b>Use of copy</b>
              <span className="sub">
                ~60–75 character measure on body; headlines never full-bleed. Tightened
                tracking at display sizes, slight positive tracking on all-caps labels.
                Copy tone matches the visual register — precise, unhyped,
                lawyer-appropriate.
              </span>
            </li>
            <li>
              <b>Limited colour with clear roles</b>
              <span className="sub">
                Primary, neutrals, semantic — near-monochrome neutral base with a single
                accent, so accent reliably means action/emphasis. Colour is never
                decorative.
              </span>
            </li>
            <li>
              <b>Consistency between marketing site and product</b>
              <span className="sub">
                The brand aesthetic is carried into the app itself — same type, spacing and
                colour logic — so the trust built pre-sale holds at first login.
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
