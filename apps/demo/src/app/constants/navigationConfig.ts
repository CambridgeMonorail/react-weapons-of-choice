import { lazy } from 'react';
import { paths } from './paths';
import { SidebarConfiguration } from '../types/sidebarTypes';
import { Swords, AudioWaveform, SquareTerminal, Bot } from 'lucide-react';

const LandingPage = lazy(() => import('../pages/landing/Landing'));
const AboutPage = lazy(() => import('../pages/about/About'));
const BlogPage = lazy(() => import('../pages/blog/Blog'));
const IndividualBlogPostPage = lazy(() => import('../pages/blog/IndividualBlogPost'));
const ColorPalettePage = lazy(() => import('../pages/color-palette/ColorPalette'));
const ContactPage = lazy(() => import('../pages/contact/Contact'));
const DashboardPage = lazy(() => import('../pages/dashboard/Dashboard'));
const FAQPage = lazy(() => import('../pages/faq/FAQ'));
const FeaturesPage = lazy(() => import('../pages/features/Features'));
const LibraryPage = lazy(() => import('../pages/library/Library'));
const NotFound = lazy(() => import('../pages/not-found/NotFound'));
const PricingPage = lazy(() => import('../pages/pricing/Pricing'));
const StatusBoardPage = lazy(() => import('../pages/status-board/StatusBoard'));
const TermsAndConditionsPage = lazy(() => import('../pages/terms-and-conditions/TermsAndConditions'));

export const navigationConfig = {
  paths,
  routes: [
    { path: paths.landing, element: <LandingPage /> },
    { path: paths.about, element: <AboutPage /> },
    { path: paths.blog, element: <BlogPage /> },
    { path: paths.blogPost, element: <IndividualBlogPostPage /> },
    { path: paths.components.colorPalette, element: <ColorPalettePage /> },
    { path: paths.components.libraryPage, element: <LibraryPage /> },
    { path: paths.contact, element: <ContactPage /> },
    { path: paths.dashboard, element: <DashboardPage /> },
    { path: paths.faq, element: <FAQPage /> },
    { path: paths.features, element: <FeaturesPage /> },
    { path: paths.home, element: <DashboardPage /> },
    { path: paths.pricing, element: <PricingPage /> },
    { path: paths.statusBoard, element: <StatusBoardPage /> },
    { path: paths.termsAndConditions, element: <TermsAndConditionsPage /> },
    { path: paths.notFound, element: <NotFound /> },
  ],
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
        url: paths.components.libraryPage,
        icon: Bot,
        items: [
          { title: 'Shadcn/ui Components', url: paths.components.libraryPage },
          { title: 'Color Palette', url: paths.components.colorPalette },
        ],
      },
    ],
  } as SidebarConfiguration,
};
