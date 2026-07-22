export interface ImpactStat {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  note?: string;
}

export const impactStats: ImpactStat[] = [
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "", label: "Distribution centers" },
  { value: 0.8, decimals: 1, suffix: "%", label: "Loss reduction" },
  { value: 13, suffix: "%", label: "Patient satisfaction improvement" },
  { value: 7.5, decimals: 1, suffix: "%", label: "Cost reduction" },
  { value: 3, suffix: "%", label: "Freight cost reduction" },
  { value: 17, suffix: "%", label: "Empty backhaul miles cut" },
  {
    value: 30,
    suffix: " min",
    label: "Reconciliation time",
    note: "Down from 3–4 hrs",
  },
];
