# Navigation Structure

## Table of Contents

1. [Introduction](#introduction)
2. [Current Navigation Structure](#current-navigation-structure)
   - [Navigation Configuration File](#navigation-configuration-file)
3. [Guidelines for Developers](#guidelines-for-developers)
   - [Adding a New Route](#adding-a-new-route)
   - [Updating an Existing Route](#updating-an-existing-route)
   - [Removing a Route](#removing-a-route)

## Introduction

This document provides an overview of the navigation structure for the React Single Page Application (SPA) within the Nrwl Nx Monorepo. The navigation structure is centralized in a single configuration file to ensure consistency and ease of maintenance. This document also includes guidelines for developers on how to add, update, and remove routes.

## Current Navigation Structure

The current navigation structure is centralized in a single configuration file:

1. `apps/client/src/app/constants/navigationConfig.ts`

### Navigation Configuration File

This file centralizes all route paths, routes, and sidebar data in a single object. This ensures consistency and makes it easier to update paths, routes, and sidebar data in one place.

Example:

```typescript
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
import { StatusBoardPage } from '../.pages/status-board/StatusBoard';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/TermsAndConditions';
import { Layout } from '@rwoc/shell';

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

const createRoute = (path: string, component: React.ComponentType, useLayout = true) => {
  return useLayout
    ? { path, element: createElement(Layout, { sidebarData, children: createElement(component) }) }
    : { path, element: createElement(component) };
};

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

export const navigationConfig = {
  paths,
  sidebarData,
  routes,
};
```

## Guidelines for Developers

### Adding a New Route

1. Define the new path in the `paths` object in `apps/client/src/app/constants/navigationConfig.ts`.
2. Add a new entry to the `routes` array in `apps/client/src/app/constants/navigationConfig.ts` with the path and element.
3. Update the `sidebarData` object in `apps/client/src/app/constants/navigationConfig.ts` to include the new route in the navigation.

### Updating an Existing Route

1. Update the path in the `paths` object in `apps/client/src/app/constants/navigationConfig.ts`.
2. Modify the corresponding entry in the `routes` array in `apps/client/src/app/constants/navigationConfig.ts`.
3. Update the `sidebarData` object in `apps/client/src/app/constants/navigationConfig.ts` to reflect the changes in the navigation.

### Removing a Route

1. Remove the path from the `paths` object in `apps/client/src/app/constants/navigationConfig.ts`.
2. Delete the corresponding entry from the `routes` array in `apps/client/src/app/constants/navigationConfig.ts`.
3. Update the `sidebarData` object in `apps/client/src/app/constants/navigationConfig.ts` to remove the route from the navigation.
