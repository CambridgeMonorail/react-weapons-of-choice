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
import { ColorPalettePage } from '../components/pages/ColorPalettePage';
import { StatusBoardPage } from '../components/pages/StatusBoardPage';
import { DashboardPage } from '../components/pages/dashboard/DashboardPage';
import { AppRoute } from '../types/app-route';
import { paths } from '../constants/paths';
import { Layout } from '@rwoc/shell';
import { sidebarData } from '../data/sidebarData'; 
import LibraryPage from '../components/pages/LibraryPage';

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
  { path: paths.components.colorPalette, element: createElement(Layout, { sidebarData, children: createElement(ColorPalettePage) }) },
  { path: paths.components.libraryPage, element: createElement(Layout, { sidebarData, children: createElement(LibraryPage) }) },
  { path: paths.statusBoard, element: createElement(Layout, { sidebarData, children: createElement(StatusBoardPage) }) },
  { path: paths.notFound, element: createElement(NotFound) },
];
