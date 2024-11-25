import React from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface CommunitySectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ title, description, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          onClick={buttonAction}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;
