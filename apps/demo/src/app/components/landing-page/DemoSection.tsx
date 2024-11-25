import React from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface DemoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, description, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 bg-white text-blue-600 w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
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

export default DemoSection;
