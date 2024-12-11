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
        { title: 'Color Palette', url: paths.colorPalette },
        { title: 'StatusBoard', url: paths.statusBoard },
      ],
    },
    {
      title: 'Components',
      url: paths.components.demoButton,
      icon: Bot,
      items: [
        { title: 'Demo Button', url: paths.components.demoButton },
        { title: 'Demo Card', url: paths.components.demoCard },
        { title: 'Demo Chart', url: paths.components.demoChart },
        { title: 'Demo Dialog', url: paths.components.demoDialog },
        { title: 'Demo Dropdown', url: paths.components.demoDropdown },
        { title: 'Demo Form', url: paths.components.demoForm },
        { title: 'Demo Tabs', url: paths.components.demoTabs },
        { title: 'Demo Toggle', url: paths.components.demoToggle },
        { title: 'Demo Tooltip', url: paths.demoTooltip },
      ],
    },
    {
      title: 'Documentation',
      url: paths.notFound,
      icon: BookOpen,
      items: [
        { title: 'Introduction', url: paths.notFound },
        { title: 'Get Started', url: paths.notFound },
        { title: 'Tutorials', url: paths.notFound },
        { title: 'Changelog', url: paths.notFound },
      ],
    },
    {
      title: 'Settings',
      url: paths.notFound,
      icon: Settings2,
      items: [
        { title: 'General', url: paths.notFound },
        { title: 'Team', url: paths.notFound },
        { title: 'Billing', url: paths.notFound },
        { title: 'Limits', url: paths.notFound },
      ],
    },
  ],
};