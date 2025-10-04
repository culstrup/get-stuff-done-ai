
export interface PricingTier {
  label: string;
  price: string;
  btcPrice?: number; // Price in BTC
  description?: string;
  calendlyLink?: string;
  availability?: string;
}

export interface BundlePricing {
  quantity: number;
  discount: number; // Percentage discount
  upfrontPercentage: number; // Percentage required upfront
  description: string;
}

export interface ServiceType {
  title: string;
  description: string;
  price: string;
  btcPrice?: number; // Price in BTC (for dynamic USD conversion)
  pricingTiers?: PricingTier[];
  bundlePricing?: BundlePricing[]; // For services that offer bundle discounts
  subtext?: string;
  extraText?: string;
  features: string[];
  cta: string;
  secondaryCta: string;
  calendlyLink?: string;
  learnMoreLink?: string;
}
