import { FC } from 'react';
import { Button } from '@rwoc/shared/components/ui/button';

interface CommunitySectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

const CommunitySection: FC<CommunitySectionProps> = ({ title, description, buttonText, buttonAction }) => {
  return (
    <section className="text-center py-20 w-full">
      <h2 className="text-4xl font-bold mb-6 text-primary-foreground">{title}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground">{description}</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          onClick={buttonAction}
          className="bg-background text-foreground hover:bg-primary/90 hover:text-background"
        >
          {buttonText}
        </Button>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">Testimonials</h3>
        <blockquote className="text-lg italic mb-4">"React Weapons of Choice has transformed our development process!" - Jane Doe</blockquote>
        <blockquote className="text-lg italic mb-4">"A must-have for any serious React developer." - John Smith</blockquote>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">Community Stats</h3>
        <p className="text-lg mb-2">500+ contributors</p>
        <p className="text-lg mb-2">10k stars on GitHub</p>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <img src="./github-logo.png" alt="GitHub" className="w-12 h-12" />
        <img src="./discord-logo.png" alt="Discord" className="w-12 h-12" />
      </div>
    </section>
  );
};

export { CommunitySection };
