import { FC } from 'react';
import { LucideProps } from 'lucide-react';

interface FooterProps {
  navigationLinks: { text: string; url: string }[];
  socialMediaIcons: { icon: FC<LucideProps>; url: string }[];
  copyrightText: string;
}

export const Footer: FC<FooterProps> = ({
  navigationLinks,
  socialMediaIcons,
  copyrightText
}) => {
  return (
    <footer className="text-center py-8 text-primary-foreground w-full bg-gradient-to-r from-gray-800 to-black">
      <nav className="flex justify-center space-x-4 mb-4" aria-label="Footer navigation">
        {navigationLinks.map((link, index) => (
          <a key={index} href={link.url} className="hover:underline">
            {link.text}
          </a>
        ))}
      </nav>
      <div className="flex justify-center space-x-4">
        {socialMediaIcons.map((iconData, index) => (
          <a key={index} href={iconData.url} className="hover:scale-110 transition-transform" aria-label={`Link to ${iconData.url}`}>
            <iconData.icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <p className="mt-4">{copyrightText}</p>
      <p className="mt-2 text-sm text-muted">Start building with React Weapons of Choice today!</p>
    </footer>
  );
};
