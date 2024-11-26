import { Route, Routes } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';

import { LandingPage } from './components/landing-page/LandingPage';
import { Layout } from './components/Layout';
import NotFound from './components/NotFound';
import AboutPage from './components/pages/AboutPage';
import FeaturesPage from './components/pages/FeaturesPage';
import PricingPage from './components/pages/PricingPage';
import FAQPage from './components/pages/FAQPage';
import ContactPage from './components/pages/ContactPage';
import BlogPage from './components/pages/BlogPage';
import IndividualBlogPostPage from './components/pages/IndividualBlogPostPage';
import TermsAndConditionsPage from './components/pages/TermsAndConditionsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Layout></Layout>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<IndividualBlogPostPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
