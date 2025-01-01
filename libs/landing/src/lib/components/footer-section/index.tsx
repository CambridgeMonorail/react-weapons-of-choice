import { FC } from 'react';
import { LucideProps } from 'lucide-react';

/**
 * Props for the Footer component.
 */
interface FooterProps {
  /**
   * Array of navigation links to be displayed in the footer.
   * Each link should have a text and a URL.
   */
  navigationLinks: { text: string; url: string }[];

  /**
   * Array of social media icons to be displayed in the footer.
   * Each icon should be a React component and a URL.
   */
  socialMediaIcons: { icon: FC<LucideProps>; url: string; target?: string; rel?: string }[];

  /**
   * Text to be displayed as the copyright information.
   */
  copyrightText: string;

  /**
   * Additional class names to apply to the footer element.
   */
  className?: string;

  /**
   * Background color for the footer.
   */
  backgroundColor?: string;

  /**
   * Text color for the footer.
   */
  textColor?: string;
}

/**
 * Footer component for displaying navigation links, social media icons, and copyright information.
 */
export const Footer: FC<FooterProps> = ({
  navigationLinks,
  socialMediaIcons,
  copyrightText,
  className,
  backgroundColor = 'bg-primary',
  textColor = 'text-primary-foreground'
}) => {
  return (
    <footer className={`${backgroundColor} ${textColor} text-center py-8 w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      <nav className="flex flex-wrap justify-center space-x-4 mb-4" aria-label="Footer navigation">
        {navigationLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <div className="flex flex-wrap justify-center space-x-4">
        {socialMediaIcons.map((iconData, index) => (
          <a
            key={index}
            href={iconData.url}
            className="hover:underline"
            aria-label={`Link to ${iconData.url}`}
            target={iconData.target}
            rel={iconData.rel}
          >
            <iconData.icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm sm:text-base">{copyrightText}</p>
    </footer>
  );
};
