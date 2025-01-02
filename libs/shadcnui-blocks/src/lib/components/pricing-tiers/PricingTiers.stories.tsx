import type { Meta, StoryObj } from '@storybook/react';
import { PricingTiers, PricingTiersProps } from './index';

const meta: Meta<typeof PricingTiers> = {
  title: 'Shadcnui Blocks/PricingTiers',
  component: PricingTiers,
  tags: ['autodocs'],
  argTypes: {
    billingAnnual: {
      name: 'Billing Annual',
      control: 'boolean',
      description: 'Toggle for annual billing',
    },
    tiers: {
      name: 'Tiers',
      control: 'object',
      description: 'Array of pricing tiers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PricingTiers>;

const sampleTiers = [
  {
    name: 'Basic',
    monthlyPrice: '$10',
    annualPrice: '$100',
    features: ['Feature 1', 'Feature 2'],
    description: 'Basic plan description',
  },
  {
    name: 'Pro',
    monthlyPrice: '$20',
    annualPrice: '$200',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    description: 'Pro plan description',
    isMostPopular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$30',
    annualPrice: '$300',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    description: 'Enterprise plan description',
  },
];

/**
 * Default story for the PricingTiers component.
 * This example shows how to use the PricingTiers component with sample data.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: PricingTiersProps) => <PricingTiers {...args} />,
  args: {
    billingAnnual: false,
    tiers: sampleTiers,
  },
};

/**
 * AnnualBilling story for the PricingTiers component.
 * This example shows how to use the PricingTiers component with annual billing.
 */
export const AnnualBilling: Story = {
  name: 'Annual Billing',
  render: (args: PricingTiersProps) => <PricingTiers {...args} />,
  args: {
    billingAnnual: true,
    tiers: sampleTiers,
  },
};

/**
 * CustomTiers story for the PricingTiers component.
 * This example shows how to use the PricingTiers component with custom tiers.
 */
export const CustomTiers: Story = {
  name: 'Custom Tiers',
  render: (args: PricingTiersProps) => <PricingTiers {...args} />,
  args: {
    billingAnnual: false,
    tiers: [
      {
        name: 'Starter',
        monthlyPrice: '$5',
        annualPrice: '$50',
        features: ['Feature A', 'Feature B'],
        description: 'Starter plan description',
      },
      {
        name: 'Advanced',
        monthlyPrice: '$15',
        annualPrice: '$150',
        features: ['Feature A', 'Feature B', 'Feature C'],
        description: 'Advanced plan description',
        isMostPopular: true,
      },
    ],
  },
};
