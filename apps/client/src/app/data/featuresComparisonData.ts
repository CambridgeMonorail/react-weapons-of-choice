import { featuresList } from './featuresData';

export interface FeatureTier {
  name: string;
  features: string[];
}

const FREE_TIER_FEATURES_COUNT = 3;
const PRO_TIER_FEATURES_COUNT = 4;

/**
 * An array of feature tiers, each with a name and a list of features.
 * The features are subsets of the featuresList.
 */
export const featureTiers: FeatureTier[] = [
  {
    name: 'Free',
    features: featuresList.slice(0, FREE_TIER_FEATURES_COUNT),
  },
  {
    name: 'Pro',
    features: featuresList.slice(0, PRO_TIER_FEATURES_COUNT),
  },
  {
    name: 'Enterprise',
    features: featuresList,
  },
];

/**
 * An array of objects that compare features across different feature tiers.
 * Each object contains a feature and boolean values indicating its availability
 * in the basic, pro, and enterprise tiers.
 */
export const featuresComparisonData = featuresList.map((feature) => ({
  feature,
  basic: featuresList.slice(0, FREE_TIER_FEATURES_COUNT).includes(feature),
  pro: featuresList.slice(0, PRO_TIER_FEATURES_COUNT).includes(feature),
  enterprise: featuresList.includes(feature),
}));
