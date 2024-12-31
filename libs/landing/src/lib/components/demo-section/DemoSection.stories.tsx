import type { Meta, StoryObj } from '@storybook/react';
import { DemoSection } from './DemoSection';

const meta: Meta<typeof DemoSection> = {
  title: 'Landing/Demo Section',
  component: DemoSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the demo section',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'The description of the demo section',
    },
    buttonText: {
      name: 'Button Text',
      control: 'text',
      description: 'The text to display on the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'clicked',
      description: 'The action to perform when the button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DemoSection>;

/**
 * Default story for the DemoSection component.
 * 
 * @example
 * <DemoSection
 *   title="Demo Section"
 *   description="This is the demo section content."
 *   buttonText="Click Me"
 *   buttonAction={() => alert('Button clicked!')}
 * />
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <DemoSection {...args} />,
  args: {
    title: 'Demo Section',
    description: 'This is the demo section content.',
    buttonText: 'Click Me',
    buttonAction: () => alert('Button clicked!'),
    'data-testid': 'demo-section',
  },
};

/**
 * Story for the DemoSection component with different props.
 * 
 * @example
 * <DemoSection
 *   title="Try Our Features"
 *   description="Explore the various features we offer."
 *   buttonText="Learn More"
 *   buttonAction={() => alert('Learn More clicked!')}
 * />
 */
export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <DemoSection {...args} />,
  args: {
    title: 'Try Our Features',
    description: 'Explore the various features we offer.',
    buttonText: 'Learn More',
    buttonAction: () => alert('Learn More clicked!'),
    'data-testid': 'demo-section',
  },
};

/**
 * Story for the DemoSection component with edge case props.
 * 
 * @example
 * <DemoSection
 *   title=""
 *   description=""
 *   buttonText=""
 *   buttonAction={() => alert('Button clicked!')}
 * />
 */
export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <DemoSection {...args} />,
  args: {
    title: '',
    description: '',
    buttonText: '',
    buttonAction: () => alert('Button clicked!'),
    'data-testid': 'demo-section',
  },
};
