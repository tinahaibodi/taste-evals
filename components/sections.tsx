import type { ReactNode } from "react";
import MeridianBrief from "./MeridianBrief";
import HarveyBreakdown from "./HarveyBreakdown";
import BadDesign from "./BadDesign";
import QaProcess from "./QaProcess";
import ToolWalkthrough from "./ToolWalkthrough";

export interface SectionDef {
  id: string;
  title: string;
  element: ReactNode;
}

export const GROUPS: { title: string; items: SectionDef[] }[] = [
  {
    title: "Brief",
    items: [{ id: "brief", title: "Meridian Brief", element: <MeridianBrief /> }],
  },
  {
    title: "Rubric",
    items: [
      { id: "part-1-1", title: "Harvey breakdown", element: <HarveyBreakdown /> },
      { id: "part-2", title: "Design Evals", element: <BadDesign /> },
    ],
  },
  {
    title: "QA",
    items: [{ id: "qa", title: "Taste Check", element: <QaProcess /> }],
  },
  {
    title: "Handoff",
    items: [{ id: "tool", title: "Taste CLI", element: <ToolWalkthrough /> }],
  },
];

export const SECTIONS: SectionDef[] = GROUPS.flatMap((g) => g.items);
