import { Route, Routes } from 'react-router-dom';
import { Toaster } from '@rwoc/shared/components/ui/toaster';

import { Layout } from './components/Layout';
import Home from './components/Home';
import ButtonDemo from './components/ButtonDemo';
import CardDemo from './components/CardDemo';
import FormDemo from './components/FormDemo';
import DialogDemo from './components/DialogDemo';
import DropdownDemo from './components/DropdownDemo';
import TabsDemo from './components/TabsDemo';
import ToggleDemo from './components/ToggleDemo';
import TooltipDemo from './components/TooltipDemo';
import ChartDemo from './components/ChartDemo';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Layout></Layout>} />
{/*         <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/buttons" element={<Layout><ButtonDemo /></Layout>} />
        <Route path="/cards" element={<Layout><CardDemo /></Layout>} />
        <Route path="/forms" element={<Layout><FormDemo /></Layout>} />
        <Route path="/dialogs" element={<Layout><DialogDemo /></Layout>} />
        <Route path="/dropdowns" element={<Layout><DropdownDemo /></Layout>} />
        <Route path="/tabs" element={<Layout><TabsDemo /></Layout>} />
        <Route path="/toggles" element={<Layout><ToggleDemo /></Layout>} />
        <Route path="/tooltips" element={<Layout><TooltipDemo /></Layout>} />
        <Route path="/charts" element={<Layout><ChartDemo /></Layout>} /> */}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
