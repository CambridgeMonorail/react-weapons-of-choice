import { LogoCarousel } from '@erisfy/shadcnui-blocks';
import { ReactElement } from 'react';

/**
 * Props for the AboutSection component.
 */
interface AboutSectionProps {
  /** 
   * The title to display in the about section. 
   * This should be a short, descriptive heading that summarizes the content of the section.
   */
  title: string;
  
  /** 
   * The description to display in the about section. 
   * This should provide more detailed information about the organization, product, or service.
   */
  description: string;
  
  /** 
   * An array of React elements representing logos to display in the about section. 
   * These logos can represent partners, technologies, or other relevant entities.
   */
  logos: ReactElement[];

  /**
   * Optional header for the logo carousel.
   */
  header?: string;

  /**
   * Optional subheader for the logo carousel.
   */
  subheader?: string;
}

/**
 * A component that renders an about section with a title, description, and logos.
 * 
 * This component is typically used in landing pages to provide visitors with information
 * about the organization, product, or service. It helps to build credibility and trust
 * by showcasing key details and visual elements such as logos of partners or technologies.
 */
export const AboutSection = ({ title, description, logos, header, subheader }: AboutSectionProps): ReactElement => {
  return (
    <section data-testid="about-section" className="text-center py-20 px-5 bg-background text-primary w-full">
      <h2 data-testid="about-title" className="text-4xl font-bold mb-6">{title}</h2>
      <p data-testid="about-description" className="text-xl mb-8 max-w-2xl mx-auto text-center">{description}</p>
      {logos.length > 0 ? (
        <LogoCarousel
          logos={logos}
          header={header}
          subheader={subheader}
        />
      ) : (
        <div data-testid="about-logos" className="flex flex-wrap justify-center space-x-4 sm:space-x-2">
          {logos.map((logo, index) => (
            <div key={index} data-testid={`about-logo-${index}`} className="mb-4 sm:mb-2">{logo}</div>
          ))}
        </div>
      )}
    </section>
  );
};
