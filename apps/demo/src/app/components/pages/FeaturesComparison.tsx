import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@rwoc/shadcnui/components/ui/table';

const featuresList = [
  'Unlimited Projects',
  '24/7 Support',
  'Advanced Analytics',
  'Team Collaboration',
  'Dedicated Account Manager',
];

interface PricingTier {
  name: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
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

export const FeaturesComparison: FC = () => {
  return (
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
  );
};
