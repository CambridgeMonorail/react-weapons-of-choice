import React from 'react';

const ColorPalettePage: React.FC = () => {
  return (
    <div className="p-8 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">Color Palette</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-primary text-primary-foreground rounded-lg">
          Primary
        </div>
        <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
          Secondary
        </div>
        <div className="p-4 bg-muted text-muted-foreground rounded-lg">
          Muted
        </div>
        <div className="p-4 bg-accent text-accent-foreground rounded-lg">
          Accent
        </div>
      </div>
    </div>
  );
};

export { ColorPalettePage };
