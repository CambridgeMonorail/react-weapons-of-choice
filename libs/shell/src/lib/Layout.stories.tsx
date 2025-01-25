import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Icon, Swords, AudioWaveform, SquareTerminal, Bot } from 'lucide-react';

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Team {
  name: string;
  logo: Icon;
  plan: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: Icon;
  isActive?: boolean;
  items?: NavItem[];
}

export interface SidebarConfiguration {
  user: User;
  teams: Team[];
  navMain: NavItem[];
}

const paths = {
  landing: '#',
  about: '#',
  blog: '#',
  blogPost: '#',
  contact: '#',
  dashboard: '#',
  faq: '#',
  features: '#',
  home: '#',
  pricing: '#',
  statusBoard: '#',
  termsAndConditions: '#',
  components: {
    colorPalette: '#',
    library: '#',
  },
  notFound: '*',
};

const meta: Meta<typeof Layout> = {
  title: 'Shell/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Layout>;

/**
 * Default layout with sample sidebar data.
 * Demonstrates the Layout component with a populated sidebar.
 */
export const Default: Story = {
  args: {
    sidebarData: {
      user: {
        name: 'rwoc',
        email: 'm@example.com',
        avatar: 'react-weapons-of-choice/assets/images/avatars/rwoc.jpg',
      },
      teams: [
        {
          name: 'RWOC',
          logo: Swords,
          plan: 'Enterprise',
        },
        {
          name: 'RWOC Corp.',
          logo: AudioWaveform,
          plan: 'Startup',
        },
      ],
      navMain: [
        {
          title: 'Sample Pages',
          url: paths.about,
          icon: SquareTerminal,
          isActive: true,
          items: [
            { title: 'Landing', url: paths.landing },
            { title: 'Dashboard', url: paths.dashboard },
            { title: 'About', url: paths.about },
            { title: 'Features', url: paths.features },
            { title: 'Pricing', url: paths.pricing },
            { title: 'FAQ', url: paths.faq },
            { title: 'Contact', url: paths.contact },
            { title: 'Blog', url: paths.blog },
            { title: 'Terms and Conditions', url: paths.termsAndConditions },
            { title: 'StatusBoard', url: paths.statusBoard },
          ],
        },
        {
          title: 'Components',
          url: paths.components.library,
          icon: Bot,
          items: [
            { title: 'Shadcn/ui Components', url: paths.components.library },
            { title: 'Color Palette', url: paths.components.colorPalette },
          ],
        },
      ],
    } as SidebarConfiguration,
    children: <div className="p-4">Main content goes here</div>,
  },
};

/**
 * Layout with empty sidebar data.
 * Demonstrates the Layout component with an empty sidebar.
 */
export const EmptySidebar: Story = {
  args: {
    sidebarData: {
      user: {
        name: '',
        email: '',
        avatar: '',
      },
      teams: [],
      navMain: [],
    } as SidebarConfiguration,
    children: <div className="p-4">Main content goes here</div>,
  },
};
