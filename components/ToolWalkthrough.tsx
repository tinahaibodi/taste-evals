import Reveal from "./Reveal";

function Code({ children }: { children: React.ReactNode }) {
  return <div className="codeblock">{children}</div>;
}

export default function ToolWalkthrough() {
  return (
    <section id="tool">
      <div className="col prose">
        <Reveal>
          <h2 className="section-title">Taste CLI</h2>
          <p>
            The rubric ships as a CLI so it keeps running after this audit. It has two
            commands: <code>static</code>, a deterministic lint that runs anywhere, and{" "}
            <code>vision</code>, a model graded review of a rendered screen. Below is how
            to wire both into an existing app.
          </p>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>1. Install</p>
          <p className="note">
            The tool lives in the <code>taste-check</code> folder of this repo. Clone it,
            build it once, and link the binary so <code>taste-check</code> is available in
            any project on your machine.
          </p>
          <Code>
{`git clone https://github.com/tinahaibodi/taste-evals
cd taste-evals/taste-check
npm install
`}<span className="k">npm run build && npm link</span>
          </Code>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>2. Run the static check on your code</p>
          <p className="note">
            Point it at the directory you touched. It lints CSS and JSX for the
            mechanically checkable half of the rubric: spacing tokens, type scale, font
            family count, emoji used as icons, copy length, and raw hex colors outside
            named variables.
          </p>
          <Code>
<span className="k">taste-check static src/</span>{`

Spacing tokens      2 findings   FIX THIS WEEK
Type scale          1 finding    FIX THIS WEEK
Emoji as icons      1 finding    FIX THIS WEEK

4 findings (0 blockers), exit 0`}
          </Code>
          <p className="note">
            Blockers exit nonzero, so a merge physically cannot happen with one open. Add{" "}
            <code>--strict</code> to fail the run on any finding, not just blockers.
          </p>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>3. Match it to your token scales</p>
          <p>
            The static check grades against the Meridian scales: spacing on{" "}
            <code>4 / 8 / 12 / 16 / 24 / 32</code>, type sizes on{" "}
            <code>12 / 14 / 17 / 24 / 32</code>, and at most two font families. If your
            app uses different tokens, change the scale constants in{" "}
            <code>src/static-check.ts</code> and rebuild; every rule reads from those two
            arrays.
          </p>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>4. Run the vision check on a screen</p>
          <p className="note">
            The vision command screenshots a URL, or takes an image you already have, and
            grades the judgment call lines: hierarchy, contrast, nested containers,
            alignment, states, and motion. It needs a key for the Vercel AI Gateway, and
            Playwright if you want it to capture live URLs itself.
          </p>
          <Code>
{`export AI_GATEWAY_API_KEY=...
npm install playwright && npx playwright install chromium

`}<span className="k">taste-check vision http://localhost:3000/expenses</span>{`
taste-check vision ./screenshot.png --model anthropic/claude-sonnet-4.5`}
          </Code>
          <p className="note">
            Treat its findings as reviewer comments, not merge gates: it reports in the
            same severities but does not block by default.
          </p>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>5. Gate your pull requests</p>
          <p className="note">
            Run the static check in CI on every pull request. Because blockers exit
            nonzero, this is the whole gate; there is nothing else to configure.
          </p>
          <Code>
{`# .github/workflows/taste.yml
name: taste check
on: pull_request
jobs:
  static:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      `}<span className="k">- run: taste-check static src/</span>
          </Code>
        </Reveal>

        <Reveal>
          <p className="subhead" style={{ marginTop: 40 }}>6. Finish with the human pass</p>
          <p>
            Do a final check of the hierarchy and motion interactions before merging the
            PR with the changes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
