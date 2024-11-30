import { RouteObject } from 'react-router-dom';
import React from 'react';

export interface AppRoute extends RouteObject {
  path: string;
  element: React.ReactElement;
}