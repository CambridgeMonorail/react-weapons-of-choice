import { PricingTier } from '../components/PricingTiers';
import { featuresList } from './featuresData';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    monthlyPrice: '$0',
    annualPrice: '$0',
    description: 'Ideal for hobbyists and first-time users.',
    features: [featuresList[0], featuresList[1], featuresList[2]],
  },
  {
    name: 'Pro',
    monthlyPrice: '$49',
    annualPrice: '$490',
    description: 'Perfect for growing teams with expanding needs.',
    features: [
      featuresList[0],
      featuresList[1],
      featuresList[2],
      featuresList[3],
    ],
    isMostPopular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$99',
    annualPrice: '$990',
    description: 'Tailored for large organizations and complex workflows.',
    features: [...featuresList],
  },
];

export const featuresComparisonData = featuresList.map((feature) => ({
  feature,
  basic: pricingTiers[0].features.includes(feature),
  pro: pricingTiers[1].features.includes(feature),
  enterprise: pricingTiers[2].features.includes(feature),
}));
