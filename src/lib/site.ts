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

export const CATEGORIES_ES: Record<string, string> = {
  'complete-home-backup-power-guide': 'Empieza aquí',
  'what-size-generator-run-house': 'Dimensionamiento',
  'what-size-generator-central-ac': 'Dimensionamiento',
  'whole-house-generator-cost': 'Costos',
  'portable-vs-standby-vs-inverter-generator': 'Tipos de generadores',
  'transfer-switch-vs-interlock-kit': 'Instalación',
  'home-battery-vs-generator': 'Baterías',
  'dual-fuel-vs-gas-vs-propane-generator': 'Combustible',
  'generator-maintenance-checklist': 'Mantenimiento',
  'how-long-do-generators-last': 'Duración',
  'generac-vs-kohler-vs-cummins': 'Tipos de generadores',
  'storm-preparedness-checklist': 'Seguridad',
  'portable-power-stations-home-backup': 'Baterías',
  'generator-fuel-consumption': 'Combustible',
  'quietest-generators-noise-levels': 'Tipos de generadores',
  'what-can-7500-watt-generator-run': 'Dimensionamiento',
  'generator-wont-start-troubleshooting': 'Mantenimiento',
  'natural-gas-vs-propane-standby': 'Combustible',
  'can-ev-power-house-v2h': 'Baterías',
  'charging-ev-during-outage': 'Seguridad',
  'ev-charger-detached-garage': 'Instalación',
  'hardwired-vs-plug-in-ev-charger': 'Instalación',
  'how-much-cost-charge-ev-home': 'Costos',
  'level-1-vs-level-2-charging': 'Comparativas',
  'level-2-ev-charger-installation-cost': 'Costos',
  'tesla-wall-connector-vs-chargepoint-vs-emporia': 'Comparativas',
};

export function categoryForEs(slug: string): string {
  return CATEGORIES_ES[slug] ?? 'Guías';
}

export function readingMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 200));
}

export function formatDate(d: Date, locale: string = 'en-US'): string {
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
