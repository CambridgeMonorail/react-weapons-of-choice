# Navigation Structure

## Current Navigation Structure

The current navigation structure is defined across three files:

1. `apps/demo/src/app/constants/paths.ts`
2. `apps/demo/src/app/data/routes.ts`
3. `apps/demo/src/app/data/sidebarData.ts`

### `apps/demo/src/app/constants/paths.ts`

This file centralizes all route paths in a single object. This ensures consistency and makes it easier to update paths in one place.

Example:
```typescript
export const paths = {
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
    libraryPage: '/library',
  },
  notFound: '*',
};
```

### `apps/demo/src/app/data/routes.ts`

This file defines the routes for the application. Each route is an object with a path and an element. The path is the URL path, and the element is the React component to render.

Example:
```typescript
import { AboutPage } from '../components/pages/AboutPage';
import { AppRoute } from '../types/app-route';
import { ColorPalettePage } from '../components/pages/ColorPalettePage';
import { createElement } from 'react';
import { DashboardPage } from '../components/pages/dashboard/DashboardPage';
import { FAQPage } from '../components/pages/FAQPage';
import { FeaturesPage } from '../components/pages/FeaturesPage';
import { LandingPage } from '../components/landing-page/LandingPage';
import { Layout } from '@rwoc/shell';
import { LibraryPage } from '../components/pages/LibraryPage';
import { NotFound } from '../components/NotFound';
import { paths } from '../constants/paths';
import { PricingPage } from '../components/pages/PricingPage';
import { sidebarData } from '../data/sidebarData';
import { StatusBoardPage } from '../components/pages/StatusBoardPage';
import { TermsAndConditionsPage } from '../components/pages/TermsAndConditionsPage';
import BlogPage from '../components/pages/BlogPage';
import ContactPage from '../components/pages/ContactPage';
import IndividualBlogPostPage from '../components/pages/IndividualBlogPostPage';

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
```

### `apps/demo/src/app/data/sidebarData.ts`

This file defines the sidebar data, including user information, teams, and navigation items.

Example:
```typescript
import { SidebarConfiguration } from '../types/sidebarTypes';
import { Swords, AudioWaveform, SquareTerminal, Bot, BookOpen, Settings2 } from 'lucide-react';
import { paths } from '../constants/paths';

export const sidebarData: SidebarConfiguration = {
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
};
```

## Proposed Improvements

### Centralize Path Definitions

To reduce redundancy, centralize path definitions in a single file, such as `apps/demo/src/app/constants/paths.ts`. Ensure that all other files reference the paths from this centralized file.

### Use a Configuration Object

Create a configuration object that includes paths, routes, and sidebar data in a single file. This can help reduce redundancy and improve maintainability.

Example:
```typescript
const config = {
  paths: {
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
      libraryPage: '/library',
    },
    notFound: '*',
  },
  routes: [
    { path: '/', element: createElement(LandingPage) },
    { path: '/home', element: createElement(Layout, { sidebarData, children: createElement(DashboardPage) }) },
    { path: '/dashboard', element: createElement(Layout, { sidebarData, children: createElement(DashboardPage) }) },
    { path: '/about', element: createElement(Layout, { sidebarData, children: createElement(AboutPage) }) },
    { path: '/features', element: createElement(Layout, { sidebarData, children: createElement(FeaturesPage) }) },
    { path: '/pricing', element: createElement(Layout, { sidebarData, children: createElement(PricingPage) }) },
    { path: '/faq', element: createElement(Layout, { sidebarData, children: createElement(FAQPage) }) },
    { path: '/contact', element: createElement(Layout, { sidebarData, children: createElement(ContactPage) }) },
    { path: '/blog', element: createElement(Layout, { sidebarData, children: createElement(BlogPage) }) },
    { path: '/blog/:postId', element: createElement(Layout, { sidebarData, children: createElement(IndividualBlogPostPage) }) },
    { path: '/terms-and-conditions', element: createElement(Layout, { sidebarData, children: createElement(TermsAndConditionsPage) }) },
    { path: '/color-palette', element: createElement(Layout, { sidebarData, children: createElement(ColorPalettePage) }) },
    { path: '/library', element: createElement(Layout, { sidebarData, children: createElement(LibraryPage) }) },
    { path: '/status-board', element: createElement(Layout, { sidebarData, children: createElement(StatusBoardPage) }) },
    { path: '*', element: createElement(NotFound) },
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
        url: '/about',
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: 'Landing', url: '/' },
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'About', url: '/about' },
          { title: 'Features', url: '/features' },
          { title: 'Pricing', url: '/pricing' },
          { title: 'FAQ', url: '/faq' },
          { title: 'Contact', url: '/contact' },
          { title: 'Blog', url: '/blog' },
          { title: 'Terms and Conditions', url: '/terms-and-conditions' },
          { title: 'StatusBoard', url: '/status-board' },
        ],
      },
      {
        title: 'Components',
        url: '/library',
        icon: Bot,
        items: [
          { title: 'Shadcn/ui Components', url: '/library' },
          { title: 'Color Palette', url: '/color-palette' },
        ],
      },
    ],
  },
};
```

