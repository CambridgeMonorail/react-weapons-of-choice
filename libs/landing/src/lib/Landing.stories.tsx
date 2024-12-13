import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Landing } from './landing';

const meta: Meta<typeof Landing> = {
  title: 'Components/Landing',
  component: Landing,
};

export default meta;

type Story = StoryObj<typeof Landing>;

export const Default: Story = {};
