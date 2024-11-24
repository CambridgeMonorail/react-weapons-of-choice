import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Link } from '@react-monorepo/shared';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">The Boilerplate That Speeds Up SPA Development</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Combine the power of Nx, Tailwind CSS, and Shadcn UI to kickstart your next React project.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" onClick={() => window.open('https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate', '_blank')} className="bg-white text-blue-600 hover:bg-blue-100">
            Get Started
          </Button>
          <Button size="lg" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-600 hover:bg-blue-100">
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-20 bg-white text-blue-600 w-full">
        <h2 className="text-4xl font-bold mb-6">Why React Weapons of Choice?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          React Weapons of Choice is an open-source boilerplate designed for developers who want a fast, intuitive setup for SPAs. Say goodbye to configuration headaches and hello to productivity!
        </p>
        <div className="flex justify-center space-x-4">
          <img src="/path/to/nx-icon.png" alt="Nx" className="w-16 h-16" />
          <img src="/path/to/tailwind-icon.png" alt="Tailwind CSS" className="w-16 h-16" />
          <img src="/path/to/shadcn-icon.png" alt="Shadcn UI" className="w-16 h-16" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="text-center py-20 w-full">
        <h2 className="text-4xl font-bold mb-6">What You’ll Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>🚀 Pre-configured Nx Workspace for Monorepo Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Manage your monorepo with ease using Nx.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🎨 Tailwind CSS Integration for Utility-First Styling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Style your components effortlessly with Tailwind CSS.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🖌️ Shadcn UI Components for Consistent Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Use Shadcn UI components for a consistent look and feel.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📂 Modular Architecture for Scalability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Build scalable applications with a modular architecture.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📑 Comprehensive Documentation and Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Access detailed documentation and examples to get started quickly.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="text-center py-20 bg-white text-blue-600 w-full">
        <h2 className="text-4xl font-bold mb-6">See It in Action</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Explore a live demo to see how React Weapons of Choice simplifies SPA development.
        </p>
        <Button size="lg" onClick={() => window.open('https://demo-url.com', '_blank')} className="bg-blue-600 text-white hover:bg-blue-700">
          View Demo
        </Button>
      </section>

      {/* Community and Collaboration Section */}
      <section className="text-center py-20 w-full">
        <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          React Weapons of Choice is built by developers, for developers. Contribute, discuss, and shape the future of the project.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" onClick={() => window.open('https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate', '_blank')} className="bg-blue-600 text-white hover:bg-blue-700">
            Contribute on GitHub
          </Button>
          <Button size="lg" onClick={() => window.open('https://discord.com/invite/your-discord-invite', '_blank')} className="bg-blue-600 text-white hover:bg-blue-700">
            Join the Discussion
          </Button>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <img src="/path/to/github-logo.png" alt="GitHub" className="w-16 h-16" />
          <img src="/path/to/discord-logo.png" alt="Discord" className="w-16 h-16" />
        </div>
      </section>

      {/* Get Started Section */}
      <section className="text-center py-20 bg-white text-blue-600 w-full">
        <h2 className="text-4xl font-bold mb-6">Get Started in Minutes</h2>
        <div className="text-left max-w-2xl mx-auto">
          <p className="text-xl mb-4"><strong>Step 1:</strong> Clone the repository.</p>
          <p className="text-xl mb-4"><strong>Step 2:</strong> Install dependencies.</p>
          <p className="text-xl mb-4"><strong>Step 3:</strong> Start the development server.</p>
        </div>
        <Button size="lg" onClick={() => window.open('https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate', '_blank')} className="bg-blue-600 text-white hover:bg-blue-700">
          Read the Documentation
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-blue-600 text-white w-full">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#" className="hover:underline">Home</Link>
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate" className="hover:underline">Documentation</Link>
          <Link href="https://discord.com/invite/your-discord-invite" className="hover:underline">Community</Link>
          <Link href="https://github.com/CambridgeMonorail/nx-react-tailwind-shadcn-boilerplate" className="hover:underline">GitHub</Link>
        </div>
        <div className="flex justify-center space-x-4">
          <img src="/path/to/github-logo.png" alt="GitHub" className="w-8 h-8" />
          <img src="/path/to/twitter-logo.png" alt="Twitter" className="w-8 h-8" />
          <img src="/path/to/discord-logo.png" alt="Discord" className="w-8 h-8" />
        </div>
        <p className="mt-4">&copy; 2023 React Weapons of Choice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
