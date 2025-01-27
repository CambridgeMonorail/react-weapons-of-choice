import { ReactNode, FC } from 'react';
import {
  Button,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@erisfy/shadcnui';

/**
 * Props for the ActionButton component.
 *
 * This interface defines the structure for the props that are passed to the ActionButton component,
 * which includes an icon, label, onClick handler, and optional tooltip.
 */
export interface ActionButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  tooltip?: string;
}

/**
 * ActionButton component.
 *
 * This component renders a button with an icon and an optional tooltip.
 *
 * ## Usage Guidelines:
 *
 * The ActionButton component is designed to be used in contexts where a button with an icon and
 * optional tooltip is needed. It provides a consistent styling and accessibility features.
 */
export const ActionButton: FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
  tooltip,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          aria-label={label}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

/**
 * Props for the ActionButtons component.
 *
 * This interface defines the structure for the props that are passed to the ActionButtons component,
 * which includes an array of ActionButtonProps objects and an optional onButtonClick handler.
 * Each object in the array represents a button with its own icon, label, onClick handler, and optional tooltip.
 */
export interface ActionButtonsProps {
  buttons: ActionButtonProps[];
  onButtonClick?: (index: number) => void;
}

/**
 * ActionButtons component.
 *
 * This component renders a sequence of ActionButton components.
 *
 * ## Usage Guidelines:
 *
 * The ActionButtons component is primarily designed to be used in a header or other contexts where
 * a number of action buttons need to be rendered together. It provides a convenient way to group
 * multiple action buttons with consistent styling and optional tooltips.
 */
export const ActionButtons: FC<ActionButtonsProps> = ({ buttons, onButtonClick }) => {
  return (
    <TooltipProvider>
      {buttons.map((button, index) => (
        <ActionButton
          key={index}
          {...button}
          onClick={() => {
            button.onClick?.();
            onButtonClick?.(index);
          }}
        />
      ))}
    </TooltipProvider>
  );
};
