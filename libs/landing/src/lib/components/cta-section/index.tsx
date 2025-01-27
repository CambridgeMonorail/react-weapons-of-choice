import { FC } from 'react';
import { Button } from '@erisfy/shadcnui';

/**
 * Possible color variants for the CTA section.
 * - 'light' gives a lighter background and primary text
 * - 'dark' gives a darker background and foreground text
 */
type CTASectionVariant = 'light' | 'dark';

interface CTASectionProps {
  /** The title to display in the section. */
  title: string;
  /** The description text to display in the section. */
  description: string;
  /** The text to display on the button. */
  buttonText: string;
  /** The action to perform when the button is clicked. */
  buttonAction: () => void;
  /**
   * The visual variant for the section's background and text.
   * Defaults to 'light'.
   */
  variant?: CTASectionVariant;
}

/**
 * A reusable CTA (Call-To-Action) section component with two variants:
 * 'light' and 'dark'. This helps break up a single-color landing page
 * into distinct sections.
 */
export const CTASection: FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonAction,
  variant = 'light',
}) => {
  // Shared base classes
  const baseSectionClasses = 'text-center py-20 w-full';
  const baseHeadingClasses = 'text-4xl font-bold mb-6';
  const baseParagraphClasses = 'text-xl mb-8 max-w-2xl mx-auto';
  
  // Default styles for the 'light' variant
  let sectionClasses = 'bg-background text-primary';
  let headingClasses = `${baseHeadingClasses} text-primary`;
  let paragraphClasses = `${baseParagraphClasses} text-primary`;
  let buttonClasses = 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground';

  // Override styles if using the 'dark' variant
  if (variant === 'dark') {
    sectionClasses = 'bg-primary text-primary-foreground';
    headingClasses = `${baseHeadingClasses} text-primary-foreground`;
    paragraphClasses = `${baseParagraphClasses} text-primary-foreground`;
    buttonClasses = 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary';
  }

  return (
    <section className={`${baseSectionClasses} ${sectionClasses}`}>
      <h2 className={headingClasses}>{title}</h2>
      <p className={paragraphClasses}>{description}</p>
      <Button
        size="lg"
        onClick={buttonAction}
        className={buttonClasses}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </section>
  );
};
