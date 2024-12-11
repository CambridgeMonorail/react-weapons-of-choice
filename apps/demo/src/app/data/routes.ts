import { createElement } from 'react';
import { LandingPage } from '../components/landing-page/LandingPage';

import { NotFound } from '../components/NotFound';
import { AboutPage } from '../components/pages/AboutPage';
import { FeaturesPage } from '../components/pages/FeaturesPage';
import { PricingPage } from '../components/pages/PricingPage';
import { FAQPage } from '../components/pages/FAQPage';
import ContactPage from '../components/pages/ContactPage';
import BlogPage from '../components/pages/BlogPage';
import IndividualBlogPostPage from '../components/pages/IndividualBlogPostPage';
import { TermsAndConditionsPage } from '../components/pages/TermsAndConditionsPage';
import { ButtonDemo } from '../components/component-demos/ButtonDemo';
import { CardDemo } from '../components/component-demos/CardDemo';
import { ChartDemo } from '../components/component-demos/ChartDemo';
import { DialogDemo } from '../components/component-demos/DialogDemo';
import { DropdownDemo } from '../components/component-demos/DropdownDemo';
import { FormDemo } from '../components/component-demos/FormDemo';
import { TabsDemo } from '../components/component-demos/TabsDemo';
import { ToggleDemo } from '../components/component-demos/ToggleDemo';
import TooltipDemo from '../components/component-demos/TooltipDemo';
import { ColorPalettePage } from '../components/pages/ColorPalettePage';
import { StatusBoardPage } from '../components/pages/StatusBoardPage';
import { DashboardPage } from '../components/pages/dashboard/DashboardPage';
import { AppRoute } from '../types/app-route';
import { paths } from '../constants/paths';
import { Layout } from '@rwoc/shell';
import { sidebarData } from '../data/sidebarData'; // Adjust the import path as necessary

/**
 * Defines the routes for the application.
 * Each route is an object with a path and an element.
 * The path is the URL path, and the element is the React component to render.
 * The Layout component is used to wrap pages that share a common layout.
 * 
 * To add a new route:
 * 1. Import the component for the new route.
 * 2. Add a new entry to the `routes` array with the path and element.
 * 3. Use the `paths` object to reference the path to ensure consistency.
 */
export const routes: AppRoute[] = [
  { path: paths.landing, element: createElement(LandingPage) },
  { path: paths.home, element: createElement(Layout, { sidebarData, children: createElement(DashboardPage) }) },
  { path: paths.dashboard, element: createElement(Layout, { sidebarData, children: createElement(DashboardPage) }) },
  { path: paths.about, element: createElement(Layout, { sidebarData, children: createElement(AboutPage) }) },
  { path: paths.features, element: createElement(Layout, { sidebarData, children: createElement(FeaturesPage) }) },
  { path: paths.pricing, element: createElement(Layout, { sidebarData, children: createElement(PricingPage) }) },
  { path: paths.faq, element: createElement(Layout, { sidebarData, children: createElement(FAQPage) }) },
  { path: paths.contact, element: createElement(Layout, { sidebarData, children: createElement(ContactPage) }) },
  { path: paths.blog, element: createElement(Layout, { sidebarData, children: createElement(BlogPage) }) },
  { path: paths.blogPost, element: createElement(Layout, { sidebarData, children: createElement(IndividualBlogPostPage) }) },
  { path: paths.termsAndConditions, element: createElement(Layout, { sidebarData, children: createElement(TermsAndConditionsPage) }) },
  { path: paths.components.demoButton, element: createElement(Layout, { sidebarData, children: createElement(ButtonDemo) }) },
  { path: paths.components.demoCard, element: createElement(Layout, { sidebarData, children: createElement(CardDemo) }) },
  { path: paths.components.demoChart, element: createElement(Layout, { sidebarData, children: createElement(ChartDemo) }) },
  { path: paths.components.demoDialog, element: createElement(Layout, { sidebarData, children: createElement(DialogDemo) }) },
  { path: paths.components.demoDropdown, element: createElement(Layout, { sidebarData, children: createElement(DropdownDemo) }) },
  { path: paths.components.demoForm, element: createElement(Layout, { sidebarData, children: createElement(FormDemo) }) },
  { path: paths.components.demoTabs, element: createElement(Layout, { sidebarData, children: createElement(TabsDemo) }) },
  { path: paths.components.demoToggle, element: createElement(Layout, { sidebarData, children: createElement(ToggleDemo) }) },
  { path: paths.components.demoTooltip, element: createElement(Layout, { sidebarData, children: createElement(TooltipDemo) }) },
  { path: paths.colorPalette, element: createElement(Layout, { sidebarData, children: createElement(ColorPalettePage) }) },
  { path: paths.statusBoard, element: createElement(Layout, { sidebarData, children: createElement(StatusBoardPage) }) },
  { path: paths.notFound, element: createElement(NotFound) },
];
