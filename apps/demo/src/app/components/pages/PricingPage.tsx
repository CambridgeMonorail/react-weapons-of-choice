import { FC, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rwoc/shadcnui/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@rwoc/shadcnui/components/ui/table';
import { Button } from '@rwoc/shadcnui/components/ui/button';
import { Switch } from '@rwoc/shadcnui/components/ui/switch';

interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
  description: string;
  isMostPopular?: boolean;
}

const featuresList = [
  'Unlimited Projects',
  '24/7 Support',
  'Advanced Analytics',
  'Team Collaboration',
  'Dedicated Account Manager',
];

const pricingTiers: PricingTier[] = [
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

export const PricingPage: FC = () => {
  const [billingAnnual, setBillingAnnual] = useState(false);

  return (
    <div className="p-6 m-4 space-y-10 bg-background text-foreground">
      <header>
        <h1 className="text-4xl font-bold mb-4 text-primary">Pricing</h1>
        <p className="max-w-2xl text-foreground">
          Choose the plan that fits your needs and scale as you grow. All plans include basic features and unlimited projects.
        </p>
      </header>

      {/* Billing Toggle */}
      <div className="flex items-center space-x-3" role="group" aria-label="Billing Toggle">
        <span className="text-sm text-foreground">Monthly</span>
        <Switch checked={billingAnnual} onCheckedChange={setBillingAnnual} aria-label="Toggle billing period" />
        <span className="text-sm text-foreground">Annual (Save 20%)</span>
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Pricing Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
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

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Comparison Table</h2>
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-background text-foreground" role="table">
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Feature</TableHead>
                {pricingTiers.map((tier) => (
                  <TableHead key={tier.name} className="text-center">
                    {tier.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {featuresList.map((feature, index) => (
                <TableRow key={index} className="border-b border-muted">
                  <TableCell>{feature}</TableCell>
                  {pricingTiers.map((tier) => (
                    <TableCell key={tier.name} className="text-center">
                      {tier.features.includes(feature) ? (
                        <span className="text-green-600 font-bold" aria-label={`${tier.name} includes ${feature}`}>✔</span>
                      ) : (
                        <span className="text-red-500 font-bold" aria-label={`${tier.name} does not include ${feature}`}>✘</span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};
