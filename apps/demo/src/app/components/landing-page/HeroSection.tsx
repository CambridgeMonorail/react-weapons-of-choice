import React from 'react';
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

export function HeroSection({
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
}: HeroSectionProps) {
  const isReversed = layout === 'right';

  return (
    <section
      className={`bg-primary-950 text-primary-foreground w-full ${className}`}
      data-testid="hero-section"
    >
      <div className="w-full container mx-auto flex flex-col lg:flex-row items-center gap-8 py-12 lg:py-24">
        {/* Content Section */}
        <div
          className={`flex-1 space-y-6 ${
            isReversed ? 'order-last lg:order-first' : ''
          }`}
          data-testid="hero-content"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-2xl text-gray-300 font-medium">{subtitle}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-400">{description}</p>
          )}
          {highlights && (
            <ul className="space-y-2 text-gray-400">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          <div className="flex gap-4">
            {ctaPrimary && (
              <Button
                onClick={ctaPrimary.onClick}
                variant={'secondary'}
                data-testid="cta-primary"
              >
                <a href={ctaPrimary.link || 'javascript:void(0);'}>
                  {ctaPrimary.text}
                </a>
              </Button>
            )}
            {ctaSecondary && (
              <Button
                onClick={ctaSecondary.onClick}
                variant={'outline'}
                data-testid="cta-secondary"
              >
                <a href={ctaSecondary.link || 'javascript:void(0);'}>
                  {ctaSecondary.text}
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Media Section */}
        <div className="flex-1" data-testid="hero-media">
          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
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
}
