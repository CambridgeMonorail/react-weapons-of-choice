export const featuresList = [
  'Unlimited Projects',
  '24/7 Support',
  'Advanced Analytics',
  'Team Collaboration',
  'Dedicated Account Manager',
];

export interface PricingTier {
  name: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    features: ['Unlimited Projects', '24/7 Support', 'Advanced Analytics'],
  },
  {
    name: 'Pro',
    features: ['Unlimited Projects', '24/7 Support', 'Advanced Analytics', 'Team Collaboration'],
  },
  {
    name: 'Enterprise',
    features: [
      'Unlimited Projects',
      '24/7 Support',
      'Advanced Analytics',
      'Team Collaboration',
      'Dedicated Account Manager',
    ],
  },
];

export const featuresComparisonData = [
  { feature: 'Unlimited Projects', basic: true, pro: true, enterprise: true },
  { feature: '24/7 Support', basic: true, pro: true, enterprise: true },
  { feature: 'Advanced Analytics', basic: true, pro: true, enterprise: true },
  { feature: 'Team Collaboration', basic: false, pro: true, enterprise: true },
  { feature: 'Dedicated Account Manager', basic: false, pro: false, enterprise: true },
];
