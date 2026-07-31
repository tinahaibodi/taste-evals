const CARDS = [
  { id: "part-1-1", label: "Rubric", art: "/cards/Group.svg" },
  { id: "part-2", label: "Design Evals", art: "/cards/Group-3.svg" },
  { id: "qa", label: "QA", art: "/cards/Group-1.svg" },
  { id: "tool", label: "Handoff", art: "/cards/Group-2.svg" },
];

export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <header className="hero">
      <img src="/taste.svg" alt="Taste" className="hero-mark" />
      <a
        className="hero-github"
        href="https://github.com/tinahaibodi/taste-evals"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <div className="hero-center">
        <h1 className="hero-title">
          <img src="/taste.svg" alt="Taste" className="hero-logo" />
          <span className="hero-labs">Labs</span>
        </h1>
        <p className="hero-sub">A taste audit your team can actually run.</p>
        <button className="hero-enter" onClick={onEnter}>
          Start the Taste Check →
        </button>
      </div>

      <div className="hero-deck">
        {CARDS.map(({ id, label, art }, i) => (
          <a key={id} href={`#${id}`} className={`deck-card deck-${i + 1}`}>
            <img className="deck-frame" src="/cards/card-frame.svg" alt="" />
            <span className="deck-face">
              <span className="deck-label">{label}</span>
              <img className="deck-art" src={art} alt="" />
            </span>
          </a>
        ))}
      </div>
    </header>
  );
}
