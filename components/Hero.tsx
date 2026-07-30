export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <header className="hero">
      <h1 className="hero-title">
        <img src="/taste.svg" alt="Taste" className="hero-logo" />
        <span className="hero-labs">Labs</span>
      </h1>
      <p className="hero-sub">Field Notes · Design Evals &amp; QA · Planning Doc</p>
      <button className="hero-enter" onClick={onEnter}>
        Read the field notes →
      </button>
    </header>
  );
}
