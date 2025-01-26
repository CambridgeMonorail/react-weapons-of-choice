import { RouteObject } from 'react-router-dom';
import { ReactElement } from 'react';

export interface AppRoute extends Omit<RouteObject, 'path' | 'element'> {
  path: string;
  element: ReactElement;
}
