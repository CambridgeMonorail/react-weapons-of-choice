import { FC, ComponentType } from 'react';
import { useErrorHandling } from '../hooks/useErrorHandling';
import { NotFound } from '../pages/not-found/NotFound';

export const withErrorHandling = (
  WrappedComponent: ComponentType<Record<string, unknown>>
) => {
  const definedRoutes = [
    '/',
    '/home',
    '/buttons',
    '/cards',
    '/forms',
    '/dialogs',
    '/dropdowns',
    '/tabs',
    '/toggles',
    '/tooltips',
    '/charts',
  ];

  const HOC: FC<Record<string, unknown>> = (props) => {
    const isNotFound = useErrorHandling(definedRoutes);

    if (isNotFound) {
      return <NotFound />;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
