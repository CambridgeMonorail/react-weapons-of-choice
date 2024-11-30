import { FC } from 'react';
import { Button } from "@rwoc/shared/components/ui/button";

const ButtonDemo: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Button Variants</h2>
      <div className="flex space-x-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <h2 className="text-2xl font-bold text-foreground">Button Sizes</h2>
      <div className="flex items-center space-x-2">
        <Button size="lg">Large</Button>
        <Button>Default</Button>
        <Button size="sm">Small</Button>
        <Button size="icon"><span role="img" aria-label="rocket" className="text-lg">🚀</span></Button>
      </div>
    </div>
  );
};

export { ButtonDemo };

