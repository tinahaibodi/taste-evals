import Reveal from "./Reveal";

export default function Brief() {
  return (
    <section id="brief">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Brief</p>
          <h2 className="section-title">What this is, and how to use it</h2>
          <p>
            This is the Taste Check for <b>Meridian</b>, a B2B fintech app for tracking
            and approving company spending, built by two developers with no designer on
            staff. It assumes zero design vocabulary: every rule is a check you can run or
            a question you can answer.
          </p>
          <p className="note">
            Four parts: this brief, the design rubric the rules come from, the QA process
            you run week to week, and the handoff: the Taste CLI that keeps running the
            rubric after we leave.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
