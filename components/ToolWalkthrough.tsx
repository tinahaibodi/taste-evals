import Reveal from "./Reveal";

function Term({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="term">
      <div className="term-head">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">{title}</span>
      </div>
      <div className="term-body">{children}</div>
    </div>
  );
}

export default function ToolWalkthrough() {
  return (
    <section id="tool">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Handoff</p>
          <h2 className="section-title">The rubric, as a tool you keep</h2>
          <p>
            A rubric in a doc gets read once. So the handoff is the <b>Taste CLI</b> — it
            runs the checkable half of the rubric for you, and hands the judgment calls to
            the checklist. This is what a Meridian developer does before opening a PR,
            long after we&apos;re gone.
          </p>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>Step 1 · Run the static check</p>
          <p className="note">
            Deterministic lint of the CSS and JSX you touched — spacing tokens, type scale,
            font count, emoji-as-icon, copy length, color roles. No API keys, runs in CI.
          </p>
          <Term title="taste-check — static">
            <div><span className="t-cmd">$ npx taste-check static .</span></div>
            <div>&nbsp;</div>
            <div>Spacing: every padding/margin is a token value (4 / 8 / 12 / 16 / 24 / 32)</div>
            <div>  <span className="t-week">FIX-THIS-WEEK</span>  <span className="t-loc">app/globals.css:63</span>  padding: 14px is not on the spacing scale</div>
            <div>  <span className="t-week">FIX-THIS-WEEK</span>  <span className="t-loc">app/globals.css:94</span>  gap: 11px is not on the spacing scale</div>
            <div>&nbsp;</div>
            <div>Type: sizes only from the scale (12 / 14 / 17 / 24 / 32)</div>
            <div>  <span className="t-week">FIX-THIS-WEEK</span>  <span className="t-loc">app/expenses.tsx:41</span>  font size 15px is not on the type scale</div>
            <div>&nbsp;</div>
            <div>Icons: functional only — same set, same stroke weight, no emoji-as-icon</div>
            <div>  <span className="t-week">FIX-THIS-WEEK</span>  <span className="t-loc">components/Card.tsx:58</span>  emoji &quot;🚀&quot; used in the interface</div>
            <div>&nbsp;</div>
            <div><span className="t-cmd">4 findings</span> <span className="t-loc">(4 fix-this-week)</span></div>
          </Term>
          <p className="note">
            Fix the tokens, run again, it goes quiet. Blockers exit non-zero, so the merge
            physically can&apos;t happen with one open.
          </p>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>Step 2 · Run the vision check</p>
          <p className="note">
            A screenshot of the branch preview goes to a vision model, which grades the
            judgment-call lines — hierarchy, contrast, nesting, states — and reports in the
            same severities. Advisory: it comments, it doesn&apos;t block.
          </p>
          <Term title="taste-check — vision">
            <div><span className="t-cmd">$ taste-check vision http://localhost:3000/expenses</span></div>
            <div>&nbsp;</div>
            <div>Contrast: body text passes 4.5:1 against its background</div>
            <div>  <span className="t-block">BLOCKER</span>  amount column #8a8a8a on #f5f5f5 reads at 2.9:1</div>
            <div>&nbsp;</div>
            <div>States: loading, empty, and error states exist</div>
            <div>  <span className="t-block">BLOCKER</span>  empty expense table renders a blank area — no empty state</div>
            <div>&nbsp;</div>
            <div><span className="t-cmd">2 findings</span> <span className="t-loc">(2 blocker)</span></div>
          </Term>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>Step 3 · Run the human pass</p>
          <p className="note">
            What&apos;s left is taste the machines can&apos;t settle: does the hierarchy
            read right, does motion earn its place. That&apos;s the 12-point checklist in
            the QA process section — ten minutes, done by the dev who didn&apos;t write the
            code.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
