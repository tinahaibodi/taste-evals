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
          <h2 className="section-title">Good vs. bad: the same card, three ways</h2>
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
          <h2 className="section-title">What makes good design?</h2>
          <h3 className="point-title">Art direction and imagery</h3>
          <p>
            Good design starts with deliberate art direction: imagery that is commissioned or
            curated for the product rather than pulled from a stock library, the way Harvey and
            Sierra lean on new media and Kimi leans on print-shop imagery. Photos and
            illustrations share one consistent, cohesive style, so every visual feels like it
            belongs to the same brand.
          </p>
          <h3 className="point-title">Typography and hierarchy</h3>
          <p>
            Typography is held to a clear type scale, with defined sizes for display, heading,
            body and caption. Text hierarchy is carried by font weight, styling and variation
            that match their role, and copy is set at a good line length with considered letter
            spacing. Text is properly aligned and centered, so nothing reads as accidental.
          </p>
          <h3 className="point-title">Space and structure</h3>
          <p>
            Padding and whitespace are used effectively, and a grid governs text placement,
            image containers and section layout. This is the unglamorous part of taste: knowing
            how to spread the content out well before anything decorative is added to the page.
          </p>
          <h3 className="point-title">Colour and detail</h3>
          <p>
            Colour is limited to a defined palette with clear roles: primary, neutrals and
            semantic. Icons share one style and stay consistent, borders, dividers and strokes
            are deliberate, and effects like noise and blur exist only to accentuate, bringing
            attention to text or graphic elements rather than decorating them.
          </p>
        </Reveal>
      </div>

      <div className="col prose" style={{ marginTop: 24 }}>
        <Reveal>
          <h2 className="section-title">What makes bad design?</h2>
          <h3 className="point-title">Hierarchy and structure collapse</h3>
          <p>
            Bad design usually announces itself structurally. There is no visual hierarchy, so
            everything competes for attention. Containers nest inside containers without
            purpose, spacing and balance drift until proportions feel subtly off, and the
            information architecture stops reflecting what users actually prioritize.
          </p>
          <h3 className="point-title">Colour and effects everywhere</h3>
          <p>
            Colour gets overused: gradients, accents and hues everywhere, with no role behind
            any of them. Visual effects pile up the same way, glassmorphism, shadows, borders
            and blur applied without intent, until contrast and readability suffer and every
            element is trying to be special at once.
          </p>
          <h3 className="point-title">Typography, icons and motion without a job</h3>
          <p>
            Typefaces get chosen because they are fashionable rather than appropriate. Icons
            turn decorative, emoji and colored icon boxes that add no meaning. Animation piles
            on without improving usability, so motion becomes another layer of noise instead of
            a tool.
          </p>
          <h3 className="point-title">No intention behind the choices</h3>
          <p>
            Underneath all of it is a lack of design intention: template-driven aesthetics with
            no product identity, styling optimized for visual flair instead of communication,
            and choices that feel generated rather than considered.
          </p>
        </Reveal>
      </div>

      <div className="col prose" style={{ marginTop: 24 }}>
        <Reveal>
          <h2 className="section-title">The rubric</h2>
          <p>Every point above, condensed into the table we actually review against.</p>
          <div className="rubric compare">
            <div className="rubric-row head">
              <div>Criterion</div>
              <div>Good looks like</div>
              <div>Bad looks like</div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Art direction &amp; imagery</div>
              <div className="rubric-test">
                Commissioned or curated imagery; photos and illustrations share one cohesive
                style.
              </div>
              <div className="rubric-test">
                Template-driven aesthetics; generic patterns with no product identity.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Typography</div>
              <div className="rubric-test">
                Clear type scale (display, heading, body, caption); restrained typeface count.
              </div>
              <div className="rubric-test">
                Fonts chosen because they&apos;re fashionable, not appropriate.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Hierarchy</div>
              <div className="rubric-test">
                Weight, styling and variation match their role; no arbitrary bolding.
              </div>
              <div className="rubric-test">
                No visual hierarchy; everything competes for attention.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Spacing &amp; layout</div>
              <div className="rubric-test">
                Effective padding and whitespace; a grid governs text, images and sections.
              </div>
              <div className="rubric-test">
                Nested containers without purpose; proportions feel subtly off.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Colour</div>
              <div className="rubric-test">
                Limited palette with clear roles: primary, neutrals, semantic.
              </div>
              <div className="rubric-test">
                Gradients, accents and hues everywhere; colour as decoration.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Effects &amp; motion</div>
              <div className="rubric-test">
                Noise and blur used to accentuate text or graphic elements.
              </div>
              <div className="rubric-test">
                Glassmorphism, shadows and blur without intent; motion that doesn&apos;t improve
                usability.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Copy</div>
              <div className="rubric-test">
                Good line length and letter spacing; text properly aligned and centered.
              </div>
              <div className="rubric-test">
                Styling over communication; flair instead of clarity.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Icons &amp; detail</div>
              <div className="rubric-test">
                One icon style; deliberate borders, dividers and strokes.
              </div>
              <div className="rubric-test">
                Decorative emoji and icon boxes that add no meaning; redundant visual detail.
              </div>
            </div>
            <div className="rubric-row">
              <div className="rubric-name">Intention</div>
              <div className="rubric-test">
                Every choice looks considered and traceable to the product.
              </div>
              <div className="rubric-test">
                Choices feel generated; the interface has no point of view.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
