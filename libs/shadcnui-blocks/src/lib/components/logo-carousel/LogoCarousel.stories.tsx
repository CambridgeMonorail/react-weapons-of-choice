import { Meta, StoryObj } from '@storybook/react';

import { LogoCarousel } from './index';
import { Logo } from '../logo';

const meta: Meta<typeof LogoCarousel> = {
  title: 'Shadcnui Blocks/LogoCarousel',
  tags: ['autodocs'],
  component: LogoCarousel,
};

export default meta;

const sampleLogos = [
  <Logo
    name="nx"
    className="w-16 h-16 sm:w-12 sm:h-12"
    key="nx"
    title="Nx"
    ariaLabel="Nx"
  />,
  <Logo
    name="react"
    className="w-16 h-16 sm:w-12 sm:h-12"
    key="react"
    title="React"
    ariaLabel="React"
  />,
  <Logo
    name="tailwind"
    className="w-16 h-16 sm:w-12 sm:h-12"
    key="tailwind"
    title="Tailwind CSS"
    ariaLabel="Tailwind CSS"
  />,
];

/**
 * Default story for the LogoCarousel component.
 * This example shows how to use the LogoCarousel component with sample logos.
 */
export const Default: StoryObj<LogoCarouselProps> = {
  name: 'Default',
  render: (args) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
  },
};

/**
 * CustomHeader story for the LogoCarousel component.
 * This example shows how to use the LogoCarousel component with a custom header.
 */
export const CustomHeader: StoryObj<LogoCarouselProps> = {
  name: 'Custom Header',
  render: (args) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
    header: 'Our Partners',
  },
};

/**
 * CustomSubheader story for the LogoCarousel component.
 * This example shows how to use the LogoCarousel component with a custom subheader.
 */
export const CustomSubheader: StoryObj<LogoCarouselProps> = {
  name: 'Custom Subheader',
  render: (args) => <LogoCarousel {...args} />,
  args: {
    logos: sampleLogos,
    subheader: 'Built with the best',
  },
};
