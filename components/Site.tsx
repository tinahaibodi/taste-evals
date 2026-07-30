"use client";

import { useState } from "react";
import Hero from "./Hero";
import Toc from "./Toc";
import Brief from "./Brief";
import LlmGoodDesign from "./LlmGoodDesign";
import HarveyBreakdown from "./HarveyBreakdown";
import GoodDesignChecklist from "./GoodDesignChecklist";
import BadDesign from "./BadDesign";
import QaProcess from "./QaProcess";
import SiteFooter from "./SiteFooter";

export default function Site() {
  const [entered, setEntered] = useState(false);

  const enter = () => {
    setEntered(true);
    window.scrollTo(0, 0);
  };

  if (!entered) {
    return <Hero onEnter={enter} />;
  }

  return (
    <>
      <Toc />
      <div className="article">
        <Brief />
        <LlmGoodDesign />
        <HarveyBreakdown />
        <GoodDesignChecklist />
        <BadDesign />
        <QaProcess />
      </div>
      <SiteFooter />
    </>
  );
}
