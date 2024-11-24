import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useErrorHandling = (definedRoutes: string[]) => {
  const [isNotFound, setIsNotFound] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const routeExists = definedRoutes.includes(currentPath);
    setIsNotFound(!routeExists);
  }, [location, definedRoutes]);

  return isNotFound;
};

export default useErrorHandling;
