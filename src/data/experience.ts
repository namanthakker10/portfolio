export type ExperienceCategory = "education" | "work" | "leadership";

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  side: "left" | "right";
  category: ExperienceCategory;
  description?: string;
}

export const experience: ExperienceEntry[] = [
  {
    org: "Northeastern University",
    role: "BSBA, Supply Chain Management — Data Science Minor",
    period: "Expected May 2028",
    side: "left",
    category: "education",
    description:
      "BSBA in Supply Chain with a Data Science minor. GPA 3.43. Relevant coursework: Global Supply Chain Strategy, Intro to Databases, Mathematical Foundations of AI.",
  },
  {
    org: "Global Markets Association",
    role: "Research Analyst",
    period: "Ongoing",
    side: "right",
    category: "leadership",
    description:
      "Produced real-world market reports and presentations covering global macro trends, equities, and financial data. Developed research frameworks and presented findings to the broader analyst team.",
  },
  {
    org: "CASE Northeastern",
    role: "Senior Consultant",
    period: "Ongoing",
    side: "right",
    category: "leadership",
    description:
      "Senior Consultant on a real client engagement with an HVAC company — used data analysis to identify operational inefficiencies and built recommendations backed by quantified impact. Delivered findings in structured presentations to client stakeholders.",
  },
  {
    org: "Bhairav Exports",
    role: "Supply Chain Data Analyst",
    period: "Apr – Jun 2025",
    side: "right",
    category: "work",
    description:
      "Built a Python time-series forecasting model cutting costs 7.5% in a quarter. Optimized freight and logistics across West Africa — Nigeria, Kenya, Tanzania, Benin — reducing freight costs 3% per container.",
  },
  {
    org: "MedTourEasy",
    role: "Data Analyst Intern",
    period: "Jul – Sep 2025",
    side: "right",
    category: "work",
    description:
      "Analyzed 300+ patient records using SQL and R to build data visualizations and statistical models informing international expansion strategy. Improved patient satisfaction scores by 13% through feedback analysis.",
  },
  {
    org: "TJX Companies",
    role: "Global Continuous Improvement Intern",
    period: "Jan – Jun 2026",
    side: "right",
    category: "work",
    description:
      "Led process improvement across 20+ Lean projects spanning 5 distribution centers. Built Power BI dashboards replacing manual tracking, automated reporting workflows, and drove measurable loss reduction across TJ Maxx, Marshalls, HomeGoods, and Sierra.",
  },
];
