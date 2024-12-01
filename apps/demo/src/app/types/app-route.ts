import { RouteObject } from 'react-router-dom';
import React from 'react';

export interface AppRoute extends Omit<RouteObject, 'path' | 'element'> {
  path: string;
  element: React.ReactElement;
}