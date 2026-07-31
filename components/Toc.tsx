"use client";

import { useEffect, useState } from "react";

const GROUPS = [
  {
    title: "Start Here",
    items: [{ id: "brief", label: "The brief" }],
  },
  {
    title: "Your Workflow",
    items: [
      { id: "tool", label: "Run taste-check" },
      { id: "qa", label: "Gates & checklist" },
    ],
  },
  {
    title: "Reference",
    items: [
      { id: "part-1", label: "What LLMs think" },
      { id: "part-1-1", label: "Harvey breakdown" },
      { id: "part-1-2", label: "Good design checklist" },
      { id: "part-2", label: "Good vs. bad" },
    ],
  },
];

const ALL_IDS = GROUPS.flatMap((g) => g.items.map((i) => i.id));

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
    for (const id of ALL_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="toc" aria-label="Contents">
      {GROUPS.map((group) => (
        <div className="toc-group" key={group.title}>
          <p className="toc-label">{group.title}</p>
          <div className="toc-items">
            {group.items.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                {label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
