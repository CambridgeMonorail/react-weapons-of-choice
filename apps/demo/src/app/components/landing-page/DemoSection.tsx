import React, { FC } from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface DemoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

export const DemoSection: FC<DemoSectionProps> = ({ title, description, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 bg-background text-primary w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="mb-8">
        <img src="./demo-thumbnail.png" alt="Demo Thumbnail" className="mx-auto w-full max-w-md rounded-md shadow-md" />
      </div>
      <Button
        size="lg"
        onClick={buttonAction}
        className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
      >
        {buttonText}
      </Button>
      <p className="text-sm mt-2 text-muted">See how to build a scalable SPA in minutes</p>
    </section>
  );
};
