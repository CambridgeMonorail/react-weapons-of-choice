import { LandingPage } from './components/landing-page/LandingPage';
import { Layout } from './components/Layout';
import { DashboardPage } from './components/pages/dashboard/DashboardPage';
import { AboutPage } from './components/pages/AboutPage';
import { FeaturesPage } from './components/pages/FeaturesPage';
import { PricingPage } from './components/pages/PricingPage';
import { FAQPage } from './components/pages/FAQPage';
import ContactPage from './components/pages/ContactPage';
import BlogPage from './components/pages/BlogPage';
import IndividualBlogPostPage from './components/pages/IndividualBlogPostPage';
import TermsAndConditionsPage from './components/pages/TermsAndConditionsPage';
import { ButtonDemo } from './components/component-demos/ButtonDemo';
import CardDemo from './components/component-demos/CardDemo';
import ChartDemo from './components/component-demos/ChartDemo';
import DialogDemo from './components/component-demos/DialogDemo';
import DropdownDemo from './components/component-demos/DropdownDemo';
import FormDemo from './components/component-demos/FormDemo';
import TabsDemo from './components/component-demos/TabsDemo';
import ToggleDemo from './components/component-demos/ToggleDemo';
import TooltipDemo from './components/component-demos/TooltipDemo';
import { ColorPalettePage } from './components/pages/ColorPalettePage';
import { StatusBoardPage } from './components/pages/StatusBoardPage';
import { NotFound } from './components/NotFound';

const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'home',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:postId', element: <IndividualBlogPostPage /> },
      { path: 'terms-and-conditions', element: <TermsAndConditionsPage /> },
      { path: 'components/demo-button', element: <ButtonDemo /> },
      { path: 'components/demo-card', element: <CardDemo /> },
      { path: 'components/demo-chart', element: <ChartDemo /> },
      { path: 'components/demo-dialog', element: <DialogDemo /> },
      { path: 'components/demo-dropdown', element: <DropdownDemo /> },
      { path: 'components/demo-form', element: <FormDemo /> },
      { path: 'components/demo-tabs', element: <TabsDemo /> },
      { path: 'components/demo-toggle', element: <ToggleDemo /> },
      { path: 'components/demo-tooltip', element: <TooltipDemo /> },
      { path: 'color-palette', element: <ColorPalettePage /> },
      { path: 'status-board', element: <StatusBoardPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes };
