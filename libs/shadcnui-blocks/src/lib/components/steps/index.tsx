import React, { FC } from 'react';

/**
 * Represents a single step in the Steps component.
 */
export interface Step {
  title: string;
  description: string;
}

/**
 * Props for the Steps component.
 */
export interface StepsProps {
  /**
   * The heading of the steps section.
   */
  heading?: string;
  /**
   * The subheading of the steps section.
   */
  subheading?: string;
  /**
   * The highlighted text in the subheading.
   */
  highlight?: string;
  /**
   * Array of steps to display.
   */
  steps: Step[];
  /**
   * Additional Tailwind CSS classes for the steps component.
   */
  className?: string;
  /**
   * Additional Tailwind CSS classes for the highlighted text.
   */
  highlightClassName?: string;
}

/**
 * Steps component to display a series of steps with titles and descriptions.
 * Useful for guiding users through a process or workflow.
 */
export const Steps: FC<StepsProps> = ({
  heading,
  subheading,
  highlight,
  steps,
  className = '',
  highlightClassName = 'text-primary',
}) => {
  const renderSubheading = () => {
    if (!subheading || !highlight) return subheading;

    const parts = subheading.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className={highlightClassName}>
          {part}
        </span>
      ) : (
        <span key={index} className="text-foreground">
          {part}
        </span>
      )
    );
  };

  return (
    <div
      className={`max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between ${className}`}
    >
      {(heading || subheading) && (
        <div className="text-center">
          {heading && (
            <p className="mt-4 text-sm leading-7 text-foreground font-regular">
              {heading}
            </p>
          )}
          {subheading && (
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-foreground">
              {renderSubheading()}
            </h3>
          )}
        </div>
      )}

      <div className="mt-20">
        <ul className="md:grid md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li
              key={index}
              className="bg-popover p-5 pb-10 text-center relative rounded-[var(--radius)]"
            >
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground border-4 border-background text-xl font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-foreground">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-base leading-6 text-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
