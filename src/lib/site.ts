// Shared site metadata helpers — layout-level only, no content changes.
export const CATEGORIES: Record<string, string> = {
  'complete-home-backup-power-guide': 'Start Here',
  'what-size-generator-run-house': 'Sizing',
  'what-size-generator-central-ac': 'Sizing',
  'whole-house-generator-cost': 'Costs',
  'portable-vs-standby-vs-inverter-generator': 'Generator Types',
  'transfer-switch-vs-interlock-kit': 'Installation',
  'home-battery-vs-generator': 'Batteries',
  'dual-fuel-vs-gas-vs-propane-generator': 'Fuel',
  'generator-maintenance-checklist': 'Maintenance',
  'how-long-do-generators-last': 'Lifespan',
  'generac-vs-kohler-vs-cummins': 'Generator Types',
  'storm-preparedness-checklist': 'Safety',
  'portable-power-stations-home-backup': 'Batteries',
  'generator-fuel-consumption': 'Fuel',
  'quietest-generators-noise-levels': 'Generator Types',
  'what-can-7500-watt-generator-run': 'Sizing',
  'generator-wont-start-troubleshooting': 'Maintenance',
  'natural-gas-vs-propane-standby': 'Fuel',
};

export function categoryFor(slug: string): string {
  return CATEGORIES[slug] ?? 'Guides';
}

export function readingMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 200));
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
