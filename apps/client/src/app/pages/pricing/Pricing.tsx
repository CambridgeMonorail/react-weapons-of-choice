import { FC, useState } from 'react';
import { Switch } from '@erisfy/shadcnui';
import { PricingTiers, FeaturesComparison } from '@erisfy/shadcnui-blocks';
import { pricingTiers } from '../../data/pricingTiersData';
import { featuresComparisonData } from '../../data/featuresComparisonData';

export const PricingPage: FC = () => {
  const [billingAnnual, setBillingAnnual] = useState(false);

  return (
    <div className="p-6 m-4 space-y-10 bg-background text-foreground">
      <header>
        <h1 className="text-4xl font-bold mb-4 text-primary">Pricing</h1>
        <p className="max-w-2xl text-foreground">
          Choose the plan that fits your needs and scale as you grow. All plans
          include basic features and unlimited projects.
        </p>
      </header>

      {/* Billing Toggle */}
      <div
        className="flex items-center space-x-3"
        role="group"
        aria-label="Billing Toggle"
      >
        <span className="text-sm text-foreground">Monthly</span>
        <Switch
          checked={billingAnnual}
          onCheckedChange={setBillingAnnual}
          aria-label="Toggle billing period"
        />
        <span className="text-sm text-foreground">Annual (Save 20%)</span>
      </div>

      <PricingTiers billingAnnual={billingAnnual} tiers={pricingTiers} />
      <FeaturesComparison data={featuresComparisonData} />
    </div>
  );
};
