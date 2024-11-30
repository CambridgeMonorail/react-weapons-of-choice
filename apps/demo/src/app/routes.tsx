import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy } from 'react';

import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { ErrorFallback } from './components/ErrorFallback';

const LandingPage = lazy(() => import('./components/landing-page/LandingPage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const FeaturesPage = lazy(() => import('./components/pages/FeaturesPage'));
const PricingPage = lazy(() => import('./components/pages/PricingPage'));
const FAQPage = lazy(() => import('./components/pages/FAQPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const BlogPage = lazy(() => import('./components/pages/BlogPage'));
const IndividualBlogPostPage = lazy(() => import('./components/pages/IndividualBlogPostPage'));
const TermsAndConditionsPage = lazy(() => import('./components/pages/TermsAndConditionsPage'));
const DashboardPage = lazy(() => import('./components/pages/dashboard/DashboardPage'));
const ButtonDemo = lazy(() => import('./components/component-demos/ButtonDemo'));
const CardDemo = lazy(() => import('./components/component-demos/CardDemo'));
const ChartDemo = lazy(() => import('./components/component-demos/ChartDemo'));
const DialogDemo = lazy(() => import('./components/component-demos/DialogDemo'));
const DropdownDemo = lazy(() => import('./components/component-demos/DropdownDemo'));
const FormDemo = lazy(() => import('./components/component-demos/FormDemo'));
const TabsDemo = lazy(() => import('./components/component-demos/TabsDemo'));
const ToggleDemo = lazy(() => import('./components/component-demos/ToggleDemo'));
const TooltipDemo = lazy(() => import('./components/component-demos/TooltipDemo'));
const ColorPalettePage = lazy(() => import('./components/pages/ColorPalettePage'));
const StatusBoardPage = lazy(() => import('./components/pages/StatusBoardPage'));

const routes = [
  {
    path: '/',
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </React.Suspense>
    ),
  },
  {
    path: 'home',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DashboardPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'about',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AboutPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'features',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <FeaturesPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'pricing',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <PricingPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'faq',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <FAQPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'contact',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ContactPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'blog',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <BlogPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'blog/:postId',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <IndividualBlogPostPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'terms-and-conditions',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <TermsAndConditionsPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'dashboard',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DashboardPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-button',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ButtonDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-card',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CardDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-chart',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ChartDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-dialog',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DialogDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-dropdown',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DropdownDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-form',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <FormDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-tabs',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <TabsDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-toggle',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ToggleDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'components/demo-tooltip',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <TooltipDemo />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'color-palette',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ColorPalettePage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: 'status-board',
    element: (
      <Layout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <StatusBoardPage />
        </React.Suspense>
      </Layout>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes };
