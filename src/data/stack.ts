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

// Iconify aggregates devicon/simple-icons plus dedicated brand-logo sets
// (svg-logos, mdi, file-icons, arcticons) for tools missing from the two above.
const iconify = (prefix: string, name: string, color?: string) =>
  `https://api.iconify.design/${prefix}/${name}.svg${color ? `?color=%23${color}` : ""}`;

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
      { name: "Power BI", icon: iconify("logos", "microsoft-power-bi") },
      { name: "Tableau", icon: iconify("logos", "tableau-icon") },
      { name: "Excel", icon: iconify("mdi", "microsoft-excel", "217346") },
      { name: "Matplotlib", icon: devicon("matplotlib") },
      { name: "Seaborn", icon: iconify("devicon", "seaborn") },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Power Automate", icon: iconify("arcticons", "microsoft-power-automate", "ffffff") },
      { name: "MySQL Workbench", icon: devicon("mysql") },
      { name: "GitHub Actions", icon: simpleicon("githubactions") },
      { name: "Figma", icon: devicon("figma") },
      { name: "MS Visio", icon: iconify("file-icons", "microsoft-visio", "3955A3") },
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
      { name: "Bloomberg Market Concepts", icon: iconify("pixel", "bloomberg", "ffffff") },
    ],
  },
];
