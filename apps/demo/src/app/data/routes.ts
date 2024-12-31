import { AboutPage } from '../pages/AboutPage';
import { AppRoute } from '../types/app-route';
import { ColorPalettePage } from '../pages/ColorPalettePage';
import { createElement } from 'react';
import { DashboardPage } from '../pages/DashboardPage';
import { FAQPage } from '../pages/FAQPage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { LandingPage } from '../pages/LandingPage';
import { Layout } from '@rwoc/shell';
import { LibraryPage } from '../pages/LibraryPage';
import { NotFound } from '../pages/NotFound';
import { paths } from '../constants/paths';
import { PricingPage } from '../pages/PricingPage';
import { sidebarData } from '../data/sidebarData';
import { StatusBoardPage } from '../pages/StatusBoardPage';
import { TermsAndConditionsPage } from '../pages/TermsAndConditionsPage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import IndividualBlogPostPage from '../pages/IndividualBlogPostPage';

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
