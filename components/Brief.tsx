import Reveal from "./Reveal";

export default function Brief() {
  return (
    <section id="brief">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Project Brief</p>
          <h2 className="section-title">What this doc covers</h2>
          <p>
            This is the Taste Labs planning doc, turned into field notes. It walks through
            what LLMs think good design is, what actually makes good design, what makes bad
            design — and then solves the QA process for{" "}
            <b>Meridian</b>, a B2B fintech startup app to track and approve company spending,
            in a way a two-developer team can actually run.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow" style={{ marginTop: 40 }}>Deliverables</p>
          <ul className="checklist">
            <li>Project Brief</li>
            <li>Good Design vs. Bad Design (for a B2B App)</li>
            <li>QA Process — realistic for a two-developer team</li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="eyebrow" style={{ marginTop: 24 }}>Nice to have</p>
          <ul className="checklist quiet">
            <li>A Dan Hollick–style web app that can display the full task <span className="hand" style={{ fontSize: 22 }}>&nbsp;← you are here</span></li>
            <li>
              Design brief for design evals for the QA process
              <span className="sub">Meridian — B2B fintech startup app to track and approve company spending</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
