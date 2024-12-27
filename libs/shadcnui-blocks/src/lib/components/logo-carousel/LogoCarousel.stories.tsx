import type { Meta, StoryObj } from '@storybook/react';
import { LogoCarousel, LogoCarouselProps } from './index';

const meta: Meta<typeof LogoCarousel> = {
  title: 'Shadcnui Blocks/LogoCarousel',
  component: LogoCarousel,
  tags: ['autodocs'],
  argTypes: {
    logos: {
      name: 'Logos',
      control: 'object',
      description: 'Array of logo data to display',
    },
    header: {
      name: 'Header',
      control: 'text',
      description: 'Optional header text',
    },
    subheader: {
      name: 'Subheader',
      control: 'text',
      description: 'Optional subheader text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogoCarousel>;

// Inline SVGs for sample logos
const sampleLogos = [
  {
    id: '1',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Ccircle cx="32" cy="32" r="32" fill="%23FF0000" /%3E%3C/svg%3E',
    alt: 'Red Circle',
  },
  {
    id: '2',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Crect width="64" height="64" fill="%2300FF00" /%3E%3C/svg%3E',
    alt: 'Green Square',
  },
  {
    id: '3',
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Cpolygon points="32,0 64,64 0,64" fill="%230000FF" /%3E%3C/svg%3E',
    alt: 'Blue Triangle',
  },
];

/**
 * Default story for the LogoCarousel component.
 * This example shows how to use the LogoCarousel component with sample logos.
 */
export const Default: Story = {
  name: 'Default',
  render: (args: LogoCarouselProps) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
  },
};

/**
 * CustomHeader story for the LogoCarousel component.
 * This example shows how to use the LogoCarousel component with a custom header.
 */
export const CustomHeader: Story = {
  name: 'Custom Header',
  render: (args: LogoCarouselProps) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
    header: 'Our Partners',
  },
};

/**
 * CustomSubheader story for the LogoCarousel component.
 * This example shows how to use the LogoCarousel component with a custom subheader.
 */
export const CustomSubheader: Story = {
  name: 'Custom Subheader',
  render: (args: LogoCarouselProps) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
    subheader: 'Trusted by the best',
  },
};

/**
 * Responsive story for the LogoCarousel component.
 * This example shows how the LogoCarousel component is fully responsive.
 */
export const Responsive: Story = {
  name: 'Responsive',
  render: (args: LogoCarouselProps) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
  },
};
