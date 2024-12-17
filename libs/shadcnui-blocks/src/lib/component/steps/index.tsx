import React, { FC } from 'react';

export interface Step {
  title: string;
  description: string;
}

export interface StepsProps {
  heading?: string;
  subheading?: string;
  highlight?: string;
  steps: Step[];
  className?: string;
}

export const Steps: FC<StepsProps> = ({
  heading,
  subheading,
  highlight = "Works?",
  steps,
  className = "",
}) => {
  return (
    <div className={`max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between ${className}`}>
      {(heading || subheading) && (
        <div className="text-center">
          {heading && (
            <p className="mt-4 text-sm leading-7 text-muted font-regular">
              {heading}
            </p>
          )}
          {subheading && (
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-foreground">
              {subheading} <span className="text-primary">{highlight}</span>
            </h3>
          )}
        </div>
      )}

      <div className="mt-20">
        <ul className="md:grid md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={index} className="bg-background p-5 pb-10 text-center relative">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground border-4 border-background text-xl font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-foreground">{step.title}</h4>
                  <p className="mt-2 text-base leading-6 text-muted">
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
