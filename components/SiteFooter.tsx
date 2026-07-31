export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wide footer-grid">
        <img src="/taste.svg" alt="Taste" className="footer-logo" />
        <div className="footer-cols">
          <div>
            <p className="f-head">Contents</p>
            <a href="#brief">Brief</a>
            <a href="#part-1-1">Rubric</a>
            <a href="#part-2">Design Evals</a>
            <a href="#qa">QA</a>
            <a href="#tool">Handoff</a>
          </div>
          <div>
            <p className="f-head">Tools</p>
            <a href="https://github.com/tinahaibodi/taste-evals">GitHub</a>
            <a href="https://github.com/tinahaibodi/taste-evals/tree/main/taste-check">
              Taste CLI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
