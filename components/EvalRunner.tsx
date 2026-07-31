"use client";

import { useEffect, useRef, useState } from "react";
import { SCORES, MAX } from "./benchmarks";

const STEP_MS = 320;

/* The second model's dummy run: same rubric, slightly different marks. */
const OPUS_DELTA: Record<string, number> = {
  Typography: -1,
  "Motion and effects": -1,
  "Interaction states": +1,
  "States and feedback": -1,
};

const MODELS = [
  { id: "gpt", label: "GPT-5.4", delta: null as Record<string, number> | null },
  { id: "opus", label: "Claude Opus 4.8", delta: OPUS_DELTA },
];

export default function EvalRunner() {
  const [model, setModel] = useState(MODELS[0]);
  const [revealed, setRevealed] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const scores = SCORES.map(({ criterion, score }) => ({
    criterion,
    score: Math.max(0, Math.min(5, score + (model.delta?.[criterion] ?? 0))),
  }));
  const total = scores.reduce((sum, s) => sum + s.score, 0);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    setRunning(false);
  };

  const pick = (m: (typeof MODELS)[number]) => {
    if (m.id === model.id) return;
    stop();
    setRevealed(0);
    setModel(m);
  };

  const run = () => {
    if (running) return;
    setRevealed(0);
    setRunning(true);
    timer.current = setInterval(() => {
      setRevealed((n) => {
        if (n + 1 >= SCORES.length) {
          if (timer.current) clearInterval(timer.current);
          setRunning(false);
        }
        return n + 1;
      });
    }, STEP_MS);
  };

  const started = running || revealed > 0;
  const done = !running && revealed >= SCORES.length;

  return (
    <div className="xp">
      <div className="xp-bar">
        <div className="xp-tabs">
          {MODELS.map((m) => (
            <button
              key={m.id}
              className={`xp-tab${m.id === model.id ? " active" : ""}`}
              onClick={() => pick(m)}
            >
              {m.label}
              <span className={`sq ${m.id}`} />
            </button>
          ))}
        </div>
        <span className="xp-stats">
          12 criteria <b>{total}/{MAX}</b>
        </span>
        <button className="xp-run" onClick={run} disabled={running}>
          {running ? "Grading…" : "▶ Run eval"}
        </button>
      </div>

      <div className="xp-grid">
        <div className="xp-col xp-desc">
          <h4>Task description</h4>
          <p>
            Grade the harvey.ai marketing site against the twelve criterion taste
            rubric. Score each criterion out of 5 and justify it with one concrete
            sentence of evidence.
          </p>
          <h4>Harness</h4>
          <p>
            The vision tier grades one 1440x900 full page screenshot, criterion by
            criterion. Criteria marked static or human carry their marks from the
            benchmarks above.
          </p>
        </div>

        <div className="xp-col">
          {started ? (
            <div className="xp-shot">
              <img src="/harvey-shot.png" alt="harvey.ai at 1440x900" />
              <p className="xp-shot-caption">harvey.ai · 1440x900</p>
            </div>
          ) : (
            <div className="xp-empty">
              Press &quot;Run eval&quot; to capture harvey.ai and grade it.
            </div>
          )}
        </div>

        <div className="xp-col">
          {revealed > 0 ? (
            <div>
              {scores.slice(0, revealed).map(({ criterion, score }) => (
                <div className="xp-row" key={criterion}>
                  <span className="xp-name">{criterion}</span>
                  <span className="xp-score">
                    {score}
                    <span className="unit">/5</span>
                  </span>
                </div>
              ))}
              {done && (
                <div className="xp-row xp-total">
                  <span className="xp-name">Total</span>
                  <span className="xp-score">
                    {total}
                    <span className="unit">/{MAX}</span>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="xp-empty">The graded rubric appears here after the run.</div>
          )}
        </div>
      </div>
    </div>
  );
}
