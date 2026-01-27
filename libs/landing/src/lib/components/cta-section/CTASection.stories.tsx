import type { Meta, StoryObj } from '@storybook/react-vite';

import { action } from 'storybook/actions';
import { CTASection } from '.';

const meta: Meta<typeof CTASection> = {
  title: 'Landing/CTASection',
  component: CTASection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'The title of the CTA section',
    },
    description: {
      name: 'Description',
      control: 'text',
      description: 'The description of the CTA section',
    },
    buttonText: {
      name: 'Button Text',
      control: 'text',
      description: 'The text displayed on the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'button-click',
      description: 'The action performed when the button is clicked',
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['light', 'dark'],
      description: "The visual variant for the section's background and text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CTASection>;

/**
 * Default story for the CTASection component.
 * Demonstrates the component with default props.
 *
 * Effective CTA Button Text Guidelines:
 *
 * - **Action-Oriented Language**: Use strong verbs to clearly indicate the desired action.
 * - **Urgency**: Incorporate time-sensitive phrases to prompt immediate engagement.
 * - **Value Proposition**: Clearly communicate the benefit users will receive.
 * - **Clarity and Brevity**: Keep text concise and straightforward, ideally 2-5 words.
 * - **Personalization**: When appropriate, use first-person language to create a personal connection.
 * - **Visual Prominence**: Design buttons with contrasting colors and ample whitespace for visibility.
 * - **Alignment with User Intent**: Match the CTA with the user's stage in the buyer's journey.
 * - **Testing and Optimization**: Regularly perform A/B testing to determine the most effective CTA text.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <CTASection {...args} />,
  args: {
    title: 'Experience It Yourself',
    description:
      'Try our live demo to see how effortlessly you can set up and scale your React project with React Weapons of Choice.',
    buttonText: 'Try the Demo',
    buttonAction: action('button-click'),
    variant: 'light',
  },
};

/**
 * Story for the CTASection component with different prop combinations.
 * Shows the component with a dark background and different text.
 *
 * Effective CTA Button Text Guidelines:
 *
 * - **Action-Oriented Language**: Use strong verbs to clearly indicate the desired action.
 * - **Urgency**: Incorporate time-sensitive phrases to prompt immediate engagement.
 * - **Value Proposition**: Clearly communicate the benefit users will receive.
 * - **Clarity and Brevity**: Keep text concise and straightforward, ideally 2-5 words.
 * - **Personalization**: When appropriate, use first-person language to create a personal connection.
 * - **Visual Prominence**: Design buttons with contrasting colors and ample whitespace for visibility.
 * - **Alignment with User Intent**: Match the CTA with the user's stage in the buyer's journey.
 * - **Testing and Optimization**: Regularly perform A/B testing to determine the most effective CTA text.
 */
export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <CTASection {...args} />,
  args: {
    title: 'Join the Community',
    description:
      'React Weapons of Choice is built by developers, for developers. Contribute, discuss, and shape the future of the project.',
    buttonText: 'Contribute on GitHub',
    buttonAction: action('button-click'),
    variant: 'dark',
  },
};

/**
 * Story for the CTASection component with edge cases.
 * Demonstrates the component with empty strings for title, description, and buttonText.
 *
 * Effective CTA Button Text Guidelines:
 *
 * - **Action-Oriented Language**: Use strong verbs to clearly indicate the desired action.
 * - **Urgency**: Incorporate time-sensitive phrases to prompt immediate engagement.
 * - **Value Proposition**: Clearly communicate the benefit users will receive.
 * - **Clarity and Brevity**: Keep text concise and straightforward, ideally 2-5 words.
 * - **Personalization**: When appropriate, use first-person language to create a personal connection.
 * - **Visual Prominence**: Design buttons with contrasting colors and ample whitespace for visibility.
 * - **Alignment with User Intent**: Match the CTA with the user's stage in the buyer's journey.
 * - **Testing and Optimization**: Regularly perform A/B testing to determine the most effective CTA text.
 */
export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <CTASection {...args} />,
  args: {
    title: '',
    description: '',
    buttonText: '',
    buttonAction: action('button-click'),
    variant: 'light',
  },
};
