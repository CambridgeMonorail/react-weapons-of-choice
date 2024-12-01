import React, { useState, useEffect } from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface DemoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

export const DemoSection = ({ title, description, buttonText, buttonAction }: DemoSectionProps) => {
  return (
    <section className="text-center py-20 bg-background text-primary w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
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
