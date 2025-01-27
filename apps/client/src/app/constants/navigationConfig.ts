import { createElement } from 'react';
import { SidebarConfiguration } from '../types/sidebarTypes';
import { Swords, AudioWaveform, SquareTerminal, Bot } from 'lucide-react';

import { LandingPage } from '../pages/landing/Landing';
import { AboutPage } from '../pages/about/About';
import { BlogPage } from '../pages/blog/Blog';
import { IndividualBlogPostPage } from '../pages/blog/IndividualBlogPost';
import { ColorPalettePage } from '../pages/color-palette/ColorPalette';
import { ContactPage } from '../pages/contact/Contact';
import { DashboardPage } from '../pages/dashboard/Dashboard';
import { FAQPage } from '../pages/faq/FAQ';
import { FeaturesPage } from '../pages/features/Features';
import { LibraryPage } from '../pages/library/Library';
import { NotFound } from '../pages/not-found/NotFound';
import { PricingPage } from '../pages/pricing/Pricing';
import { StatusBoardPage } from '../pages/status-board/StatusBoard';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/TermsAndConditions';
import { Layout } from '@rwoc/shell';

/**
 * Object containing all the paths used in the application.
 */
const paths = {
  landing: '/',
  about: '/about',
  blog: '/blog',
  blogPost: '/blog/:postId',
  contact: '/contact',
  dashboard: '/dashboard',
  faq: '/faq',
  features: '/features',
  home: '/home',
  pricing: '/pricing',
  statusBoard: '/status-board',
  termsAndConditions: '/terms-and-conditions',
  components: {
    colorPalette: '/color-palette',
    library: '/library',
  },
  notFound: '*',
};

/**
 * Configuration for the sidebar, including user information, teams, and navigation items.
 */
const sidebarData: SidebarConfiguration = {
  user: {
    name: 'rwoc',
    email: 'm@example.com',
    avatar: 'react-weapons-of-choice/assets/images/avatars/avatar.jpg',
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
};

/**
 * Helper function to create a route object.
 * @param path - The URL path for the route.
 * @param component - The React component to render for the route.
 * @param useLayout - Whether to wrap the component with the Layout component.
 * @returns The route object.
 */
const createRoute = (
  path: string,
  component: React.ComponentType,
  useLayout = true
) => {
  return useLayout
    ? {
        path,
        element: createElement(Layout, {
          sidebarData,
          children: createElement(component),
        }),
      }
    : { path, element: createElement(component) };
};

/**
 * Array of route objects for the application.
 */
const routes = [
  createRoute(paths.landing, LandingPage, false),
  createRoute(paths.about, AboutPage),
  createRoute(paths.blog, BlogPage),
  createRoute(paths.blogPost, IndividualBlogPostPage),
  createRoute(paths.components.colorPalette, ColorPalettePage),
  createRoute(paths.components.library, LibraryPage),
  createRoute(paths.contact, ContactPage),
  createRoute(paths.dashboard, DashboardPage),
  createRoute(paths.faq, FAQPage),
  createRoute(paths.features, FeaturesPage),
  createRoute(paths.home, DashboardPage),
  createRoute(paths.pricing, PricingPage),
  createRoute(paths.statusBoard, StatusBoardPage),
  createRoute(paths.termsAndConditions, TermsAndConditionsPage),
  createRoute(paths.notFound, NotFound, false),
];

/**
 * Configuration object for navigation, including paths, sidebar data, and routes.
 */
export const navigationConfig = {
  paths,
  sidebarData,
  routes,
};
