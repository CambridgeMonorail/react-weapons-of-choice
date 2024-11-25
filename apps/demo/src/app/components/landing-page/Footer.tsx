import React from 'react';
import { Github, Twitter } from 'lucide-react';

interface FooterProps {
  navigationLinks: { text: string; url: string }[];
  socialMediaIcons: { icon: React.ElementType; url: string }[];
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ navigationLinks, socialMediaIcons, copyrightText }) => {
  return (
    <footer className="text-center py-8 bg-blue-600 text-white w-full">
      <div className="flex justify-center space-x-4 mb-4">
        {navigationLinks.map((link, index) => (
          <a key={index} href={link.url} className="hover:underline">
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        {socialMediaIcons.map((icon, index) => (
          <a key={index} href={icon.url} className="hover:underline">
            <icon.icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <p className="mt-4">{copyrightText}</p>
    </footer>
  );
};

export default Footer;
