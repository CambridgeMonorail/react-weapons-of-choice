import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@rwoc/shadcnui';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

/**
 * FeaturesSection component displays a section with a title and a list of features.
 *
 * @param {string} title - The title of the features section.
 * @param {Feature[]} features - An array of feature objects, each containing a title and description.
 * @returns {JSX.Element} The rendered FeaturesSection component.
 */
const FeaturesSection: FC<FeaturesSectionProps> = ({ title, features }) => {
  return (
    <section id="features" className="text-center py-20 w-full px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-6 text-primary-foreground">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 shadow-md bg-background">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-4 text-primary">{feature.title}</CardTitle>
              <CardDescription className="text-foreground">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { FeaturesSection };
