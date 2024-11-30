import { createElement } from 'react';
import { LandingPage } from '../components/landing-page/LandingPage';
import { Layout } from '../components/Layout';
import { NotFound } from '../components/NotFound';
import { AboutPage } from '../components/pages/AboutPage';
import { FeaturesPage } from '../components/pages/FeaturesPage';
import { PricingPage } from '../components/pages/PricingPage';
import { FAQPage } from '../components/pages/FAQPage';
import ContactPage from '../components/pages/ContactPage';
import BlogPage from '../components/pages/BlogPage';
import IndividualBlogPostPage from '../components/pages/IndividualBlogPostPage';
import TermsAndConditionsPage from '../components/pages/TermsAndConditionsPage';
import { ButtonDemo } from '../components/component-demos/ButtonDemo';
import CardDemo from '../components/component-demos/CardDemo';
import ChartDemo from '../components/component-demos/ChartDemo';
import DialogDemo from '../components/component-demos/DialogDemo';
import DropdownDemo from '../components/component-demos/DropdownDemo';
import FormDemo from '../components/component-demos/FormDemo';
import TabsDemo from '../components/component-demos/TabsDemo';
import ToggleDemo from '../components/component-demos/ToggleDemo';
import TooltipDemo from '../components/component-demos/TooltipDemo';
import { ColorPalettePage } from '../components/pages/ColorPalettePage';
import { StatusBoardPage } from '../components/pages/StatusBoardPage';
import { DashboardPage } from '../components/pages/dashboard/DashboardPage';
import { AppRoute } from '../types/app-route';

export const routes: AppRoute[] = [
  { path: '/', element: createElement(LandingPage) },
  { path: 'home', element: createElement(Layout, null, createElement(DashboardPage)) },
  { path: 'about', element: createElement(Layout, null, createElement(AboutPage)) },
  { path: 'features', element: createElement(Layout, null, createElement(FeaturesPage)) },
  { path: 'pricing', element: createElement(Layout, null, createElement(PricingPage)) },
  { path: 'faq', element: createElement(Layout, null, createElement(FAQPage)) },
  { path: 'contact', element: createElement(Layout, null, createElement(ContactPage)) },
  { path: 'blog', element: createElement(Layout, null, createElement(BlogPage)) },
  { path: 'blog/:postId', element: createElement(Layout, null, createElement(IndividualBlogPostPage)) },
  { path: 'terms-and-conditions', element: createElement(Layout, null, createElement(TermsAndConditionsPage)) },
  { path: 'dashboard', element: createElement(Layout, null, createElement(DashboardPage)) },
  { path: 'components/demo-button', element: createElement(Layout, null, createElement(ButtonDemo)) },
  { path: 'components/demo-card', element: createElement(Layout, null, createElement(CardDemo)) },
  { path: 'components/demo-chart', element: createElement(Layout, null, createElement(ChartDemo)) },
  { path: 'components/demo-dialog', element: createElement(Layout, null, createElement(DialogDemo)) },
  { path: 'components/demo-dropdown', element: createElement(Layout, null, createElement(DropdownDemo)) },
  { path: 'components/demo-form', element: createElement(Layout, null, createElement(FormDemo)) },
  { path: 'components/demo-tabs', element: createElement(Layout, null, createElement(TabsDemo)) },
  { path: 'components/demo-toggle', element: createElement(Layout, null, createElement(ToggleDemo)) },
  { path: 'components/demo-tooltip', element: createElement(Layout, null, createElement(TooltipDemo)) },
  { path: 'color-palette', element: createElement(Layout, null, createElement(ColorPalettePage)) },
  { path: 'status-board', element: createElement(Layout, null, createElement(StatusBoardPage)) },
  { path: '*', element: createElement(NotFound) },
];