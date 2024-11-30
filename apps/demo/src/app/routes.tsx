
import { LandingPage } from './components/landing-page/LandingPage';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
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
import { DashboardPage } from './components/pages/dashboard/DashboardPage';

export const routes = [
  { path: '/', element: <LandingPage /> },
  { path: 'home', element: <Layout><DashboardPage /></Layout> },
  { path: 'about', element: <Layout><AboutPage /></Layout> },
  { path: 'features', element: <Layout><FeaturesPage /></Layout> },
  { path: 'pricing', element: <Layout><PricingPage /></Layout> },
  { path: 'faq', element: <Layout><FAQPage /></Layout> },
  { path: 'contact', element: <Layout><ContactPage /></Layout> },
  { path: 'blog', element: <Layout><BlogPage /></Layout> },
  { path: 'blog/:postId', element: <Layout><IndividualBlogPostPage /></Layout> },
  { path: 'terms-and-conditions', element: <Layout><TermsAndConditionsPage /></Layout> },
  { path: 'dashboard', element: <Layout><DashboardPage /></Layout> },
  { path: 'components/demo-button', element: <Layout><ButtonDemo /></Layout> },
  { path: 'components/demo-card', element: <Layout><CardDemo /></Layout> },
  { path: 'components/demo-chart', element: <Layout><ChartDemo /></Layout> },
  { path: 'components/demo-dialog', element: <Layout><DialogDemo /></Layout> },
  { path: 'components/demo-dropdown', element: <Layout><DropdownDemo /></Layout> },
  { path: 'components/demo-form', element: <Layout><FormDemo /></Layout> },
  { path: 'components/demo-tabs', element: <Layout><TabsDemo /></Layout> },
  { path: 'components/demo-toggle', element: <Layout><ToggleDemo /></Layout> },
  { path: 'components/demo-tooltip', element: <Layout><TooltipDemo /></Layout> },
  { path: 'color-palette', element: <Layout><ColorPalettePage /></Layout> },
  { path: 'status-board', element: <Layout><StatusBoardPage /></Layout> },
  { path: '*', element: <NotFound /> },
];