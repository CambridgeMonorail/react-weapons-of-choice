import { FC } from 'react';
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

const HeroSection: FC<HeroSectionProps> = ({
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
      <h1 className="text-5xl font-bold mb-6 text-primary-foreground">{mainHeading}</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground">{subHeading}</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          onClick={primaryButtonAction}
          className="bg-background text-foreground hover:bg-primary/90 hover:text-background transform transition-transform hover:scale-105"
        >
          {primaryButtonText}
          <span className="ml-2">→</span>
        </Button>
        <Button
          size="lg"
          onClick={secondaryButtonAction}
          className="bg-background text-foreground hover:bg-primary/90 hover:text-background"
        >
          {secondaryButtonText}
        </Button>
      </div>
    </section>
  );
};

export { HeroSection };
