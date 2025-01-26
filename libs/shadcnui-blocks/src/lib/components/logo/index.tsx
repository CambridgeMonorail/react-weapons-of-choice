import { FC, SVGProps } from 'react';
import { ShadcnLogo } from './logos/ShadcnLogo';
import { TailwindLogo } from './logos/TailwindLogo';
import { NxLogo } from './logos/NxLogo';
import { PnpmLogo } from './logos/PnpmLogo';
import { ReactLogo } from './logos/ReactLogo';
import { StorybookLogo } from './logos/StorybookLogo';
import { ViteLogo } from './logos/ViteLogo';

// Map of available logos
const logoMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  shadcn: ShadcnLogo,
  nx: NxLogo,
  pnpm: PnpmLogo,
  react: ReactLogo,
  tailwind: TailwindLogo,
  storybook: StorybookLogo,
  vite: ViteLogo,
};

// Wrapper component to handle title and ariaLabel
const LogoWrapper: FC<
  SVGProps<SVGSVGElement> & { title?: string; ariaLabel?: string }
> = ({ title, ariaLabel, children, ...props }) => (
  <svg {...props} aria-label={ariaLabel}>
    {title && <title>{title}</title>}
    {children}
  </svg>
);

// Reusable Logo component
interface LogoProps extends Omit<SVGProps<SVGSVGElement>, 'title'> {
  name: keyof typeof logoMap;
  title?: string;
  ariaLabel?: string;
  logoClassName?: string; // Optional custom class name for logo
  nameClassName?: string; // Optional custom class name for name
  displayName?: string; // Optional display name
}

/**
 * Logo component that renders different logos based on the provided name.
 */
const Logo: FC<LogoProps> = ({
  name,
  title,
  ariaLabel,
  logoClassName,
  nameClassName,
  displayName,
  ...props
}) => {
  const LogoComponent = logoMap[name];

  if (!LogoComponent) {
    console.warn(`Logo "${name}" not found. Please add it to the logoMap.`);
    return null;
  }

  return (
    <div className="inline-flex items-center flex-none">
      <LogoWrapper
        title={title}
        ariaLabel={ariaLabel}
        className={`w-auto ${logoClassName || ''}`}
        {...props}
      >
        <LogoComponent />
      </LogoWrapper>
      {displayName && (
        <span
          className={`ml-2 text-lg font-semibold whitespace-nowrap ${nameClassName}`}
        >
          {displayName}
        </span>
      )}
    </div>
  );
};

export { Logo, LogoProps };
