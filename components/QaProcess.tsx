"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CHECK_ITEMS = [
  "Type: no more than 2 font families on screen; sizes only from the scale (12 / 14 / 17 / 24 / 32)",
  "Hierarchy: semibold = heading, medium = label, regular = body — no arbitrary bolding",
  "Spacing: every padding/margin is a token value (4 / 8 / 12 / 16 / 24 / 32) — nothing eyeballed",
  "Color: every color has a named role (primary, neutral, success, danger) — none decorative",
  "Containers: no card nested inside another card without a stated reason",
  "Icons: functional only — same set, same stroke weight, no emoji-as-icon",
  "Contrast: body text passes 4.5:1 against its background (spot-check with a picker)",
  "Copy: line length ≤ 75 characters; labels say what the control does (\u201CApprove expense\u201D, not \u201CSubmit\u201D)",
  "Alignment: everything sits on the grid — zoom to 50% and squint; nothing floats",
  "States: loading, empty, and error states exist and use the interface\u2019s voice",
  "Consistency: the screen uses the same type, spacing and color logic as the rest of Meridian",
  "Motion: any animation improves usability (orientation, feedback) — otherwise cut it",
];

function GateChecklist() {
  const [done, setDone] = useState<boolean[]>(() => CHECK_ITEMS.map(() => false));
  const count = done.filter(Boolean).length;
  const toggle = (i: number) =>
    setDone((d) => d.map((v, j) => (j === i ? !v : v)));

  return (
    <div>
      <ul className="qa-check">
        {CHECK_ITEMS.map((item, i) => (
          <li
            key={i}
            className={done[i] ? "done" : ""}
            onClick={() => toggle(i)}
            role="checkbox"
            aria-checked={done[i]}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(i);
              }
            }}
          >
            <span className="qa-box">
              {done[i] && (
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 6.5 L5 9.5 L10 2.5" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="qa-progress" aria-live="polite">
        {count === CHECK_ITEMS.length
          ? "all 12 pass — ship it \u2713"
          : `${count} / ${CHECK_ITEMS.length} checks pass${count > 0 ? " — keep going" : ""}`}
      </p>
    </div>
  );
}

export default function QaProcess() {
  return (
    <section id="qa">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Your Workflow · The Process</p>
          <h2 className="section-title">Three gates, under an hour a week</h2>
          <p>
            The constraint that matters: <b>two developers, no designer on staff.</b> So the
            process can&apos;t depend on taste — it has to turn &quot;good&quot; into checks
            a non-designer can apply, fit inside the workflow that already exists (GitHub
            PRs), and cost under an hour a week in overhead.
          </p>
        </Reveal>

        <Reveal>
          <p className="eyebrow" style={{ marginTop: 40 }}>What gets reviewed, and when</p>
        </Reveal>
      </div>

      <div className="wide">
        <Reveal>
          <div className="gates">
            <div className="gate">
              <p className="g-label">Gate A</p>
              <h3>Design-intent check</h3>
              <p className="g-when">Before build starts · 15 min · both devs</p>
              <p>
                For any new screen or component: agree on the one job of the screen, which
                existing patterns it reuses, and what (if anything) is genuinely new.
                Anything new gets sketched against the rubric before code exists — the
                cheapest place to catch weak information architecture.
              </p>
            </div>
            <div className="gate">
              <p className="g-label">Gate B</p>
              <h3>PR visual QA</h3>
              <p className="g-when">At pull-request time · 10 min · the dev who didn&apos;t write it</p>
              <p>
                CI has already run <b>taste-check static</b>; the vision check has
                commented on the preview. The reviewer opens the branch preview and runs
                the 12-point checklist below against the changed screens. A screenshot
                goes in the PR. Fails are filed with a severity label; blockers stop the
                merge.
              </p>
            </div>
            <div className="gate">
              <p className="g-label">Gate C</p>
              <h3>Weekly squint sweep</h3>
              <p className="g-when">Every Friday · 30 min · together</p>
              <p>
                Walk the three primary flows in production (submit expense → approve →
                report). Zoom out, squint, and note anything that feels &quot;off.&quot;
                Batch the polish items; promote anything on a primary flow that hurts
                clarity.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="col prose">
        <Reveal>
          <p className="eyebrow" style={{ marginTop: 32 }}>
            What &quot;good&quot; means — concretely enough that a non-designer can apply it
          </p>
          <p className="note">
            Each check is derived directly from the good/bad lists above. Try it — click to
            run the checklist:
          </p>
          <GateChecklist />
        </Reveal>

        <Reveal>
          <p className="eyebrow" style={{ marginTop: 56 }}>How issues get logged and prioritized</p>
          <p>
            No new tooling. A fail becomes a normal GitHub issue with the label{" "}
            <b>design-qa</b>, a screenshot, the rubric line it fails, and one of three
            severities:
          </p>
        </Reveal>

        <Reveal>
          <div className="rubric">
            <div className="rubric-row">
              <div className="rubric-name">
                <span className="sev blocker">BLOCKER</span>
                <span className="tag">stops the merge / ship</span>
              </div>
              <div className="rubric-test">
                Readability or contrast failures, broken hierarchy, inconsistent spacing on
                a <b>primary flow</b> (submit → approve → report), missing error/empty
                states, or anything that makes a spending amount ambiguous. Fixed before
                merge — in a fintech approval tool, clarity is the product.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">
                <span className="sev week">FIX-THIS-WEEK</span>
                <span className="tag">merges, scheduled</span>
              </div>
              <div className="rubric-test">
                Rubric fails on secondary screens, off-token spacing, icon inconsistencies,
                copy that describes the system instead of the action. Goes into the current
                week&apos;s batch; reviewed at the Friday sweep.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">
                <span className="sev polish">POLISH</span>
                <span className="tag">batched monthly</span>
              </div>
              <div className="rubric-test">
                Nice-to-haves: micro-interaction tuning, illustration consistency,
                empty-state charm. Collected and shipped as a monthly polish PR so they
                never crowd out feature work — and never silently accumulate.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow" style={{ marginTop: 24 }}>The issue template</p>
          <div className="codeblock">
{`## Design QA — [screen name]
`}<span className="k">{`Rubric line failed:`}</span>{` e.g. "Spacing: token values only"
`}<span className="k">{`Severity:`}</span>{` blocker | fix-this-week | polish
`}<span className="k">{`Screenshot:`}</span>{` (drag in)
`}<span className="k">{`Where:`}</span>{` route + component
`}<span className="k">{`Suggested fix:`}</span>{` one sentence, optional`}
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow" style={{ marginTop: 24 }}>What stops shipping vs. what doesn&apos;t</p>
          <p>
            The line is drawn by <b>flow, not aesthetics</b>: if a check fails on the money
            path — submitting, approving, or reporting spend — it&apos;s a blocker, because
            that&apos;s where trust lives. Everywhere else, design debt is allowed to exist
            for exactly one labelled week (or one polish cycle) before it&apos;s paid down.
            The process ships imperfect screens on purpose; it never ships unclear ones.
          </p>
          <p className="note">
            Why this is realistic for two developers: every gate reuses a ritual they
            already have (planning, PR review, Friday wrap-up), the rubric requires zero
            design vocabulary, and total overhead is roughly 55 minutes per week plus 10
            minutes per PR.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
