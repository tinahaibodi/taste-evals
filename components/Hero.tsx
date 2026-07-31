export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <header className="hero">
      <h1 className="hero-title">
        <img src="/taste.svg" alt="Taste" className="hero-logo" />
        <span className="hero-labs">Labs</span>
      </h1>
      <p className="hero-sub">
        Taste Check for Meridian — Brief · Rubric · QA · Handoff
      </p>
      <button className="hero-enter" onClick={onEnter}>
        Start the Taste Check →
      </button>
    </header>
  );
}
