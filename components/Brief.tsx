import Reveal from "./Reveal";

export default function Brief() {
  return (
    <section id="brief">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Start Here · Project Brief</p>
          <h2 className="section-title">What this is, and how to use it</h2>
          <p>
            This is the design QA kit for <b>Meridian</b> — a B2B fintech app for tracking
            and approving company spending, built by two developers with no designer on
            staff. It assumes zero design vocabulary: every rule is a check you can run or
            a question you can answer.
          </p>
          <p className="note">
            If you&apos;re one of the two devs: the workflow sections next are the part you
            use day to day. The reference sections at the end explain why the rules are
            what they are — read once, then forget about them.
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
