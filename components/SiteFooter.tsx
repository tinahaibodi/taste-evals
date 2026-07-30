export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wide footer-grid">
        <div className="footer-brand">
          <img src="/taste.svg" alt="Taste" className="footer-logo" />
          <p className="footer-tag">taste is a checklist you&rsquo;ve internalized</p>
        </div>
        <div className="footer-cols">
          <div>
            <p className="f-head">Contents</p>
            <a href="#brief">Brief</a>
            <a href="#part-1">LLM Taste</a>
            <a href="#part-1-1">Harvey Breakdown</a>
            <a href="#part-1-2">The Checklist</a>
            <a href="#part-2">Good vs. Bad</a>
            <a href="#qa">QA Process</a>
          </div>
          <div>
            <p className="f-head">Elsewhere</p>
            <a href="https://github.com/tinahaibodi/taste-evals">GitHub</a>
            <a href="https://github.com/tinahaibodi/taste-evals/tree/main/taste-check">
              taste-check CLI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
