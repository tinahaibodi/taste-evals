import Reveal from "./Reveal";
import { Annot, Arrow } from "./Annot";

function CardBefore() {
  return (
    <div className="vcard">
      <div className="row">
        <span className="avatar" />
        <span>
          <span className="vname">rauno</span>
          <br />
          <span className="vurl">rauno.me</span>
        </span>
        <span className="score">90</span>
        <span className="dots">···</span>
      </div>
      <div className="pill">
        <span className="ghicon" />
        raunofreiberg/rauno
      </div>
      <div className="commitline">Track error events to Web Analytics</div>
      <div className="meta">
        2d ago on <span className="branch">⎇ main</span>
      </div>
    </div>
  );
}

function CardAfter() {
  return (
    <div className="vcard tight">
      <div className="row">
        <span className="avatar" />
        <span>
          <span className="vname">rauno</span>
          <br />
          <span className="vurl">rauno.me</span>
        </span>
        <span className="score">90</span>
      </div>
      <div className="commitline">
        <span style={{ color: "var(--muted)" }}>⧉</span> Track error events to Web Analytics
      </div>
      <div className="meta">
        <span className="ghicon" /> raunofreiberg/rauno · 2d ago
      </div>
    </div>
  );
}

function CardBad() {
  return (
    <div className="badcard">
      <div className="badcard-inner">
        <div className="badcard-nest">
          <div className="badcard-nest2">
            <h4>
              <span className="emoji-box">🚀</span>✨ rauno.me ✨
            </h4>
            <p>
              TRACK ERROR EVENTS TO WEB ANALYTICS · MAIN BRANCH · DEPLOYED 2D AGO ·
              STATUS: AMAZING
            </p>
            <span className="shiny">🔥 View Deployment 🔥</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BadDesign() {
  return (
    <section id="part-2">
      <div className="col prose">
        <Reveal>
          <p className="eyebrow">Rubric · Anti-patterns</p>
          <h2 className="section-title">Good vs. bad — the same card, three ways</h2>
          <p>
            The clearest way to see the difference is one component under critique. Below:
            the original Vercel project card, the tightened redesign, and what happens when
            every bad-design habit lands on the same card at once.
          </p>
        </Reveal>
      </div>

      <div className="wide">
        <Reveal>
          <div className="panel">
            <div className="cardgrid" style={{ paddingTop: 90, paddingBottom: 110 }}>
              <div style={{ position: "relative" }}>
                <Annot style={{ top: -66, left: -8 }}>inconsistent padding</Annot>
                <Arrow w={60} h={60} d="M22,6 C14,26 16,38 24,52" style={{ top: -56, left: 0 }} />
                <Annot style={{ bottom: -78, left: 40 }}>{"the branch is always \u201Cmain\u201D"}</Annot>
                <Arrow
                  w={120}
                  h={90}
                  d="M96,84 C70,64 40,50 30,28"
                  circle={{ cx: 26, cy: 16, rx: 44, ry: 15 }}
                  style={{ bottom: -84, left: 30 }}
                />
                <CardBefore />
              </div>
              <div style={{ position: "relative" }}>
                <Annot style={{ top: -88, left: 10 }}>{"icons create a key line +\nwork as visual anchors"}</Annot>
                <Arrow w={40} h={70} d="M20,4 C14,26 16,44 22,62" style={{ top: -34, left: 20 }} />
                <Annot style={{ bottom: -66, right: -6 }}>information is tight and terse</Annot>
                <CardAfter />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="panel">
            <div className="cardgrid" style={{ paddingTop: 100, paddingBottom: 90 }}>
              <div style={{ position: "relative" }}>
                <Annot style={{ top: -76, left: -30 }}>{"cards within cards\nwithout purpose"}</Annot>
                <Arrow w={70} h={60} d="M30,6 C40,24 44,36 40,52" style={{ top: -50, left: 10 }} />
                <Annot style={{ top: -64, right: -40 }}>{"gradients, accents,\nhues everywhere"}</Annot>
                <Arrow w={60} h={60} d="M40,8 C28,26 24,38 28,52" style={{ top: -36, right: 20 }} />
                <Annot style={{ bottom: -78, left: -20 }}>{"serif because it\u2019s fashionable,\nnot appropriate"}</Annot>
                <Arrow w={70} h={70} d="M40,62 C48,42 46,28 38,12" style={{ bottom: -58, left: 40 }} />
                <Annot style={{ bottom: -70, right: -30 }}>{"motion without\nimproving usability"}</Annot>
                <Arrow w={60} h={70} d="M24,64 C16,44 18,28 26,10" style={{ bottom: -50, right: 40 }} />
                <CardBad />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="col prose" style={{ marginTop: 24 }}>
        <Reveal>
          <h2 className="section-title">What makes bad design?</h2>
          <ul className="checklist">
            <li><b>No visual hierarchy</b> — everything competes for attention.</li>
            <li><b>Too many nested containers</b> — cards within cards without purpose.</li>
            <li><b>Overuse of color</b> — gradients, accents, and hues everywhere.</li>
            <li><b>Overuse of visual effects</b> — glassmorphism, shadows, borders, and blur without intent.</li>
            <li><b>Decorative instead of functional icons</b> — emoji and colored icon boxes that add no meaning.</li>
            <li><b>Poor use of typography</b> — serif fonts used because they&apos;re fashionable, not appropriate.</li>
            <li><b>Excessive animations</b> — motion without improving usability.</li>
            <li><b>Poor contrast and readability</b> — effects reduce legibility.</li>
            <li><b>Redundant visual detail</b> — every element tries to be special.</li>
            <li><b>Inconsistent spacing and balance</b> — proportions feel subtly &quot;off.&quot;</li>
            <li><b>Weak information architecture</b> — interface structure doesn&apos;t reflect user priorities.</li>
            <li><b>Template-driven aesthetics</b> — generic patterns with no product identity.</li>
            <li><b>Styling over communication</b> — optimizing for visual flair instead of clarity.</li>
            <li><b>Lack of design intention</b> — choices feel generated rather than considered.</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
