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
    description: "Bachelor of Science in Business Administration.",
  },
  {
    org: "Global Markets Association",
    role: "Research Analyst",
    period: "Ongoing",
    side: "right",
    category: "leadership",
  },
  {
    org: "CASE Northeastern",
    role: "Senior Consultant",
    period: "Ongoing",
    side: "right",
    category: "leadership",
  },
  {
    org: "Bhairav Exports",
    role: "Supply Chain Data Analyst",
    period: "Apr – Jun 2025",
    side: "right",
    category: "work",
  },
  {
    org: "MedTourEasy",
    role: "Data Analyst Intern",
    period: "Jul – Sep 2025",
    side: "right",
    category: "work",
  },
  {
    org: "TJX Companies",
    role: "Global Continuous Improvement Intern",
    period: "Jan – Jun 2026",
    side: "right",
    category: "work",
  },
  {
    org: "LSE Summer School",
    role: "Managerial Accounting — AC101",
    period: "July 2026",
    side: "left",
    category: "education",
  },
];
