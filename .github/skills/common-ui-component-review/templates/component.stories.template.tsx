import type { Meta, StoryObj } from '@storybook/react';

import { ComponentUnderTest } from './index';

const meta: Meta<typeof ComponentUnderTest> = {
  title: 'Common UI/ComponentUnderTest',
  component: ComponentUnderTest,
  args: {},
  parameters: {
    docs: {
      description: {
        component:
          'Describe what this component does, when to use it, and any accessibility notes.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ComponentUnderTest>;

export const Default: Story = {};

export const VariantExample: Story = {
  args: {
    // Add representative props for a key variant.
  },
};
