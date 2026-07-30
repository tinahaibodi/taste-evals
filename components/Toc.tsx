"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "brief", label: "Brief" },
  { id: "part-1", label: "LLM Taste" },
  { id: "part-1-1", label: "Harvey Breakdown" },
  { id: "part-1-2", label: "The Checklist" },
  { id: "part-2", label: "Good vs. Bad" },
  { id: "qa", label: "QA Process" },
];

export default function Toc() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Marks a section active while it occupies the upper-middle of the viewport.
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const { id } of ITEMS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="toc" aria-label="Contents">
      <p className="toc-label">Contents</p>
      {ITEMS.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
          {label}
        </a>
      ))}
    </nav>
  );
}
