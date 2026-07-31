import Reveal from "./Reveal";

export default function GoodDesignChecklist() {
  return (
    <section id="part-1-2">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Rubric · The checklist</p>
          <h2 className="section-title">What makes good design? The general checklist</h2>
          <ul className="checklist">
            <li>
              <b>Good art direction and imagery</b>
              <span className="sub">
                i.e. use of new media for Harvey + Sierra, use of print-shop imagery for Kimi
              </span>
            </li>
            <li>
              <b>Good use of typography</b>
              <span className="sub">Clear type scale: defined sizes for display, heading, body, caption, etc.</span>
            </li>
            <li><b>Padding and whitespace used effectively</b></li>
            <li><b>Noise and blur</b> to accentuate or bring attention to text and/or graphic elements</li>
            <li><b>Grid use</b> of text placement and image containers</li>
            <li>
              <b>Text hierarchy used effectively</b>
              <span className="sub">Font weight, styling and variation match</span>
            </li>
            <li>
              <b>Use of copy</b>
              <span className="sub">Good line length (characters and placement of text) and letter spacing</span>
            </li>
            <li>
              <b>Limited colour, defined palette with clear roles</b>
              <span className="sub">Primary, neutrals, semantic, etc.</span>
            </li>
            <li><b>Icon style and consistency</b></li>
            <li><b>Borders, dividers and strokes</b></li>
            <li><b>Text properly aligned and centered</b></li>
            <li><b>Photos and illustrations</b> sharing a consistent, cohesive style and art direction</li>
            <li>
              <b>Grid use of text, image containers and section layout</b>
              <span className="sub">Basically knowing how to spread out the content well before the page</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
