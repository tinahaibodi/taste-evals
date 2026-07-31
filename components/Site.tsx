"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Toc from "./Toc";
import SiteFooter from "./SiteFooter";
import { SECTIONS } from "./sections";

function viewFromHash(): string {
  if (typeof window === "undefined") return "hero";
  const hash = window.location.hash.slice(1);
  return SECTIONS.some((s) => s.id === hash) ? hash : "hero";
}

export default function Site() {
  const [view, setView] = useState<string>("hero");

  useEffect(() => {
    const apply = () => {
      setView(viewFromHash());
      window.scrollTo(0, 0);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const enter = (id: string) => {
    setView(id);
    if (window.location.hash.slice(1) !== id) {
      window.location.hash = id;
    }
    window.scrollTo(0, 0);
  };

  if (view === "hero") {
    return <Hero onEnter={() => enter("part-1-1")} />;
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
