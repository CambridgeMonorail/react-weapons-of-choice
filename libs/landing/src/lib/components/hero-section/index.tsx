import { FC, useEffect } from 'react';
import { Button } from '@erisfy/shadcnui'; // Import shadcn Button component

/**
 * Possible color variants for the HeroSection.
 * - 'light' gives a lighter background and primary text
 * - 'dark' gives a darker background and foreground text
 */
type HeroSectionVariant = 'light' | 'dark';

/**
 * Props for the HeroSection component.
 */
interface HeroSectionProps {
  /** The main title of the hero section. */
  title: string;
  /** An optional subtitle for the hero section. */
  subtitle?: string;
  /** An optional description for the hero section. */
  description?: string;
  /** An optional list of highlights to display in the hero section. */
  highlights?: string[];
  /** The URL of the image to display in the hero section. */
  image: string;
  /** The alt text for the image. */
  imageAlt: string;
  /** Optional primary call-to-action button configuration. */
  ctaPrimary?: { text: string; link?: string; onClick?: () => void };
  /** Optional secondary call-to-action button configuration. */
  ctaSecondary?: { text: string; link?: string; onClick?: () => void };
  /** Layout option for the hero section. */
  layout?: 'left' | 'right' | 'stacked';
  /** Additional CSS classes to apply to the hero section. */
  className?: string;
  /** The visual variant for the section's background and text. Defaults to 'light'. */
  variant?: HeroSectionVariant;
}

/**
 * A HeroSection component that displays a title, subtitle, description, highlights, and an image.
 * It also includes optional primary and secondary call-to-action buttons.
 */
export const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  highlights,
  image,
  imageAlt,
  ctaPrimary,
  ctaSecondary,
  layout = 'left',
  className = '',
  variant = 'light',
}) => {
  const isReversed = layout === 'right';

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = image;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [image]);

  // Default styles for the 'light' variant
  let sectionClasses = 'bg-background text-primary';
  let titleClasses = 'text-primary';
  let subtitleClasses = 'text-foreground/90';
  let descriptionClasses = 'text-foreground/90';
  let highlightIconClasses = 'text-accent';
  let buttonPrimaryClasses = 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground';
  let buttonSecondaryClasses = 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary';

  // Override styles if using the 'dark' variant
  if (variant === 'dark') {
    sectionClasses = 'bg-primary text-primary-foreground';
    titleClasses = 'text-primary-foreground';
    subtitleClasses = 'text-primary-foreground';
    descriptionClasses = 'text-primary-foreground';
    highlightIconClasses = 'text-primary-foreground';
    buttonPrimaryClasses = 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary';
    buttonSecondaryClasses = 'bg-secondary text-secondary-foreground/90 hover:bg-secondary/90 hover:text-secondary-foreground';
  }

  return (
    <section
      className={`${sectionClasses} w-full ${className}`}
      data-testid="hero-section"
    >
      <div className="w-full container mx-auto flex flex-col-reverse md:flex-col lg:flex-row items-center gap-8 py-12 lg:py-24 px-4 sm:px-6 md:px-12">
        {/* Content Section */}
        <div
          className={`flex-1 space-y-6 text-center lg:text-left ${
            isReversed ? 'order-last lg:order-first' : ''
          }`}
          data-testid="hero-content"
        >
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${titleClasses}`}
            data-testid="hero-title"
          >
            {title}
          </h1>
          {subtitle && (
            <h2
              className={`text-xl sm:text-2xl font-medium leading-snug ${subtitleClasses}`}
              data-testid="hero-subtitle"
            >
              {subtitle}
            </h2>
          )}
          {description && (
            <p
              className={`text-base sm:text-lg leading-relaxed ${descriptionClasses}`}
              data-testid="hero-description"
            >
              {description}
            </p>
          )}
          {highlights && (
            <ul
              className="space-y-2"
              data-testid="hero-highlights"
            >
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 justify-center lg:justify-start"
                  data-testid={`hero-highlight-${index}`}
                >
                  <CheckIcon className={`h-5 w-5 ${highlightIconClasses}`} />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {ctaPrimary && (
              <Button
                onClick={
                  ctaPrimary.onClick || (() => window.location.href = ctaPrimary.link || '#')
                }
                className={buttonPrimaryClasses}
                data-testid="cta-primary"
              >
                {ctaPrimary.text}
              </Button>
            )}
            {ctaSecondary && (
              <Button
                onClick={
                  ctaSecondary.onClick || (() => window.location.href = ctaSecondary.link || '#')
                }
                className={buttonSecondaryClasses}
                data-testid="cta-secondary"
              >
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        </div>

        {/* Media Section */}
        <div
          className="flex-1 flex justify-center items-center"
          data-testid="hero-media"
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-3/4 sm:w-2/3 lg:w-full max-w-md rounded-lg object-cover"
            width="448" 
            height="448"
            data-testid="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

/**
 * A CheckIcon component that renders an SVG check icon.
 */
const CheckIcon: FC<React.ComponentProps<'svg'>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
