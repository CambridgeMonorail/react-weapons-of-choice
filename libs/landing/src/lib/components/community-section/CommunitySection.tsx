import { FC } from 'react';
import { Button } from '@rwoc/shadcnui';

/**
 * Props for the CommunitySection component.
 */
interface CommunitySectionProps {
  /** The title to display in the section */
  title: string;
  /** The description to display in the section */
  description: string;
  /** The text to display on the button */
  buttonText: string;
  /** The action to perform when the button is clicked */
  buttonAction: () => void;
  /** Optional flag to indicate if the background is dark */
  isDarkBackground?: boolean;
}

/**
 * A section component for displaying community-related information.
 * This component is typically used on landing pages to encourage users to join or engage with a community.
 * It includes a title, description, and a call-to-action button.
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
const CommunitySection: FC<CommunitySectionProps> = ({ title, description, buttonText, buttonAction, isDarkBackground }) => {
  return (
    <section className={`text-center py-20 w-full ${isDarkBackground ? 'bg-dark' : 'bg-light'}`}>
      <h2 className={`text-4xl font-bold mb-6 ${isDarkBackground ? 'text-primary-foreground' : 'text-primary'}`}>{title}</h2>
      <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkBackground ? 'text-primary-foreground' : 'text-primary'}`}>{description}</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          onClick={buttonAction}
          className="bg-background text-foreground hover:bg-primary/90 hover:text-background"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export { CommunitySection };
