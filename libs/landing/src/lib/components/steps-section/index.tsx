import { FC } from 'react';
import { Button } from '@erisfy/shadcnui';
import { Steps, Step } from '@erisfy/shadcnui-blocks';

/**
 * Props for the StepsSection component.
 */
interface StepsSectionProps {
  /** The title of the section */
  title: string;
  /** An array of steps to display */
  steps: Step[];
  /** The text to display on the button */
  buttonText: string;
  /** The action to perform when the button is clicked */
  buttonAction: () => void;
  /** Test ID for the component */
  'data-testid'?: string;
}

/**
 * A section component that displays a title, a list of steps, and a button.
 *
 * The component helps visually illustrate a multi-step process with notes explaining each step.
 * Its primary use case is for landing pages that provide an overview of product functionality or getting started guides.
 */
const StepsSection: FC<StepsSectionProps> = ({
  title,
  steps,
  buttonText,
  buttonAction,
  'data-testid': dataTestId,
}) => {
  return (
    <section
      className="text-center py-20 bg-background text-primary w-full"
      data-testid={dataTestId}
    >
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <div className="text-left max-w-4xl mx-auto px-4 sm:px-0 pb-12">
        <Steps className="" steps={steps} />
      </div>
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

export { StepsSection };
