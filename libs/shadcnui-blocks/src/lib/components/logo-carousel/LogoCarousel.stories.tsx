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

const sampleLogos = [
  { id: '1', src: 'path/to/logo1.svg', alt: 'Logo 1' },
  { id: '2', src: 'path/to/logo2.svg', alt: 'Logo 2' },
  { id: '3', src: 'path/to/logo3.svg', alt: 'Logo 3' },
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
