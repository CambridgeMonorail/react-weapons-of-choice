import { FC } from 'react';
import { Button } from '@rwoc/shadcnui';

interface Step {
  stepNumber: number;
  stepDescription: string;
}

/**
 * Props for the GetStartedSection component.
 */
interface GetStartedSectionProps {
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
 * @param {GetStartedSectionProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const GetStartedSection: FC<GetStartedSectionProps> = ({ title, steps, buttonText, buttonAction, 'data-testid': dataTestId }) => {
  return (
    <section className="text-center py-20 bg-background text-primary w-full" data-testid={dataTestId}>
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <div className="text-left max-w-2xl mx-auto px-4 sm:px-0">
        {steps.map((step) => (
          <p key={step.stepNumber} className="text-xl mb-4">
            <strong>Step {step.stepNumber}:</strong> {step.stepDescription}
          </p>
        ))}
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

export { GetStartedSection };
