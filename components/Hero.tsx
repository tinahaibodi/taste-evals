const CARDS = [
  { id: "brief", label: "Brief" },
  { id: "part-1-1", label: "Rubric" },
  { id: "qa", label: "QA" },
  { id: "tool", label: "Handoff" },
];

export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <header className="hero">
      <img src="/taste.svg" alt="Taste" className="hero-mark" />
      <button className="hero-enter" onClick={onEnter}>
        Start the Taste Check →
      </button>

      <div className="hero-center">
        <span className="hero-rule" />
        <h1 className="hero-title">
          <img src="/taste.svg" alt="Taste" className="hero-logo" />
          <span className="hero-labs">Labs</span>
        </h1>
        <p className="hero-sub">
          The design QA kit for Meridian —<br />
          a taste check your team can actually run.
        </p>
      </div>

      <div className="hero-deck">
        {CARDS.map(({ id, label }, i) => (
          <a key={id} href={`#${id}`} className={`deck-card deck-${i + 1}`}>
            <span className="deck-pattern" />
            <span className="deck-label">{label}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
