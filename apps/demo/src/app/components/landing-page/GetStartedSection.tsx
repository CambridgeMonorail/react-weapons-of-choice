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
      <div className="text-left max-w-2xl mx-auto">
        {steps.map((step) => (
          <p key={step.stepNumber} className="text-xl mb-4 flex items-center">
            <img src={`./icon-step-${step.stepNumber}.png`} alt={`Step ${step.stepNumber}`} className="w-6 h-6 mr-2" />
            <strong>Step {step.stepNumber}:</strong> {step.stepDescription}
          </p>
        ))}
      </div>
      <hr className="my-8 border-t border-muted" />
      <Button
        size="lg"
        onClick={buttonAction}
        className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary transform transition-transform hover:scale-105"
      >
        {buttonText}
      </Button>
    </section>
  );
};

export { GetStartedSection };
