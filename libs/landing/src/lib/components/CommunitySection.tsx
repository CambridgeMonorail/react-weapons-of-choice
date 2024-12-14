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
 * 
 * @param {CommunitySectionProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
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
