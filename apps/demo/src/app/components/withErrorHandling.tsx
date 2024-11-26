import React from 'react';
import { useErrorHandling } from '../hooks/useErrorHandling';
import { NotFound } from './NotFound';

const withErrorHandling = (WrappedComponent: React.ComponentType) => {
  const definedRoutes = ['/', '/home', '/buttons', '/cards', '/forms', '/dialogs', '/dropdowns', '/tabs', '/toggles', '/tooltips', '/charts'];

  const HOC: React.FC = (props) => {
    const isNotFound = useErrorHandling(definedRoutes);

    if (isNotFound) {
      return <NotFound />;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withErrorHandling;
