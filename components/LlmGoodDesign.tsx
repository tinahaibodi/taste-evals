import Reveal from "./Reveal";

export default function LlmGoodDesign() {
  return (
    <section id="part-1">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Part 1</p>
          <h2 className="section-title">What LLMs think is good design</h2>
          <p>
            Good design examples: <b>Harvey</b> and <b>Sierra</b> — a useful pair because
            they show the same new-media approach working across differing industries — and{" "}
            <b>Cognition</b>.
          </p>
          <p className="note">
            The interesting part isn&apos;t the list of names. It&apos;s that when you ask
            what makes them good, the answers converge on a small set of concrete,
            checkable properties — which is exactly what a QA rubric needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
