import React from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface HeroSectionProps {
  logoSrc: string;
  mainHeading: string;
  subHeading: string;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText: string;
  secondaryButtonAction: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  logoSrc,
  mainHeading,
  subHeading,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
}) => {
  return (
    <section className="text-center py-20">
      <img src={logoSrc} alt="Logo" className="mx-auto mb-6 w-32 h-32" />
      <h1 className="text-5xl font-bold mb-6">{mainHeading}</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{subHeading}</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          onClick={primaryButtonAction}
          className="bg-white text-blue-600 hover:bg-blue-100"
        >
          {primaryButtonText}
        </Button>
        <Button
          size="lg"
          onClick={secondaryButtonAction}
          className="bg-white text-blue-600 hover:bg-blue-100"
        >
          {secondaryButtonText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