### Utilize Dynamic Imports

Use dynamic imports to load route components based on the path definitions. This can help reduce redundancy and improve performance by loading components only when needed.

Example:
```typescript
import { lazy } from 'react';

const LandingPage = lazy(() => import('../components/landing-page/LandingPage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage'));
const DashboardPage = lazy(() => import('../components/pages/dashboard/DashboardPage'));
const FAQPage = lazy(() => import('../components/pages/FAQPage'));
const FeaturesPage = lazy(() => import('../components/pages/FeaturesPage'));
const PricingPage = lazy(() => import('../components/pages/PricingPage'));
const ContactPage = lazy(() => import('../components/pages/ContactPage'));
const BlogPage = lazy(() => import('../components/pages/BlogPage'));
const IndividualBlogPostPage = lazy(() => import('../components/pages/IndividualBlogPostPage'));
const TermsAndConditionsPage = lazy(() => import('../components/pages/TermsAndConditionsPage'));
const ColorPalettePage = lazy(() => import('../components/pages/ColorPalettePage'));
const LibraryPage = lazy(() => import('../components/pages/LibraryPage'));
const StatusBoardPage = lazy(() => import('../components/pages/StatusBoardPage'));
const NotFound = lazy(() => import('../components/NotFound'));

export const routes: AppRoute[] = [
  { path: config.paths.landing, element: createElement(LandingPage) },
  { path: config.paths.home, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(DashboardPage) }) },
  { path: config.paths.dashboard, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(DashboardPage) }) },
  { path: config.paths.about, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(AboutPage) }) },
  { path: config.paths.features, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(FeaturesPage) }) },
  { path: config.paths.pricing, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(PricingPage) }) },
  { path: config.paths.faq, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(FAQPage) }) },
  { path: config.paths.contact, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(ContactPage) }) },
  { path: config.paths.blog, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(BlogPage) }) },
  { path: config.paths.blogPost, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(IndividualBlogPostPage) }) },
  { path: config.paths.termsAndConditions, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(TermsAndConditionsPage) }) },
  { path: config.paths.components.colorPalette, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(ColorPalettePage) }) },
  { path: config.paths.components.libraryPage, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(LibraryPage) }) },
  { path: config.paths.statusBoard, element: createElement(Layout, { sidebarData: config.sidebarData, children: createElement(StatusBoardPage) }) },
  { path: config.paths.notFound, element: createElement(NotFound) },
];
```

## Guidelines for Developers

### Adding a New Route

1. Define the new path in the `paths` object in `apps/demo/src/app/constants/paths.ts`.
2. Add a new entry to the `routes` array in `apps/demo/src/app/data/routes.ts` with the path and element.
3. Update the `sidebarData` object in `apps/demo/src/app/data/sidebarData.ts` to include the new route in the navigation.

### Updating an Existing Route

1. Update the path in the `paths` object in `apps/demo/src/app/constants/paths.ts`.
2. Modify the corresponding entry in the `routes` array in `apps/demo/src/app/data/routes.ts`.
3. Update the `sidebarData` object in `apps/demo/src/app/data/sidebarData.ts` to reflect the changes in the navigation.

### Removing a Route

1. Remove the path from the `paths` object in `apps/demo/src/app/constants/paths.ts`.
2. Delete the corresponding entry from the `routes` array in `apps/demo/src/app/data/routes.ts`.
3. Update the `sidebarData` object in `apps/demo/src/app/data/sidebarData.ts` to remove the route from the navigation.
