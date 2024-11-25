import React from 'react';
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

const GetStartedSection: React.FC<GetStartedSectionProps> = ({ title, steps, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 bg-white text-blue-600 w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <div className="text-left max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <p key={index} className="text-xl mb-4">
            <strong>Step {step.stepNumber}:</strong> {step.stepDescription}
          </p>
        ))}
      </div>
      <Button
        size="lg"
        onClick={buttonAction}
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        {buttonText}
      </Button>
    </section>
  );
};

export default GetStartedSection;
