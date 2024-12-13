import { FC } from 'react';
import { Button } from '@rwoc/shadcnui/components/ui/button';

/**
 * Props for the DemoSection component.
 */
interface DemoSectionProps {
  /** The title to display in the section. */
  title: string;
  /** The description text to display in the section. */
  description: string;
  /** The text to display on the button. */
  buttonText: string;
  /** The action to perform when the button is clicked. */
  buttonAction: () => void;
}

/**
 * A section component that displays a title, description, and a button.
 * 
 * @param {DemoSectionProps} props - The props for the component.
 * @returns {JSX.Element} The rendered section component.
 */
export const DemoSection: FC<DemoSectionProps> = ({ title, description, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 bg-background text-primary w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <Button
        size="lg"
        onClick={buttonAction}
        className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </section>
  );
};
