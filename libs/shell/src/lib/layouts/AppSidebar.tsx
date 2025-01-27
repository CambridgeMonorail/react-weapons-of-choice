'use client';

import * as React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@erisfy/shadcnui';
import { useSidebarData } from './sidebarContext';
import { TeamSwitcher } from '../nav/TeamSwitcher';
import { NavMain } from '../nav/NavMain';
import { NavUser } from '../nav/NavUser';

/**
 * AppSidebar component
 * 
 * This component renders the sidebar of the application. It uses the `sidebarData` object
 * to populate the user information, team switcher, and navigation items.
 * 
 * The sidebar is composed of:
 * - SidebarHeader: Contains the TeamSwitcher component to switch between different teams.
 * - SidebarContent: Contains the NavMain component to display the main navigation items.
 * - SidebarFooter: Contains the NavUser component to display user information.
 * - SidebarRail: An additional sidebar rail for extra functionality or icons.
 * 
 * The `sidebarData` object is imported from the data directory and contains:
 * - user: Information about the current user (name, email, avatar).
 * - teams: List of teams the user is part of, each with a name, logo, and plan.
 * - navMain: List of main navigation items, each with a title, URL, icon, and optional sub-items.
 * 
 * To extend or modify the sidebar:
 * 1. Update the `sidebarData` object in the data directory.
 * 2. Modify the components (NavMain, NavUser, TeamSwitcher) as needed.
 * 
 * @param {React.ComponentProps<typeof Sidebar>} props - Props passed to the Sidebar component.
 * @returns {JSX.Element} The rendered AppSidebar component.
 */
export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>): JSX.Element => {
  const sidebarData = useSidebarData();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
