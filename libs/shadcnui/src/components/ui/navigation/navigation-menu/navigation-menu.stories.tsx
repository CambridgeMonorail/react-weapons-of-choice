import { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport } from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Shadcnui/Navigation/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

/**
 * Default navigation menu demonstrating basic usage.
 */
export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

/**
 * Navigation menu with indicator.
 */
export const WithIndicator: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  ),
};

/**
 * Navigation menu with viewport.
 */
export const WithViewport: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  ),
};
