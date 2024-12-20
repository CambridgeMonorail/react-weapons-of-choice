import type { Meta, StoryObj } from '@storybook/react';
import { Tagline } from '.';

const meta: Meta<typeof Tagline> = {
  title: 'Shadcnui Blocks/Tagline',
  component: Tagline,
  tags: ['autodocs'],
  argTypes: {
    text: {
      name: 'Text',
      control: 'text',
      description: 'The text of the tagline',
    },
    className: {
      name: 'Class Name',
      control: 'text',
      description: 'Additional Tailwind CSS classes for the tagline',
    },
    style: {
      name: 'Style',
      control: 'object',
      description: 'Inline styles for the tagline',
    },
    id: {
      name: 'ID',
      control: 'text',
      description: 'Unique identifier for the tagline',
    },
    dataTestId: {
      name: 'Data Test ID',
      control: 'text',
      description: 'Custom data-testid attribute for testing purposes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tagline>;

/**
 * Default story for the Tagline component.
 * 
 * This story demonstrates the default usage of the Tagline component
 * with sample text and default properties. It can be used as a reference
 * for how to integrate and customize the Tagline component in different
 * contexts.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <Tagline {...args} />,
  args: {
    text: 'Accelerate Development. Scale Seamlessly. Impress Instantly.',
    className: '',
    style: {},
    id: 'tagline',
    dataTestId: 'tagline',
  },
};
