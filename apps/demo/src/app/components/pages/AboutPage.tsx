import { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@rwoc/shared/components/ui/card';
import { HeroSection } from '../landing-page/HeroSection';
import { AboutSection } from '../landing-page/AboutSection';
import { FeaturesSection } from '../landing-page/FeaturesSection';
import { CommunitySection } from '../landing-page/CommunitySection';
import { Footer } from '../landing-page/Footer';
import { paths } from '../../constants/paths';
import { Github, Twitter } from 'lucide-react';
import imageSrc from '../../../assets/images/undraw_our_solution.svg';
import { Logo } from '../shared/Logo';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  contact: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Beard',
    role: 'Project Lead',
    photo: 'http://placebeard.it/150',
    bio: 'John Beard is a seasoned developer with over 10 years of experience in full-stack development.',
    contact: 'john.beard@example.com',
  },
  {
    name: 'James Beard',
    role: 'UI/UX Designer',
    photo: 'http://placebeard.it/150',
    bio: 'James Beard is a creative designer who specializes in user experience and interface design.',
    contact: 'james.beard@example.com',
  },
  {
    name: 'Alex Beard',
    role: 'Frontend Developer',
    photo: 'http://placebeard.it/150',
    bio: 'Alex Beard is a frontend developer with a passion for building responsive and accessible web applications.',
    contact: 'alex.beard@example.com',
  },
];

const AboutPage: FC = () => {
  return (
    <div className="p-6 m-4 space-y-6">
      <HeroSection
        title="About React Weapons of Choice"
        subtitle="Empowering Developers with Modern React Tools"
        image={imageSrc}
        imageAlt="Banner Image"
        description="Empowering Developers with Modern React Tools"
      />

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Mission and Vision
        </h2>
        <p>
          Our mission is to revolutionize the way developers build applications
          by providing a robust and intuitive boilerplate. Our vision is to
          create a community-driven project that continuously evolves to meet
          the needs of developers worldwide.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Company Overview
        </h2>
        <p>
          React Weapons of Choice (RWOC) was founded with the goal of
          simplifying React SPA development. Our project aims to provide a
          comprehensive boilerplate that integrates modern tools and best
          practices.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-primary">History</h3>
        <p>
          RWOC was born out of the need for a streamlined development process.
          Over the years, we have achieved several milestones, including the
          integration of Nx, Tailwind CSS, and Shadcn UI.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-primary">Project Goals</h3>
        <ul className="list-disc list-inside">
          <li>Simplified setup</li>
          <li>Seamless integration</li>
          <li>Scalability</li>
          <li>Enhanced developer experience</li>
          <li>Community collaboration</li>
        </ul>
      </section>

      <FeaturesSection
        title="Features and Offerings"
        features={[
          {
            title: 'Nx Monorepo',
            description: 'Modular workspace management.',
          },
          { title: 'Tailwind CSS', description: 'Utility-first styling.' },
          { title: 'Shadcn UI', description: 'Customizable components.' },
          {
            title: 'Vite',
            description: 'Efficient development and build processes.',
          },
          {
            title: 'Preconfigured CI/CD',
            description: 'Workflows for continuous integration and delivery.',
          },
        ]}
      />

      <AboutSection
        title="Technologies Used"
        description="RWOC integrates the following technologies:"
        logos={[
          <Logo name="nx" className="w-16 h-16" key="nx" />,
          <Logo name="tailwind" className="w-16 h-16" key="tailwind" />,
          <Logo name="shadcn" className="w-16 h-16" key="shadcn" />,
          <Logo name="pnpm" className="w-16 h-16" key="pnpm" />,
          <Logo name="react" className="w-16 h-16" key="react" />,
        ]}
      />

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Team Introduction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-auto mb-4 rounded-lg"
                />
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
                <p className="mt-2 text-sm text-muted">{member.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CommunitySection
        title="Community and Contributions"
        description="Learn how you can contribute to RWOC and collaborate with the community."
        buttonText="Contribute on GitHub"
        buttonAction={() =>
          window.open(
            'https://github.com/CambridgeMonorail/react-weapons-of-choice',
            '_blank'
          )
        }
      />

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Testimonials and Acknowledgments
        </h2>
        <p>
          "RWOC has significantly improved our development workflow. The
          integration of modern tools and best practices has been a
          game-changer." - User A
        </p>
        <p>
          "We are grateful for the inspirations and resources provided by
          joshuarobs/nx-shadcn-ui-monorepo and Shadcn UI." - User B
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">Call to Action</h2>
        <p>
          Engage with RWOC by contributing, providing feedback, or utilizing the
          boilerplate for your projects.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Contact Information
        </h2>
        <p>Email: contact@rwoc.dev</p>
        <p>Follow us on social media:</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/CambridgeMonorail/react-weapons-of-choice"
            className="text-primary hover:underline"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            className="text-primary hover:underline"
          >
            <Twitter className="w-8 h-8" />
          </a>
        </div>
      </section>

      <Footer
        navigationLinks={[
          { text: 'Home', url: paths.home },
          { text: 'Features', url: paths.features },
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
            icon: Github,
            url: 'https://github.com/CambridgeMonorail/react-weapons-of-choice',
          },
          { icon: Twitter, url: 'https://twitter.com/your-twitter-handle' },
        ]}
        copyrightText="&copy; 2024 React Weapons of Choice. All rights reserved."
      />
    </div>
  );
};

export { AboutPage };
