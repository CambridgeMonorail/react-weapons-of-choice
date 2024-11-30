'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Swords,
} from 'lucide-react';

import { NavMain } from './NavMain';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@rwoc/shared';
import { NavProjects } from './NavProjects';
import { NavUser } from './NavUser';
import { TeamSwitcher } from './TeamSwitcher';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
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
    {
      name: 'Other Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Pages',
      url: '/about',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
        },
        {
          title: 'About',
          url: '/about',
        },
        {
          title: 'Features',
          url: '/features',
        },
        {
          title: 'Pricing',
          url: '/pricing',
        },
        {
          title: 'FAQ',
          url: '/faq',
        },
        {
          title: 'Contact',
          url: '/contact',
        },
        {
          title: 'Blog',
          url: '/blog',
        },
        {
          title: 'Terms and Conditions',
          url: '/terms-and-conditions',
        },
        {
          title: 'Color Palette',
          url: '/color-palette',
        },
        { title: 'StatusBoard', url: '/status-board' },
      ],
    },
    {
      title: 'Components',
      url: '/components/demo-button',
      icon: Bot,
      items: [
        { title: 'Demo Button', url: '/components/demo-button' },
        { title: 'Demo Card', url: '/components/demo-card' },
        { title: 'Demo Chart', url: '/components/demo-chart' },
        { title: 'Demo Dialog', url: '/components/demo-dialog' },
        { title: 'Demo Dropdown', url: '/components/demo-dropdown' },
        { title: 'Demo Form', url: '/components/demo-form' },
        { title: 'Demo Tabs', url: '/components/demo-tabs' },
        { title: 'Demo Toggle', url: '/components/demo-toggle' },
        { title: 'Demo Tooltip', url: '/components/demo-tooltip' },
      ],
    },
    {
      title: 'Documentation',
      url: '/#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '/#',
        },
        {
          title: 'Get Started',
          url: '/#',
        },
        {
          title: 'Tutorials',
          url: '/#',
        },
        {
          title: 'Changelog',
          url: '/#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '/#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '/#',
        },
        {
          title: 'Team',
          url: '/#',
        },
        {
          title: 'Billing',
          url: '/#',
        },
        {
          title: 'Limits',
          url: '/#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '/#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '/#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '/#',
      icon: Map,
    },
  ],
};

export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
