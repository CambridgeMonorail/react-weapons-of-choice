import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Github,
  Twitter,
  Rocket,
  Palette,
  Paintbrush,
  BarChart,
  ChartLine,
  Video,
} from 'lucide-react';

import logoSrc from '../../../assets/images/rwoc-logo.png';

import {
  AboutSection,
  CommunitySection,
  DemoSection,
  FeaturesSection,
  Footer,
  GetStartedSection,
  HeroSection,
} from '@rwoc/landing';
import { Logo, Tagline } from '@rwoc/shadcnui-blocks';
import { LogoCarousel } from '@rwoc/shadcnui-blocks'; // Pfa41

export const LandingPage: FC = () => {
  const navigate = useNavigate();

  const handleScrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Any other side effects can be added here
  }, []);

  return (
    <div
      className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-primary text-foreground"
      data-testid="landing-page"
    >
      <div className="bg-primary" data-testid="hero-section-container">
        <HeroSection
          title="The Boilerplate That Speeds Up SPA Development"
          subtitle="Combine the power of Nx, Tailwind CSS, and Shadcn UI to kickstart your next React project."
          description="Streamline your development workflow with a comprehensive and customizable boilerplate designed for speed and scalability."
          image={logoSrc}
          imageAlt="Logo for the boilerplate"
          ctaPrimary={{
            text: 'Start Building for Free',
            link: 'https://github.com/CambridgeMonorail/react-weapons-of-choice',
          }}
          ctaSecondary={{
            text: 'Explore Features',
            onClick: handleScrollToFeatures,
          }}
          layout="left"
          data-testid="hero-section"
        />
      </div>
      <AboutSection
        title="Why React Weapons of Choice?"
        description="React Weapons of Choice is an open-source boilerplate designed for developers who want a fast, intuitive setup for SPAs. Say goodbye to configuration headaches and hello to productivity!"
        logos={[
          <Logo
            name="nx"
            className="w-16 h-16 sm:w-12 sm:h-12"
            key="nx"
            title="Nx"
            ariaLabel="Nx"
          />,
          <Logo
            name="tailwind"
            className="w-16 h-16 sm:w-12 sm:h-12"
            key="tailwind"
            title="Tailwind CSS"
            ariaLabel="Tailwind CSS"
          />,
          <Logo
            name="shadcn"
            className="w-16 h-16 sm:w-12 sm:h-12"
            key="shadcn"
            title="Shadcn"
            ariaLabel="Shadcn"
          />,
          <Logo
            name="pnpm"
            className="w-16 h-16 sm:w-12 sm:h-12"
            key="pnpm"
            title="Pnpm"
            ariaLabel="Pnpm"
          />,
          <Logo
            name="react"
            className="w-16 h-16 sm:w-12 sm:h-12"
            key="react"
            title="React"
            ariaLabel="React"
          />,
        ]}
        data-testid="about-section"
      />
      <FeaturesSection
        title="What You’ll Get"
        features={[
          {
            title: 'Instant Setup – Code Without Delay',
            description:
              'Pre-configured Nx workspace lets you manage monorepos effortlessly, focusing on features over tooling.',
            icon: <Rocket className="text-red-500" />,
            className:
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
          },
          {
            title: 'Effortless Responsive UI Design',
            description:
              'Tailwind CSS integration enables the creation of modern, responsive UIs with minimal effort.',
            icon: <Palette className="text-blue-500" />,
            className:
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
          },
          {
            title: 'Ready-to-Use Accessible Components',
            description:
              'Shadcn UI offers accessible components for a professional and consistent design experience.',
            icon: <Paintbrush className="text-green-500" />,
            className:
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
          },
          {
            title: 'Seamless Project Scalability',
            description:
              'Modular architecture ensures your project grows seamlessly as your application and team expand.',
            icon: <BarChart className="text-yellow-500" />,
            className:
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
          },
          {
            title: 'Quick Start with Comprehensive Docs',
            description:
              'Detailed documentation and examples empower you to set up, customize, and deploy your project swiftly.',
            icon: <ChartLine className="text-purple-500" />,
            className:
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
          },
          {
            title: 'Optimized Tools for Rapid Development',
            description:
              'Our tools are optimized for performance, ensuring your development process is as fast as possible.',
            icon: <Video className="text-orange-500" />,
            className:
              'hover:shadow-lg hover:scale-105 transition-transform duration-300',
          },
        ]}
        data-testid="features-section"
      />
      <DemoSection
        title="Experience It Yourself"
        description="Try our live demo to see how effortlessly you can set up and scale your React project with React Weapons of Choice."
        buttonText="Try the Demo"
        buttonAction={() => navigate('/home')}
        data-testid="demo-section"
      />
      <CommunitySection
        title="Join the Community"
        description="React Weapons of Choice is built by developers, for developers. Contribute, discuss, and shape the future of the project."
        buttonText="Contribute on GitHub"
        buttonAction={() =>
          window.open(
            'https://github.com/CambridgeMonorail/react-weapons-of-choice',
            '_blank'
          )
        }
        isDarkBackground={true} // Pass the new prop
        data-testid="community-section"
      />
      <GetStartedSection
        title="Get Started in Minutes"
        steps={[
          {
            title: 'Clone the repository.',
            description: 'Clone the repository.',
          },
          {
            title: 'Install dependencies.',
            description: 'Install dependencies using pnpm.',
          },
          {
            title: 'Start the server.',
            description: 'Run the development server to see your changes.',
          },
        ]}
        buttonText="Read the Documentation"
        buttonAction={() =>
          window.open(
            'https://github.com/CambridgeMonorail/react-weapons-of-choice',
            '_blank'
          )
        }
        data-testid="get-started-section"
      />
      <Tagline
        text="Accelerate Development. Scale Seamlessly. Impress Instantly."
        dataTestId="tagline"
      />
      <Footer
        className="w-full px-4 sm:px-6 lg:px-8"
        navigationLinks={[
          { text: 'Home', url: '#' },
          { text: 'Features', url: '#features' },
          {
            text: 'Documentation',
            url: 'https://github.com/CambridgeMonorail/react-weapons-of-choice',
          },
          {
            text: 'Community',
            url: 'https://discord.com/invite/your-discord-invite',
          },
          {
            text: 'GitHub',
            url: 'https://github.com/CambridgeMonorail/react-weapons-of-choice',
          },
        ]}
        socialMediaIcons={[
          {
            icon: (props) => <Github {...props} />,
            url: 'https://github.com/CambridgeMonorail/react-weapons-of-choice',
          },
          {
            icon: (props) => <Twitter {...props} />,
            url: 'https://x.com/TimDMorris',
          },
        ]}
        copyrightText="&copy; 2024 React Weapons of Choice. All rights reserved."
        data-testid="footer"
      />
    </div>
  );
};
