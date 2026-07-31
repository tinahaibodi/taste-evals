export default function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <header className="hero">
      <h1 className="hero-title">
        <img src="/taste.svg" alt="Taste" className="hero-logo" />
        <span className="hero-labs">Labs</span>
      </h1>
      <p className="hero-sub">Design QA for a two-developer team · Meridian</p>
      <button className="hero-enter" onClick={onEnter}>
        Open the QA kit →
      </button>
    </header>
  );
}
