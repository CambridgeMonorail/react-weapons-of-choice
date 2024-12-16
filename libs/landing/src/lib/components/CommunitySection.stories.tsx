import type { Meta, StoryObj } from '@storybook/react';
import { CommunitySection } from './CommunitySection';
import { action } from '@storybook/addon-actions'; // Still explicitly import the action utility

const meta: Meta<typeof CommunitySection> = {
  title: 'Landing/CommunitySection',
  component: CommunitySection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: { type: 'text' },
      description: 'The title of the community section',
    },
    description: {
      name: 'Description',
      control: { type: 'text' },
      description: 'The description of the community section',
    },
    buttonText: {
      name: 'Button Text',
      control: { type: 'text' },
      description: 'The text displayed on the button',
    },
    buttonAction: {
      name: 'Button Action',
      action: 'button-click', // Automatically handled by Storybook's actions
      description: 'The action performed when the button is clicked',
    },
    isDarkBackground: {
      name: 'Is Dark Background',
      control: { type: 'boolean' },
      description: 'Whether the background is dark',
    },
  },
};

export default meta; // Ensure proper default export for Storybook

type Story = StoryObj<typeof CommunitySection>;

/**
 * Default story for the CommunitySection component.
 * Demonstrates the component with default props.
 * 
 * **Effective CTA Button Text Guidelines:**
 * - **Action-Oriented Language:** Use strong verbs to clearly indicate the desired action.
 * - **Urgency:** Incorporate time-sensitive phrases to prompt immediate engagement.
 * - **Value Proposition:** Clearly communicate the benefit users will receive.
 * - **Clarity and Brevity:** Keep text concise and straightforward, ideally 2-5 words.
 * - **Personalization:** When appropriate, use first-person language to create a personal connection.
 * - **Visual Prominence:** Design buttons with contrasting colors and ample whitespace for visibility.
 * - **Alignment with User Intent:** Match the CTA with the user's stage in the buyer's journey.
 * - **Testing and Optimization:** Regularly perform A/B testing to determine the most effective CTA text.
 */
export const Default: Story = {
  name: 'Default',
  render: (args) => <CommunitySection {...args} />,
  args: {
    title: 'Join Our Community',
    description: 'Be a part of our amazing community and stay updated with the latest news.',
    buttonText: 'Start Your Journey', // Updated to be more engaging
    buttonAction: action('button-click'), // Correctly associate the action
    isDarkBackground: false,
  },
};

/**
 * Story for the CommunitySection component with different prop combinations.
 * Shows the component with a dark background and different text.
 * 
 * **Effective CTA Button Text Guidelines:**
 * - **Action-Oriented Language:** Use strong verbs to clearly indicate the desired action.
 * - **Urgency:** Incorporate time-sensitive phrases to prompt immediate engagement.
 * - **Value Proposition:** Clearly communicate the benefit users will receive.
 * - **Clarity and Brevity:** Keep text concise and straightforward, ideally 2-5 words.
 * - **Personalization:** When appropriate, use first-person language to create a personal connection.
 * - **Visual Prominence:** Design buttons with contrasting colors and ample whitespace for visibility.
 * - **Alignment with User Intent:** Match the CTA with the user's stage in the buyer's journey.
 * - **Testing and Optimization:** Regularly perform A/B testing to determine the most effective CTA text.
 */
export const WithDifferentProps: Story = {
  name: 'With Different Props',
  render: (args) => <CommunitySection {...args} />,
  args: {
    title: 'Connect with Us',
    description: 'Engage with our community and share your experiences.',
    buttonText: 'Join the Adventure', // Updated to be more engaging
    buttonAction: action('button-click'),
    isDarkBackground: true,
  },
};

/**
 * Story for the CommunitySection component with edge cases.
 * Demonstrates the component with empty strings for title, description, and buttonText.
 * 
 * **Effective CTA Button Text Guidelines:**
 * - **Action-Oriented Language:** Use strong verbs to clearly indicate the desired action.
 * - **Urgency:** Incorporate time-sensitive phrases to prompt immediate engagement.
 * - **Value Proposition:** Clearly communicate the benefit users will receive.
 * - **Clarity and Brevity:** Keep text concise and straightforward, ideally 2-5 words.
 * - **Personalization:** When appropriate, use first-person language to create a personal connection.
 * - **Visual Prominence:** Design buttons with contrasting colors and ample whitespace for visibility.
 * - **Alignment with User Intent:** Match the CTA with the user's stage in the buyer's journey.
 * - **Testing and Optimization:** Regularly perform A/B testing to determine the most effective CTA text.
 */
export const WithEdgeCases: Story = {
  name: 'With Edge Cases',
  render: (args) => <CommunitySection {...args} />,
  args: {
    title: '',
    description: '',
    buttonText: '',
    buttonAction: action('button-click'),
    isDarkBackground: false,
  },
};
