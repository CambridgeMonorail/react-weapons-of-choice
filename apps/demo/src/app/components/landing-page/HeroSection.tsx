import { FC } from 'react';
import { Button } from '@rwoc/shared'; // Import shadcn Button component

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  image: string;
  imageAlt: string;
  ctaPrimary?: { text: string; link?: string; onClick?: () => void };
  ctaSecondary?: { text: string; link?: string; onClick?: () => void };
  layout?: 'left' | 'right' | 'stacked';
  className?: string;
}

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
}) => {
  const isReversed = layout === 'right';

  return (
    <section
      className={`bg-primary text-primary-foreground w-full ${className}`}
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            data-testid="hero-title"
          >
            {title}
          </h1>
          {subtitle && (
            <h2
              className="text-xl sm:text-2xl text-muted font-medium leading-snug"
              data-testid="hero-subtitle"
            >
              {subtitle}
            </h2>
          )}
          {description && (
            <p
              className="text-base sm:text-lg text-muted leading-relaxed"
              data-testid="hero-description"
            >
              {description}
            </p>
          )}
          {highlights && (
            <ul
              className="space-y-2 text-muted"
              data-testid="hero-highlights"
            >
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 justify-center lg:justify-start"
                  data-testid={`hero-highlight-${index}`}
                >
                  <CheckIcon className="h-5 w-5 text-accent" />
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
                variant="secondary"
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
                variant="outline"
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
            data-testid="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

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
