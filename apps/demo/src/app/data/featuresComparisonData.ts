import { featuresList } from './featuresData';

export interface PricingTier {
  name: string;
  features: string[];
}

/**
 * An array of pricing tiers, each with a name and a list of features.
 * The features are subsets of the featuresList.
 */
export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    features: featuresList.slice(0, 3),
  },
  {
    name: 'Pro',
    features: featuresList.slice(0, 4),
  },
  {
    name: 'Enterprise',
    features: featuresList,
  },
];

/**
 * An array of objects that compare features across different pricing tiers.
 * Each object contains a feature and boolean values indicating its availability
 * in the basic, pro, and enterprise tiers.
 */
export const featuresComparisonData = featuresList.map((feature) => ({
  feature,
  basic: featuresList.slice(0, 3).includes(feature),
  pro: featuresList.slice(0, 4).includes(feature),
  enterprise: featuresList.includes(feature),
}));
