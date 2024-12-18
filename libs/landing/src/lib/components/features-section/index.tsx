import { FC, ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@rwoc/shadcnui';

interface Feature {
  title: string;
  description: string;
  icon?: ReactNode; // Add the icon property
  className?: string; // Add the className property
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
  className?: string;
  'data-testid'?: string;
}

/**
 * FeaturesSection component displays a section with a title and a list of features.
 */
const FeaturesSection: FC<FeaturesSectionProps> = ({ title, features, className, 'data-testid': dataTestId }) => {
  return (
    <section id="features" className={`text-center py-20 w-full px-4 md:px-8 lg:px-16 ${className}`} data-testid={dataTestId}>
      <h2 className="text-4xl font-bold mb-6 text-primary-foreground">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className={`p-6 shadow-md bg-background ${feature.className}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-4 text-primary flex items-center">
                {feature.icon && <div className="mr-2 flex-shrink-0">{feature.icon}</div>} {/* Render the icon if it exists */}
                <span>{feature.title}</span>
              </CardTitle>
              <CardDescription className="text-foreground">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { FeaturesSection };
