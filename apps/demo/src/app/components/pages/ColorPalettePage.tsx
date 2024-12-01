import React from 'react';

const baseColors = [
  { bg: 'bg-background', fg: 'text-foreground', label: 'Background' },
  { bg: 'bg-foreground', fg: 'text-background', label: 'Foreground' },
  { bg: 'bg-card', fg: 'text-card-foreground', label: 'Card' },
  { bg: 'bg-card-foreground', fg: 'text-card', label: 'Card Foreground' },
  { bg: 'bg-popover', fg: 'text-popover-foreground', label: 'Popover' },
  { bg: 'bg-popover-foreground', fg: 'text-popover', label: 'Popover Foreground' },
  { bg: 'bg-primary', fg: 'text-primary-foreground', label: 'Primary' },
  { bg: 'bg-primary-foreground', fg: 'text-primary', label: 'Primary Foreground' },
  { bg: 'bg-secondary', fg: 'text-secondary-foreground', label: 'Secondary' },
  { bg: 'bg-secondary-foreground', fg: 'text-secondary', label: 'Secondary Foreground' },
  { bg: 'bg-muted', fg: 'text-muted-foreground', label: 'Muted' },
  { bg: 'bg-muted-foreground', fg: 'text-muted', label: 'Muted Foreground' },
  { bg: 'bg-accent', fg: 'text-accent-foreground', label: 'Accent' },
  { bg: 'bg-accent-foreground', fg: 'text-accent', label: 'Accent Foreground' },
  { bg: 'bg-destructive', fg: 'text-destructive-foreground', label: 'Destructive' },
  { bg: 'bg-destructive-foreground', fg: 'text-destructive', label: 'Destructive Foreground' },
  { bg: 'bg-border', fg: 'text-foreground', label: 'Border' },
  { bg: 'bg-input', fg: 'text-foreground', label: 'Input' },
  { bg: 'bg-ring', fg: 'text-foreground', label: 'Ring' },
  { bg: 'bg-radius', fg: 'text-foreground', label: 'Radius' },
  { bg: 'bg-chart-1', fg: 'text-foreground', label: 'Chart 1' },
  { bg: 'bg-chart-2', fg: 'text-foreground', label: 'Chart 2' },
  { bg: 'bg-chart-3', fg: 'text-foreground', label: 'Chart 3' },
  { bg: 'bg-chart-4', fg: 'text-foreground', label: 'Chart 4' },
  { bg: 'bg-chart-5', fg: 'text-foreground', label: 'Chart 5' },
  { bg: 'bg-sidebar-background', fg: 'text-sidebar-foreground', label: 'Sidebar Background' },
  { bg: 'bg-sidebar-foreground', fg: 'text-sidebar-background', label: 'Sidebar Foreground' },
  { bg: 'bg-sidebar-primary', fg: 'text-sidebar-primary-foreground', label: 'Sidebar Primary' },
  { bg: 'bg-sidebar-primary-foreground', fg: 'text-sidebar-primary', label: 'Sidebar Primary Foreground' },
  { bg: 'bg-sidebar-accent', fg: 'text-sidebar-accent-foreground', label: 'Sidebar Accent' },
  { bg: 'bg-sidebar-accent-foreground', fg: 'text-sidebar-accent', label: 'Sidebar Accent Foreground' },
  { bg: 'bg-sidebar-border', fg: 'text-foreground', label: 'Sidebar Border' },
  { bg: 'bg-sidebar-ring', fg: 'text-foreground', label: 'Sidebar Ring' },
];

const ColorPalettePage = () => {
  return (
    <div className="p-6 m-4 space-y-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4 text-primary">Color Palette</h1>
      <h2 className="text-2xl font-semibold mb-2 text-secondary">Base Colors</h2>
      <p className="mb-4 text-muted">Use the switcher in the header bar to see the dark theme colors.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {baseColors.map((color) => (
          <div key={color.label} className={`p-4 ${color.bg} ${color.fg} rounded-lg`}>
            {color.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export { ColorPalettePage };
