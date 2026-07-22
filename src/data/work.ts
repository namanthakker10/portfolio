export interface WorkProject {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export const workProjects: WorkProject[] = [
  {
    title: "MerchFlow",
    description:
      "A 10-table MySQL procurement database modeled after TJX's real-world purchasing workflows.",
    highlights: ["10-table relational schema", "$144K in PO value surfaced"],
    stack: ["MySQL", "SQL", "MySQL Workbench"],
  },
  {
    title: "TransOps",
    description:
      "A road freight operations dashboard built to cut empty miles and speed up reconciliation.",
    highlights: ["17% backhaul reduction", "Real-time reconciliation"],
    stack: ["Python", "Power BI", "SQL"],
  },
];
