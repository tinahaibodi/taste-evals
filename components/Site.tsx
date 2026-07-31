"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Toc from "./Toc";
import SiteFooter from "./SiteFooter";
import { SECTIONS } from "./sections";

export default function Site() {
  const [view, setView] = useState<string>("hero");

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.slice(1);
      setView(SECTIONS.some((s) => s.id === hash) ? hash : "hero");
      window.scrollTo(0, 0);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  if (view === "hero") {
    return (
      <Hero
        onEnter={() => {
          window.location.hash = "brief";
        }}
      />
    );
  }

  const section = SECTIONS.find((s) => s.id === view)!;

  return (
    <>
      <div className="shell">
        <Toc active={view} />
        <div className="article">{section.element}</div>
      </div>
      <SiteFooter />
    </>
  );
}
