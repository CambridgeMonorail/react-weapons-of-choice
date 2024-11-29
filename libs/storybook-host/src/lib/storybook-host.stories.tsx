import type { Meta, StoryObj } from '@storybook/react';
import { StorybookHost } from './storybook-host';

const meta: Meta<typeof StorybookHost> = {
  component: StorybookHost,
  title: 'StorybookHost',
};
export default meta;
type Story = StoryObj<typeof StorybookHost>;

export const Primary = {
  args: {},
};
