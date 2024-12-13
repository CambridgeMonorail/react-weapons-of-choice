import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
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
    ],
    copyrightText: '© 2023 Your Company. All rights reserved.',
  },
};
