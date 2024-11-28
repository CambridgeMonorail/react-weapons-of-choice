import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';
import { useEffect, useState } from 'react';

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
import { Dashboard } from './components/Dashboard';
import { ButtonDemo } from './components/component-demos/ButtonDemo';
import CardDemo from './components/component-demos/CardDemo';
import ChartDemo from './components/component-demos/ChartDemo';
import DialogDemo from './components/component-demos/DialogDemo';
import DropdownDemo from './components/component-demos/DropdownDemo';
import FormDemo from './components/component-demos/FormDemo';
import TabsDemo from './components/component-demos/TabsDemo';
import ToggleDemo from './components/component-demos/ToggleDemo';
import TooltipDemo from './components/component-demos/TooltipDemo';
import { ColorPalettePage } from './components/pages/ColorPalettePage'; // P9084

function App() {
  const location = useLocation();
  const [baseUrl, setBaseUrl] = useState(import.meta.env.BASE_URL);

  useEffect(() => {
    console.log('App component mounted');
    return () => {
      console.log('App component unmounted');
    };
  }, []);

  useEffect(() => {
    console.log(`Navigating to ${location.pathname}`);
  }, [location]);

  useEffect(() => {
    const baseElement = document.querySelector('base');
    if (baseElement) {
      setBaseUrl(baseElement.getAttribute('href') || '/');
    }
    console.log(`Base URL set to ${baseUrl}`);
  }, [baseUrl]);

  return (
    <>
      <Routes>
        <Route path={`${baseUrl}`} element={<LandingPage />} />
        <Route path={`${baseUrl}home`} element={<Layout><Dashboard /></Layout>} />
        <Route path={`${baseUrl}about`} element={<Layout><AboutPage /></Layout>} />
        <Route path={`${baseUrl}features`} element={<Layout><FeaturesPage /></Layout>} />
        <Route path={`${baseUrl}pricing`} element={<Layout><PricingPage /></Layout>} />
        <Route path={`${baseUrl}faq`} element={<Layout><FAQPage /></Layout>} />
        <Route path={`${baseUrl}contact`} element={<Layout><ContactPage /></Layout>} />
        <Route path={`${baseUrl}blog`} element={<Layout><BlogPage /></Layout>} />
        <Route path={`${baseUrl}blog/:postId`} element={<Layout><IndividualBlogPostPage /></Layout>} />
        <Route path={`${baseUrl}terms-and-conditions`} element={<Layout><TermsAndConditionsPage /></Layout>} />
        <Route path={`${baseUrl}dashboard`} element={<Layout><Dashboard /></Layout>} />
        <Route path={`${baseUrl}components/demo-button`} element={<Layout><ButtonDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-card`} element={<Layout><CardDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-chart`} element={<Layout><ChartDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-dialog`} element={<Layout><DialogDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-dropdown`} element={<Layout><DropdownDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-form`} element={<Layout><FormDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-tabs`} element={<Layout><TabsDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-toggle`} element={<Layout><ToggleDemo /></Layout>} />
        <Route path={`${baseUrl}components/demo-tooltip`} element={<Layout><TooltipDemo /></Layout>} />
        <Route path={`${baseUrl}color-palette`} element={<Layout><ColorPalettePage /></Layout>} /> {/* Pfc6f */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
