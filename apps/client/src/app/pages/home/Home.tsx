import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@erisfy/shadcnui';

interface ComponentDefinition {
  name: string;
  description: string;
  path: string;
}

const componentDefinitions: ComponentDefinition[] = [
  {
    name: 'Buttons',
    description: 'Interactive elements that trigger actions when clicked.',
    path: '/buttons',
  },
  {
    name: 'Cards',
    description: 'Flexible and extensible content containers.',
    path: '/cards',
  },
  {
    name: 'Forms',
    description: 'Input components for collecting user data with validation.',
    path: '/forms',
  },
  {
    name: 'Dialogs',
    description:
      'Modal windows for displaying important information or gathering user input.',
    path: '/dialogs',
  },
  {
    name: 'Dropdowns',
    description: 'Expandable menus that reveal a list of options or actions.',
    path: '/dropdowns',
  },
  {
    name: 'Tabs',
    description:
      'Organize and allow navigation between groups of related content.',
    path: '/tabs',
  },
  {
    name: 'Toggles',
    description: 'Switches that allow users to turn options on or off.',
    path: '/toggles',
  },
  {
    name: 'Tooltips',
    description:
      'Small pop-up elements that provide additional information when hovering over an item.',
    path: '/tooltips',
  },
  {
    name: 'Charts',
    description: 'Visual representations of data using various chart types.',
    path: '/charts',
  },
  {
    name: 'About',
    description: 'Learn more about our mission, vision, and team.',
    path: '/about',
  },
  {
    name: 'Features',
    description: 'Discover the powerful features of our boilerplate.',
    path: '/features',
  },
  {
    name: 'Pricing',
    description: 'Choose the plan that best suits your needs.',
    path: '/pricing',
  },
  {
    name: 'FAQ',
    description: 'Find answers to the most frequently asked questions.',
    path: '/faq',
  },
  {
    name: 'Contact',
    description: 'Get in touch with us for inquiries and feedback.',
    path: '/contact',
  },
  {
    name: 'Blog',
    description: 'Stay updated with our latest blog posts.',
    path: '/blog',
  },
  {
    name: 'Terms and Conditions',
    description:
      'Read our terms of service, privacy policies, and disclaimers.',
    path: '/terms-and-conditions',
  },
];

export const Home: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Card className="bg-background text-foreground">
      <CardHeader>
        <CardTitle>shadcn Component Showcase</CardTitle>
        <CardDescription>
          Explore our collection of beautifully designed and fully functional
          components
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="space-y-4">
          {componentDefinitions.map((component) => (
            <div
              key={component.name}
              className="border-t pt-4 first:border-t-0 first:pt-0"
            >
              <dt className="font-semibold text-lg">
                <Link
                  to={`${baseUrl}${component.path}`}
                  className="text-primary-foreground hover:underline"
                  aria-label={`Navigate to ${component.name}`}
                >
                  {component.name}
                </Link>
              </dt>
              <dd className="mt-1">{component.description}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
};
