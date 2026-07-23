export type ExperienceCategory = "education" | "work" | "leadership";

export interface ExperienceEntry {
  org: string;
  role: string;
  period: string;
  side: "left" | "right";
  category: ExperienceCategory;
  description?: string;
  bullets?: string[];
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
    bullets: [
      "Conducted equity research across industries, companies, and individual securities to develop investment theses",
      "Authored research reports articulating each thesis and its supporting rationale • pitched recommendations to the association",
      "Defended investment views with evidence-based reasoning • strengthened analytical and valuation judgment",
    ],
  },
  {
    org: "CASE Northeastern",
    role: "Senior Consultant",
    period: "Ongoing",
    side: "right",
    category: "leadership",
    bullets: [
      "Directed market-expansion strategy for client Fortify Companies on an 8-person team across a full-semester engagement",
      "Conducted competitive and market-sizing analysis that formed the foundation of the team's core recommendation",
      "Owned analysis and client deliverables end-to-end • presented findings to company leadership at mid-point and final reviews",
    ],
  },
  {
    org: "Bhairav Exports",
    role: "Supply Chain Data Analyst",
    period: "Apr – Jun 2025",
    side: "right",
    category: "work",
    bullets: [
      "Developed a Python time-series forecasting model to resolve inventory shortages • reduced costs ~7.5% within a quarter",
      "Analyzed export shipment data across West African markets (Nigeria, Kenya, Tanzania, Benin) • lowered freight costs 3% per container",
      "Built an automated KPI reporting tool adopted into the sales team's standing workflow",
    ],
  },
  {
    org: "MedTourEasy",
    role: "Data Analyst Intern",
    period: "Jul – Sep 2025",
    side: "right",
    category: "work",
    bullets: [
      "Analyzed a 300+ record patient database to inform senior leadership's international market-expansion strategy",
      "Translated raw data into executive-ready visualizations and presentations that shaped the expansion decision",
      "Identified service gaps through patient-feedback analysis • improved satisfaction scores 13%",
    ],
  },
  {
    org: "TJX Companies",
    role: "Global Continuous Improvement Intern",
    period: "Jan – Jun 2026",
    side: "right",
    category: "work",
    bullets: [
      "Drove operational efficiency across 5 distribution centers (TJ Maxx, Marshalls, HomeGoods, Sierra) through 20+ improvement initiatives",
      "Engineered a real-time dashboard for loss and damage tracking • reduced unaccounted inventory losses by 0.8%",
      "Automated recurring reporting workflows • reclaimed ~1.5 hrs/week per associate • increased project visibility 30%",
      "Developed 4+ analytics dashboards and mapped operational workflows to identify and eliminate process bottlenecks",
    ],
  },
];
