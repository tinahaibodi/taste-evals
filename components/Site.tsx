"use client";

import { useState } from "react";
import Hero from "./Hero";
import Toc from "./Toc";
import Brief from "./Brief";
import LlmGoodDesign from "./LlmGoodDesign";
import HarveyBreakdown from "./HarveyBreakdown";
import GoodDesignChecklist from "./GoodDesignChecklist";
import BadDesign from "./BadDesign";
import ToolWalkthrough from "./ToolWalkthrough";
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
        <ToolWalkthrough />
        <QaProcess />
        <LlmGoodDesign />
        <HarveyBreakdown />
        <GoodDesignChecklist />
        <BadDesign />
      </div>
      <SiteFooter />
    </>
  );
}
