import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@react-monorepo/shared';
import { Github, Twitter } from 'lucide-react';

const ShadcnLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    />
  </svg>
);

const TailwindLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
      fill="currentColor"
    />
  </svg>
);

const NxLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Nx</title>
    <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"></path>
  </svg>
);

const PnpmLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
      fill="currentColor"
    />
  </svg>
);

const ReactLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933z"
      fill="currentColor"
    />
  </svg>
);

const LandingPage = () => {
  const handleScrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          The Boilerplate That Speeds Up SPA Development
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Combine the power of Nx, Tailwind CSS, and Shadcn UI to kickstart your
          next React project.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                'https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate',
                '_blank'
              )
            }
            className="bg-white text-blue-600 hover:bg-blue-100"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            onClick={handleScrollToFeatures}
            className="bg-white text-blue-600 hover:bg-blue-100"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-20 bg-white text-blue-600 w-full">
        <h2 className="text-4xl font-bold mb-6">
          Why React Weapons of Choice?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          React Weapons of Choice is an open-source boilerplate designed for
          developers who want a fast, intuitive setup for SPAs. Say goodbye to
          configuration headaches and hello to productivity!
        </p>
        <div className="flex justify-center space-x-4">
          <NxLogo className="w-16 h-16" />
          <TailwindLogo className="w-16 h-16" />
          <ShadcnLogo className="w-16 h-16" />
          <PnpmLogo className="w-16 h-16" />
          <ReactLogo className="w-16 h-16" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="text-center py-20 w-full px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-4xl font-bold mb-6">What You’ll Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                🚀 Pre-configured Nx Workspace for Monorepo Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Manage your monorepo with ease using Nx.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                🎨 Tailwind CSS Integration for Utility-First Styling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Style your components effortlessly with Tailwind CSS.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                🖌️ Shadcn UI Components for Consistent Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Use Shadcn UI components for a consistent look and feel.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📂 Modular Architecture for Scalability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Build scalable applications with a modular architecture.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📑 Comprehensive Documentation and Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access detailed documentation and examples to get started
                quickly.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="text-center py-20 bg-white text-blue-600 w-full">
        <h2 className="text-4xl font-bold mb-6">See It in Action</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Explore a live demo to see how React Weapons of Choice simplifies SPA
          development.
        </p>
        <Button
          size="lg"
          onClick={() => window.open('https://demo-url.com', '_blank')}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          View Demo
        </Button>
      </section>

      {/* Community and Collaboration Section */}
      <section className="text-center py-20 w-full">
        <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          React Weapons of Choice is built by developers, for developers.
          Contribute, discuss, and shape the future of the project.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                'https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate',
                '_blank'
              )
            }
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Contribute on GitHub
          </Button>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <Github className="w-16 h-16" />
        </div>
      </section>

      {/* Get Started Section */}
      <section className="text-center py-20 bg-white text-blue-600 w-full">
        <h2 className="text-4xl font-bold mb-6">Get Started in Minutes</h2>
        <div className="text-left max-w-2xl mx-auto">
          <p className="text-xl mb-4">
            <strong>Step 1:</strong> Clone the repository.
          </p>
          <p className="text-xl mb-4">
            <strong>Step 2:</strong> Install dependencies.
          </p>
          <p className="text-xl mb-4">
            <strong>Step 3:</strong> Start the development server.
          </p>
        </div>
        <Button
          size="lg"
          onClick={() =>
            window.open(
              'https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate',
              '_blank'
            )
          }
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Read the Documentation
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-blue-600 text-white w-full">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a
            href="https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate"
            className="hover:underline"
          >
            Documentation
          </a>
          <a
            href="https://discord.com/invite/your-discord-invite"
            className="hover:underline"
          >
            Community
          </a>
          <a
            href="https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <Github className="w-8 h-8" />
          <Twitter className="w-8 h-8" />
        </div>
        <p className="mt-4">
          &copy; 2023 React Weapons of Choice. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
