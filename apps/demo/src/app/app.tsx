import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (process.env.DEBUG === 'true') {
      console.log('App: component mounted');
    }
    return () => {
      if (process.env.DEBUG === 'true') {
        console.log('App: component unmounted');
      }
    };
  }, []);

  useEffect(() => {
    if (process.env.DEBUG === 'true') {
      console.log(`App: Navigating to ${location.pathname}`);
    }
  }, [location]);

  useEffect(() => {
    console.log('Rendering process started');
    return () => {
      console.log('Rendering process ended');
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Layout><Dashboard /></Layout>} />
        <Route path="about" element={<Layout><AboutPage /></Layout>} />
        <Route path="features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="faq" element={<Layout><FAQPage /></Layout>} />
        <Route path="contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="blog/:postId" element={<Layout><IndividualBlogPostPage /></Layout>} />
        <Route path="terms-and-conditions" element={<Layout><TermsAndConditionsPage /></Layout>} />
        <Route path="dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="components/demo-button" element={<Layout><ButtonDemo /></Layout>} />
        <Route path="components/demo-card" element={<Layout><CardDemo /></Layout>} />
        <Route path="components/demo-chart" element={<Layout><ChartDemo /></Layout>} />
        <Route path="components/demo-dialog" element={<Layout><DialogDemo /></Layout>} />
        <Route path="components/demo-dropdown" element={<Layout><DropdownDemo /></Layout>} />
        <Route path="components/demo-form" element={<Layout><FormDemo /></Layout>} />
        <Route path="components/demo-tabs" element={<Layout><TabsDemo /></Layout>} />
        <Route path="components/demo-toggle" element={<Layout><ToggleDemo /></Layout>} />
        <Route path="components/demo-tooltip" element={<Layout><TooltipDemo /></Layout>} />
        <Route path="color-palette" element={<Layout><ColorPalettePage /></Layout>} /> {/* Pfc6f */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
