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

const baseUrl = import.meta.env.BASE_URL;

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'RWOC Inc',
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
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'About',
          url: `${baseUrl}about`,
        },
        {
          title: 'Features',
          url: `${baseUrl}features`,
        },
        {
          title: 'Pricing',
          url: `${baseUrl}pricing`,
        },
        {
          title: 'FAQ',
          url: `${baseUrl}faq`,
        },
        {
          title: 'Contact',
          url: `${baseUrl}contact`,
        },
        {
          title: 'Blog',
          url: `${baseUrl}blog`,
        },
        {
          title: 'Terms and Conditions',
          url: `${baseUrl}terms-and-conditions`,
        },
      ],
    },
    {
      title: 'Components',
      url: '#',
      icon: Bot,
      items: [
        { title: 'Demo Button', url: `${baseUrl}components/demo-button` },
        { title: 'Demo Card', url: `${baseUrl}components/demo-card` },
        { title: 'Demo Chart', url: `${baseUrl}components/demo-chart` },
        { title: 'Demo Dialog', url: `${baseUrl}components/demo-dialog` },
        { title: 'Demo Dropdown', url: `${baseUrl}components/demo-dropdown` },
        { title: 'Demo Form', url: `${baseUrl}components/demo-form` },
        { title: 'Demo Tabs', url: `${baseUrl}components/demo-tabs` },
        { title: 'Demo Toggle', url: `${baseUrl}components/demo-toggle` },
        { title: 'Demo Tooltip', url: `${baseUrl}components/demo-tooltip` },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
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
