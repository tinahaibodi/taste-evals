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
            <a href="#brief">The Brief</a>
            <a href="#tool">Run taste-check</a>
            <a href="#qa">Gates &amp; Checklist</a>
            <a href="#part-1">What LLMs Think</a>
            <a href="#part-1-1">Harvey Breakdown</a>
            <a href="#part-1-2">Good Design Checklist</a>
            <a href="#part-2">Good vs. Bad</a>
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
