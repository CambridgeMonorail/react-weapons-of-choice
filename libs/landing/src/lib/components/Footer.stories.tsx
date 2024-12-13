import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from './Footer';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};
