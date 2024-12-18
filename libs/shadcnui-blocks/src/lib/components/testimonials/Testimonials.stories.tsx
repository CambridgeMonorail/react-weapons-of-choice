import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialsSection } from './index';

const meta: Meta<typeof TestimonialsSection> = {
  title: 'Shadcnui Blocks/Testimonials',
  component: TestimonialsSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialsSection>;

/**
 * This example shows the default usage of the TestimonialsSection component.
 * It displays a grid of customer testimonials.
 */
export const Default: Story = {
  name: 'Default',
  render: () => <TestimonialsSection />,
};
