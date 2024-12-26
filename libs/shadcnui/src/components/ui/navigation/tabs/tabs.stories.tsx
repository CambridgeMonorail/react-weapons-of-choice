import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Shadcnui/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

/**
 * Default tabs demonstrating basic usage.
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with different sizes.
 */
export const WithSizes: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1" className="text-sm">Small Tab</TabsTrigger>
        <TabsTrigger value="tab2" className="text-lg">Large Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Small Tab</TabsContent>
      <TabsContent value="tab2">Content for Large Tab</TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with icons.
 */
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">
          <span className="mr-2">🏠</span> Home
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <span className="mr-2">📄</span> Documents
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Home Tab</TabsContent>
      <TabsContent value="tab2">Content for Documents Tab</TabsContent>
    </Tabs>
  ),
};
