import { FC } from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface Step {
  stepNumber: number;
  stepDescription: string;
}

interface GetStartedSectionProps {
  title: string;
  steps: Step[];
  buttonText: string;
  buttonAction: () => void;
}

const GetStartedSection: FC<GetStartedSectionProps> = ({ title, steps, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 bg-background text-primary w-full">
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
      >
        {buttonText}
      </Button>
    </section>
  );
};

export { GetStartedSection };
