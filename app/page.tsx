import Hero from "@/components/Hero";
import Brief from "@/components/Brief";
import LlmGoodDesign from "@/components/LlmGoodDesign";
import HarveyBreakdown from "@/components/HarveyBreakdown";
import GoodDesignChecklist from "@/components/GoodDesignChecklist";
import BadDesign from "@/components/BadDesign";
import QaProcess from "@/components/QaProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brief />
      <LlmGoodDesign />
      <HarveyBreakdown />
      <GoodDesignChecklist />
      <BadDesign />
      <QaProcess />
      <footer>
        <span className="hand">taste is a checklist you&rsquo;ve internalized</span>
        Taste Labs · Field Notes · Meridian QA
      </footer>
    </main>
  );
}
