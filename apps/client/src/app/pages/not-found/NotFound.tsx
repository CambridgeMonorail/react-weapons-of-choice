import { FC, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound: FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
      <p className="text-lg mb-4 text-foreground">Page Not Found</p>
      <p className="text-sm mb-4 text-muted">
        Attempted to access: {currentPath}
      </p>
      <Link to="/" className="text-primary hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export { NotFound };
