import { FC } from 'react';
import { Button } from '@rwoc/shared';

const NotFound: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4 text-primary-foreground">404</h1>
      <p className="text-lg mb-4 text-foreground">Page Not Found</p>
      <a href={`${baseUrl}`} className="text-primary hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export { NotFound };
