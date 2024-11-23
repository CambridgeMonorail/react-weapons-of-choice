import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@react-monorepo/shared/components/ui/toaster';

import Layout from './components/Layout';
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

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonDemo />} />
        <Route path="/cards" element={<CardDemo />} />
        <Route path="/forms" element={<FormDemo />} />
        <Route path="/dialogs" element={<DialogDemo />} />
        <Route path="/dropdowns" element={<DropdownDemo />} />
        <Route path="/tabs" element={<TabsDemo />} />
        <Route path="/toggles" element={<ToggleDemo />} />
        <Route path="/tooltips" element={<TooltipDemo />} />
        <Route path="/charts" element={<ChartDemo />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;

