import { ReactElement } from 'react';

interface AboutSectionProps {
  title: string;
  description: string;
  logos: ReactElement[];
}

export const AboutSection = ({ title, description, logos }: AboutSectionProps) => {
  return (
    <section className="text-center py-20 px-5 bg-background text-primary w-full">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="flex justify-center space-x-4">
        {logos.map((logo, index) => (
          <div key={index}>{logo}</div>
        ))}
      </div>
    </section>
  );
};
