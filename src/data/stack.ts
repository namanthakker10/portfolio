export interface StackItem {
  name: string;
  icon?: string;
  initials?: string;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
}

const devicon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const simpleicon = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: devicon("python") },
      { name: "SQL", initials: "SQL" },
      { name: "R", icon: devicon("r") },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Power BI", initials: "BI" },
      { name: "Tableau", initials: "TB" },
      { name: "Excel", initials: "XL" },
      { name: "Matplotlib", icon: devicon("matplotlib") },
      { name: "Seaborn", initials: "SB" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Power Automate", initials: "PA" },
      { name: "MySQL Workbench", icon: devicon("mysql") },
      { name: "GitHub Actions", icon: simpleicon("githubactions") },
      { name: "Figma", icon: devicon("figma") },
      { name: "MS Visio", initials: "VS" },
    ],
  },
  {
    label: "Supply Chain",
    items: [
      { name: "Demand Planning", initials: "DP" },
      { name: "Inventory Analysis", initials: "IA" },
      { name: "Procurement", initials: "PR" },
      { name: "DMAIC", initials: "DM" },
      { name: "KPI Development", initials: "KPI" },
    ],
  },
  {
    label: "Web",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "Vite", icon: devicon("vitejs") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
      { name: "Three.js", icon: simpleicon("threedotjs", "ffffff") },
      { name: "D3.js", icon: simpleicon("d3") },
    ],
  },
  {
    label: "Certifications",
    items: [
      { name: "Lean Six Sigma Yellow Belt", initials: "LSS" },
      { name: "Google Data Analytics", icon: simpleicon("google") },
      { name: "Bloomberg Market Concepts", initials: "BMC" },
    ],
  },
];
