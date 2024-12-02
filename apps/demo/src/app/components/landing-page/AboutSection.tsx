import { ReactElement } from 'react';

interface AboutSectionProps {
  title: string;
  description: string;
  logos: ReactElement[];
}

export const AboutSection = ({ title, description, logos }: AboutSectionProps) => {
  return (
    <section data-testid="about-section" className="text-center py-20 px-5 bg-background text-primary w-full">
      <h2 data-testid="about-title" className="text-4xl font-bold mb-6">{title}</h2>
      <p data-testid="about-description" className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <div data-testid="about-logos" className="flex flex-wrap justify-center space-x-4 sm:space-x-2">
        {logos.map((logo, index) => (
          <div key={index} data-testid={`about-logo-${index}`} className="mb-4 sm:mb-2">{logo}</div>
        ))}
      </div>
    </section>
  );
};
