import React from 'react';

/**
 * LibraryPage component
 */
function LibraryPage() {
  return (
    <div className="font-sans bg-gray-100 p-8 min-h-screen">

      {/* HERO / HEADER */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          React Weapons of Choice
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A ready-to-use, curated component library powered by{' '}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            shadcn/ui
          </a>
          .
        </p>
      </header>

      {/* WHY USE THIS LIBRARY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Use This Library?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The <strong>react-weapons-of-choice</strong> project provides a battle-tested, 
            opinionated setup of the popular{' '}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              shadcn/ui
            </a>{' '}
            components. Our goal is to help you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Skip initial boilerplate setup.</li>
            <li>Access consistent, themeable components out of the box.</li>
            <li>Leverage extensive Storybook docs and usage samples.</li>
          </ul>
          <a
            href="https://github.com/CambridgeMonorail/react-weapons-of-choice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 w-fit"
          >
            View on GitHub
          </a>
        </div>

        {/* PLACEHOLDER FOR A SCREENSHOT OR IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-[350px] h-[200px] bg-gray-300 flex items-center justify-center rounded">
            <span className="text-gray-600">[Screenshot or Diagram Here]</span>
          </div>
        </div>
      </section>

      {/* STORYBOOK LINK */}
      <section className="bg-white p-6 rounded-md shadow-sm mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Explore the Components
        </h2>
        <p className="text-gray-700 mb-4">
          We’ve documented all components in Storybook so you can explore props, 
          look at usage examples, and quickly copy sample code. Click the link below 
          to check out our Storybook.
        </p>
        <a
          href="https://cambridgemonorail.github.io/react-weapons-of-choice/storybook/?path=/docs/introduction--documentation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Open Storybook
        </a>
      </section>

      {/* GETTING STARTED */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Getting Started
        </h2>
        <p className="text-gray-700 mb-2">
          To add <strong>react-weapons-of-choice</strong> to your project:
        </p>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded mb-6">
{`npm install react-weapons-of-choice

# or

yarn add react-weapons-of-choice
`}
        </pre>
        <p className="text-gray-700 mb-2">
          Then import and use the components you need. For example:
        </p>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded mb-6">
{`import { Button } from 'react-weapons-of-choice'

export default function MyExample() {
  return <Button variant="primary">Click Me!</Button>
}
`}
        </pre>
      </section>

      {/* ADDITIONAL RESOURCES */}
      <section className="bg-white p-6 rounded-md shadow-sm mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Additional Resources
        </h2>
        <ul className="list-none text-gray-700 space-y-2">
          <li>
            <a
              href="https://github.com/CambridgeMonorail/react-weapons-of-choice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://cambridgemonorail.github.io/react-weapons-of-choice/storybook/?path=/docs/introduction--documentation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Storybook Documentation
            </a>
          </li>
          <li>
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              shadcn/ui
            </a>
          </li>
        </ul>
      </section>

      {/* CTA / FOOTER */}
      <section className="text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          Ready to get started?
        </h3>
        <p className="text-gray-600 mb-4">
          Jump into our docs and unleash your React weapons of choice!
        </p>
        <a
          href="https://cambridgemonorail.github.io/react-weapons-of-choice/storybook/?path=/docs/introduction--documentation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Documentation
        </a>
      </section>
    </div>
  );
}

export default LibraryPage;
