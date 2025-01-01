export interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
  description: string;
  isMostPopular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    monthlyPrice: '$0',
    annualPrice: '$0',
    description: 'Ideal for hobbyists and first-time users.',
    features: ['Unlimited Projects', '24/7 Support', 'Advanced Analytics'],
  },
  {
    name: 'Pro',
    monthlyPrice: '$49',
    annualPrice: '$490',
    description: 'Perfect for growing teams with expanding needs.',
    features: ['Unlimited Projects', '24/7 Support', 'Advanced Analytics', 'Team Collaboration'],
    isMostPopular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$99',
    annualPrice: '$990',
    description: 'Tailored for large organizations and complex workflows.',
    features: [
      'Unlimited Projects',
      '24/7 Support',
      'Advanced Analytics',
      'Team Collaboration',
      'Dedicated Account Manager',
    ],
  },
];
