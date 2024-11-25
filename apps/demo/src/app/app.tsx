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
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Layout></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
