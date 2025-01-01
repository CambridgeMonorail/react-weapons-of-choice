/**
 * Storybook configuration for the AboutSection component.
 * 
 * The AboutSection component is a reusable section typically used in landing pages
 * to provide information about the organization, product, or service. It includes
 * a title, description, and an array of logos or icons to visually represent partners,
 * technologies, or other relevant entities.
 * 
 * Usage:
 * 
 * ```tsx
 * <AboutSection 
 *   title="About Us" 
 *   description="This is the about section content." 
 *   logos={[<Logo1 />, <Logo2 />]} 
 * />
 * ```
 * 
 * Props:
 * - `title`: The title of the about section.
 * - `description`: The description content of the about section.
 * - `logos`: An array of React elements representing logos to display in the about section.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AboutSection } from '.';


const meta: Meta<typeof AboutSection> = {
  title: 'Landing/About Section',
  component: AboutSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the about section',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'The description of the about section',
    },
    logos: {
      name: 'Logos',
      control: 'array',
      description:
        'An array of React elements representing logos to display in the about section',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

/**
 * Demonstrates the default appearance of the AboutSection component.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <AboutSection {...args} />,
  args: {
    title: 'About Us',
    description: 'This is the about section content.',
    logos: [
      <svg key="logo1" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      <svg key="logo2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    ],
  },
};

/**
 * Demonstrates the AboutSection component with different prop combinations.
 */
export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <AboutSection {...args} />,
  args: {
    title: 'Our Mission',
    description: 'We aim to provide the best services.',
    logos: [
      <svg key="logo3" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      <svg key="logo4" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    ],
  },
};

/**
 * Demonstrates the AboutSection component with edge cases, such as empty title, description, and logos.
 */
export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <AboutSection {...args} />,
  args: {
    title: '',
    description: '',
    logos: [],
  },
};
