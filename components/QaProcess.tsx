"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/* The twelve Design Evals criteria as checks, grouped by benchmark category. */
const CHECK_GROUPS: { title: string; items: { name: string; check: string }[] }[] = [
  {
    title: "Visual and compositional",
    items: [
      {
        name: "Art direction and imagery",
        check:
          "Photos and illustrations are commissioned or curated and share one cohesive style.",
      },
      {
        name: "Typography",
        check: "Type sizes come from a clear scale for display, heading, body and caption.",
      },
      { name: "Hierarchy", check: "Weight, styling and variation match their role." },
      {
        name: "Spacing and layout",
        check:
          "Padding and whitespace are effective and a grid governs text, images and sections.",
      },
      {
        name: "Colour",
        check: "A clear palette with clear roles: primary, neutrals, semantic.",
      },
      {
        name: "Motion and effects",
        check:
          "Noise and blur accentuate and animation is reserved for select intentional moments.",
      },
      {
        name: "Copy",
        check: "Good line length and letter spacing, text properly aligned and centered.",
      },
      {
        name: "Icons and detail",
        check: "One icon style with deliberate borders, dividers and strokes.",
      },
    ],
  },
  {
    title: "Functional",
    items: [
      {
        name: "Interaction states",
        check: "Hover, focus, active and disabled treatments exist and stay consistent.",
      },
      {
        name: "Responsive behavior",
        check: "Grid, type scale and containers hold at tablet and mobile breakpoints.",
      },
      {
        name: "States and feedback",
        check: "Empty, loading and error states designed for every required form and flow.",
      },
    ],
  },
  {
    title: "Trust",
    items: [
      {
        name: "Marketing to product consistency",
        check: "Type, spacing and colour logic carry from the site into the product design.",
      },
    ],
  },
];

const TOTAL_CHECKS = CHECK_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

const SEVERITIES: { label: string; cls: string; covers: string; handling: string }[] = [
  {
    label: "BLOCKER",
    cls: "blocker",
    covers:
      "Readability or contrast failures, broken hierarchy, missing empty or error states, anything that makes a spending amount ambiguous on the money path.",
    handling: "Stops the merge. Fixed before anything ships.",
  },
  {
    label: "FIX THIS WEEK",
    cls: "week",
    covers:
      "Rubric fails on secondary screens, off token spacing, icon inconsistencies, copy that describes the system instead of the action.",
    handling: "Merges, then goes into the current week's batch.",
  },
  {
    label: "POLISH",
    cls: "polish",
    covers:
      "Micro interaction tuning, illustration consistency, empty state charm.",
    handling: "Collected and shipped as a monthly polish PR.",
  },
];

function Checklist() {
  const [done, setDone] = useState<boolean[]>(() =>
    Array.from({ length: TOTAL_CHECKS }, () => false)
  );
  const count = done.filter(Boolean).length;
  const toggle = (i: number) =>
    setDone((d) => d.map((v, j) => (j === i ? !v : v)));

  let index = 0;
  return (
    <div>
      {CHECK_GROUPS.map(({ title, items }) => (
        <div key={title}>
          <h3 className="point-title" style={{ marginTop: 34 }}>
            {title}
          </h3>
          <ul className="qa-check">
            {items.map(({ name, check }) => {
              const i = index++;
              return (
                <li
                  key={name}
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
                  <span>
                    <b>{name}</b>
                    <span className="sub">{check}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <p className="qa-progress" aria-live="polite">
        {count === TOTAL_CHECKS
          ? "all 12 pass, ship it \u2713"
          : `${count} / ${TOTAL_CHECKS} checks pass${count > 0 ? ", keep going" : ""}`}
      </p>
    </div>
  );
}

export default function QaProcess() {
  return (
    <section id="qa">
      <div className="col prose">
        <Reveal>
          <h2 className="section-title">Taste Checklist</h2>
          <Checklist />
        </Reveal>
      </div>

      <div className="col prose" style={{ marginTop: 24 }}>
        <Reveal>
          <h2 className="section-title">Severities</h2>
          <div className="rubric compare">
            <div className="rubric-row head">
              <div>Severity</div>
              <div>Covers</div>
              <div>Handling</div>
            </div>
            {SEVERITIES.map(({ label, cls, covers, handling }) => (
              <div className="rubric-row" key={label}>
                <div className="rubric-name">
                  <span className={`sev ${cls}`}>{label}</span>
                </div>
                <div className="rubric-test">{covers}</div>
                <div className="rubric-test">{handling}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
