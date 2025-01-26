import React from "react";
import { Logo } from "@rwoc/shadcnui-blocks";
import { ActionButtons } from "@rwoc/shadcnui-blocks";

export interface HeaderProps {
  logo: React.ReactNode;
  actionButtons: React.ReactNode[];
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ logo, actionButtons, className = "" }) => {
  return (
    <header className={`bg-white shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">{logo}</div>
        <div className="flex items-center space-x-4">
          {actionButtons.map((button, index) => (
            <React.Fragment key={index}>{button}</React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};
