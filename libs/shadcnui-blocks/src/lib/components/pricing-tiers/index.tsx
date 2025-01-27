import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Button } from '@erisfy/shadcnui';

/**
 * Interface representing a pricing tier.
 */
export interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
  description: string;
  isMostPopular?: boolean;
}

/**
 * Props for the PricingTiers component.
 */
interface PricingTiersProps {
  billingAnnual: boolean;
  tiers: PricingTier[];
}

/**
 * PricingTiers component.
 * 
 * This component renders a list of pricing tiers, each represented by a card.
 */
export const PricingTiers: FC<PricingTiersProps> = ({ billingAnnual, tiers }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-primary">Pricing Tiers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative ${
              tier.isMostPopular ? 'ring-2 ring-primary' : 'border border-muted'
            } p-4 text-foreground flex flex-col`}
            role="region"
            aria-labelledby={`tier-${tier.name}`}
          >
            {tier.isMostPopular && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle id={`tier-${tier.name}`} className="text-2xl font-semibold">{tier.name}</CardTitle>
              <CardDescription className="text-lg text-card-foreground">
                {billingAnnual ? tier.annualPrice + '/yr' : tier.monthlyPrice + '/mo'}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-card-foreground">{tier.description}</p>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  {tier.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Button variant="default" className="w-full mt-4" aria-label={`Get started with ${tier.name} plan`}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
