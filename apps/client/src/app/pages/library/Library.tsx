import { Button } from '@rwoc/shadcnui';
import imageSrc from '../../../assets/images/shad-samples.svg';

/**
 * LibraryPage component
 */
export function LibraryPage() {
  const handleGitHubClick = () => {
    window.open(
      'https://github.com/CambridgeMonorail/react-weapons-of-choice',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleStorybookClick = () => {
    window.open(
      'https://cambridgemonorail.github.io/react-weapons-of-choice/storybook/?path=/docs/introduction--documentation',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleShadcnClick = () => {
    window.open('https://ui.shadcn.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="font-sans bg-background p-8 min-h-screen">
      {/* HERO / HEADER */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-text-foreground">
          React Weapons of Choice
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          Supercharge your React projects with a curated component library
          powered by{' '}
          <button
            onClick={handleShadcnClick}
            className="text-secondary-contrast  hover:underline"
          >
            shadcn/ui
          </button>
          . Streamlined, accessible, and endlessly customizable.
        </p>
      </header>

      {/* WHY USE THIS LIBRARY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-text-foreground mb-4">
            Why Use This Library?
          </h2>
          <p className="mb-4 leading-relaxed">
            The <strong>react-weapons-of-choice</strong> project gives you a
            jumpstart by integrating best-in-class{' '}
            <button
              onClick={handleShadcnClick}
              className="text-secondary-contrast  hover:underline"
            >
              shadcn/ui
            </button>{' '}
            components, so you can focus on building great apps instead of
            reinventing the wheel.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Save hours of setup with ready-to-use boilerplate.</li>
            <li>Enjoy consistent, themeable, accessible components.</li>
            <li>Leverage detailed Storybook examples for every component.</li>
            <li>Maintain full control with code you can customize.</li>
          </ul>
          <Button onClick={handleGitHubClick} variant={'default'}>
            View on GitHub
          </Button>
        </div>

        {/* SCREENSHOT / IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <div className="relative w-[350px] h-[200px] bg-muted flex items-center justify-center rounded shadow-lg overflow-hidden">
            <img src={imageSrc} alt="Shadcn/UI Preview" />
            <span className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-sm">
              Component Preview
            </span>
          </div>
        </div>
      </section>

      {/* STORYBOOK LINK */}
      <section className="bg-bg-background p-6 rounded-md shadow-xs mb-12">
        <h2 className="text-2xl font-semibold text-text-foreground mb-4">
          Explore the Components
        </h2>
        <p className="mb-4">
          Dive into our Storybook to see detailed documentation, explore props,
          and discover real-world usage examples. Quickly copy sample code to
          integrate components into your projects.
        </p>
        <Button onClick={handleStorybookClick} variant={'default'}>
          Open Storybook
        </Button>
      </section>

      {/* ADDITIONAL RESOURCES */}
      <section className="bg-bg-background p-6 rounded-md shadow-xs mb-12">
        <h2 className="text-2xl font-semibold text-text-foreground mb-4">
          Additional Resources
        </h2>
        <p className="mb-4">
          Discover more about the project and the ecosystem that powers it:
        </p>
        <ul className="list-none space-y-2">
          <li>
            <Button onClick={handleGitHubClick} variant={'link'}>
              GitHub Repository
            </Button>
          </li>
          <li>
            <Button onClick={handleStorybookClick} variant={'link'}>
              Storybook Documentation
            </Button>
          </li>
          <li>
            <Button onClick={handleShadcnClick} variant={'link'}>
              Learn more about shadcn/ui
            </Button>
          </li>
        </ul>
      </section>

      {/* CTA / FOOTER */}
      <section className="text-center">
        <h3 className="text-xl font-medium text-text-foreground mb-2">
          Ready to start building?
        </h3>
        <p className="mb-4">
          Explore our resources and bring your ideas to life with a strong
          foundation.
        </p>
        <Button onClick={handleStorybookClick} variant={'default'}>
          Get Started
        </Button>
      </section>
    </div>
  );
}
