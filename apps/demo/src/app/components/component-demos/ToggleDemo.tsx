import React from 'react';
import { Toggle } from "@rwoc/shared/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

const ToggleDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-2">
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
      <Toggle>Default Toggle</Toggle>
      <Toggle variant="outline">Outline Toggle</Toggle>
    </div>
  );
};

export default ToggleDemo;
