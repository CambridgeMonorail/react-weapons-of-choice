import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const meta: Meta<typeof Footer> = {
  title: 'Landing/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    navigationLinks: {
      name: 'Navigation Links',
      control: 'object',
      description: 'Array of navigation links to be displayed in the footer',
    },
    socialMediaIcons: {
      name: 'Social Media Icons',
      control: 'object',
      description: 'Array of social media icons to be displayed in the footer',
    },
    copyrightText: {
      name: 'Copyright Text',
      control: 'text',
      description: 'Text to be displayed as the copyright information',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional class names to apply to the footer element',
    },
    backgroundColor: {
      name: 'Background Color',
      control: 'text',
      description: 'Background color for the footer',
    },
    textColor: {
      name: 'Text Color',
      control: 'text',
      description: 'Text color for the footer',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    navigationLinks: [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      { text: 'Contact', url: '/contact' },
    ],
    socialMediaIcons: [
      { icon: Facebook, url: 'https://facebook.com' },
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Instagram, url: 'https://instagram.com' },
      { icon: Linkedin, url: 'https://linkedin.com' },
    ],
    copyrightText: '© 2024 Your Company. All rights reserved.',
  },
};

export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <Footer {...args} />,
  args: {
    navigationLinks: [
      { text: 'Services', url: '/services' },
      { text: 'Blog', url: '/blog' },
      { text: 'Careers', url: '/careers' },
    ],
    socialMediaIcons: [
      { icon: Facebook, url: 'https://facebook.com' },
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Instagram, url: 'https://instagram.com' },
      { icon: Linkedin, url: 'https://linkedin.com' },
    ],
    copyrightText: '© 2024 Your Company. All rights reserved.',
    className: 'bg-dark text-light',
  },
};

export const WithCustomColors: Story = {
  name: 'With Custom Colors',
  render: (args) => <Footer {...args} />,
  args: {
    navigationLinks: [
      { text: 'Portfolio', url: '/portfolio' },
      { text: 'Testimonials', url: '/testimonials' },
      { text: 'FAQ', url: '/faq' },
    ],
    socialMediaIcons: [
      { icon: Facebook, url: 'https://facebook.com' },
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Instagram, url: 'https://instagram.com' },
      { icon: Linkedin, url: 'https://linkedin.com' },
    ],
    copyrightText: '© 2024 Your Company. All rights reserved.',
    backgroundColor: 'bg-secondary',
    textColor: 'text-secondary-foreground',
  },
};

export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <Footer {...args} />,
  args: {
    navigationLinks: [],
    socialMediaIcons: [],
    copyrightText: '',
    className: '',
  },
};
