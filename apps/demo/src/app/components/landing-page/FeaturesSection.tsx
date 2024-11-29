import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@rwoc/shared';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ title, features }) => {
  return (
    <section id="features" className="text-center py-20 w-full px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-6 text-primary-foreground">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 rounded-lg shadow-md bg-background hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-4 text-primary">{feature.title}</CardTitle>
              <CardDescription className="text-foreground">{feature.description}</CardDescription>
            </CardHeader>
            <img src={`./feature-${index + 1}.png`} alt={`Feature ${index + 1}`} className="w-full h-auto mt-4 rounded-md" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export { FeaturesSection };
