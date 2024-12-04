import { FC } from 'react';
import { Button } from '@rwoc/shadcnui/components/ui/button';

interface CommunitySectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  isDarkBackground?: boolean; // New prop
}

const CommunitySection: FC<CommunitySectionProps> = ({ title, description, buttonText, buttonAction, isDarkBackground }) => {
  return (
    <section className="text-center py-20 w-full">
      <h2 className={`text-4xl font-bold mb-6 ${isDarkBackground ? 'text-primary-foreground' : 'text-primary'}`}>{title}</h2>
      <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkBackground ? 'text-primary-foreground' : 'text-primary'}`}>{description}</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          onClick={buttonAction}
          className="bg-background text-foreground hover:bg-primary/90 hover:text-background"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export { CommunitySection };
