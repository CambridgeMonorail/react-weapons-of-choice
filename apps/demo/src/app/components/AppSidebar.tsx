'use client';

import * as React from 'react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@rwoc/shared';
import { NavMain } from './NavMain';
import { NavUser } from './NavUser';
import { TeamSwitcher } from './TeamSwitcher';
import { sidebarData } from '../data/sidebarData';
import { SidebarConfiguration } from '../types/sidebarTypes';

export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
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
