import type { ReactNode } from "react";
import Brief from "./Brief";
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
    items: [{ id: "brief", title: "The brief", element: <Brief /> }],
  },
  {
    title: "Rubric",
    items: [
      { id: "part-1-1", title: "Harvey breakdown", element: <HarveyBreakdown /> },
      { id: "part-2", title: "Good vs. bad", element: <BadDesign /> },
    ],
  },
  {
    title: "QA",
    items: [{ id: "qa", title: "Gates & checklist", element: <QaProcess /> }],
  },
  {
    title: "Handoff",
    items: [{ id: "tool", title: "Taste CLI", element: <ToolWalkthrough /> }],
  },
];

export const SECTIONS: SectionDef[] = GROUPS.flatMap((g) => g.items);
