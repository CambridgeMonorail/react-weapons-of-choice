import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";

export interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  tooltip?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, tooltip }) => {
  return (
    <Tooltip content={tooltip}>
      <Button variant="ghost" size="icon" onClick={onClick} aria-label={label}>
        {icon}
        <span className="sr-only">{label}</span>
      </Button>
    </Tooltip>
  );
};

/**
 * Props for the ActionButtons component.
 */
export interface ActionButtonsProps {
  buttons: ActionButtonProps[];
}

/**
 * ActionButtons component.
 * 
 * This component renders a sequence of ActionButton components.
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({ buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <ActionButton key={index} {...button} />
      ))}
    </>
  );
};
