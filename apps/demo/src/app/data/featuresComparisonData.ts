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
