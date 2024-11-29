import { ReactElement } from 'react';

interface AboutSectionProps {
  title: string;
  description: string;
  logos: ReactElement[];
}

export const AboutSection = ({ title, description, logos }: AboutSectionProps) => {
  return (
    <section className="text-center py-16 px-5 bg-background text-primary w-full">
      <h2 className="text-5xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="flex justify-center space-x-6">
        {logos.map((logo, index) => (
          <div key={index} className="hover:scale-105 transition-transform">{logo}</div>
        ))}
      </div>
    </section>
  );
};
