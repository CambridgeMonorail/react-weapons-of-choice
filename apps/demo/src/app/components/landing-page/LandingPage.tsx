import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

import logoSrc from '../../../assets/images/rwoc-logo.png';

import { AboutSection, CommunitySection, DemoSection, FeaturesSection, Footer, GetStartedSection, HeroSection } from '@rwoc/landing';
import { Logo, Tagline } from '@rwoc/shadcnui-blocks';


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
          <Logo name="nx" className="w-16 h-16 sm:w-12 sm:h-12" key="nx" />,
          <Logo name="tailwind" className="w-16 h-16 sm:w-12 sm:h-12" key="tailwind" />,
          <Logo name="shadcn" className="w-16 h-16 sm:w-12 sm:h-12" key="shadcn" />,
          <Logo name="pnpm" className="w-16 h-16 sm:w-12 sm:h-12" key="pnpm" />,
          <Logo name="react" className="w-16 h-16 sm:w-12 sm:h-12" key="react" />,
        ]}
        data-testid="about-section"
      />
      <FeaturesSection
        title="What You’ll Get"
        features={[
          {
            title: '🚀 Spend Less Time Configuring, More Time Coding',
            description: 'Pre-configured Nx workspace helps you manage monorepos effortlessly, so you can focus on building features, not tooling.',
          },
          {
            title: '🎨 Beautiful, Consistent Styling in Minutes',
            description:
              'Tailwind CSS comes fully integrated, making it easy to create modern, responsive UIs with minimal effort.',
          },
          {
            title: '🖌️ Pixel-Perfect UI Without the Hassle',
            description:
              'Shadcn UI provides ready-to-use, accessible components for a professional and consistent design experience.',
          },
          {
            title: '📂 Scale with Confidence',
            description:
              'A modular architecture ensures your project grows seamlessly as your application and team expand.',
          },
          {
            title: '📑 Get Started Fast with Step-by-Step Docs',
            description:
              'Comprehensive documentation and examples empower you to set up, customize, and deploy your project quickly.',
          },
        ]}
        data-testid="features-section"
      />
      <DemoSection
        title="See It in Action"
        description="Explore a live demo to see how React Weapons of Choice simplifies SPA development."
        buttonText="View Demo"
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
          { title: 'Clone the repository.', description: 'Clone the repository.' },
          { title: 'Install dependencies.', description: 'Install dependencies using pnpm.' },
          { title: 'Start the server.', description: 'Run the development server to see your changes.' },
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
