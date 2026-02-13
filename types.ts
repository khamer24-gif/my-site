
export type TreatmentType = 'caries' | 'missing' | 'cleaning' | 'prosthetics';
export type MaterialType = 'economy' | 'premium';

export interface PricingRule {
  base: number;
  premium: number;
}

export const PRICING_DATA: Record<TreatmentType, PricingRule> = {
  caries: { base: 5000, premium: 15000 },
  missing: { base: 35000, premium: 85000 },
  cleaning: { base: 3000, premium: 7000 },
  prosthetics: { base: 25000, premium: 65000 },
};

export const TREATMENT_LABELS: Record<TreatmentType, string> = {
  caries: 'Лечение кариеса',
  missing: 'Отсутствует зуб (имплантация)',
  cleaning: 'Профессиональная чистка',
  prosthetics: 'Протезирование'
};
