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
  {
    title: "Bhairav Exports Website",
    description:
      "A marketing site for a textile exporter, featuring an interactive 3D scene and a data-driven world map across 8 fabric collections.",
    highlights: ["Three.js interactive scene", "D3.js world map", "8 fabric collections"],
    stack: ["React", "Vite", "Three.js", "D3.js", "Tailwind CSS"],
  },
  {
    title: "News Digest Automation",
    description:
      "An automated pipeline that compiles and delivers a twice-daily PDF news digest.",
    highlights: ["Twice-daily PDF digests", "Fully automated via CI"],
    stack: ["GitHub Actions", "Python", "Anthropic API"],
  },
];
