import { useState } from 'react';

import { matchPath, useLocation } from 'react-router-dom';

import { APP_ROUTES } from 'shared/constants';

export type Route = {
  path: string;
  title?: string;
  exact?: boolean;
  strict?: boolean;
};

export type RoutesReturnType = {
  list: Route[];
  currentRoute?: Route;
  getRouteByPath: (path: string) => Route | undefined;
};

export const useRoutes = (): RoutesReturnType => {
  const location = useLocation();

  const currentRoute = APP_ROUTES.find(route =>
    matchPath(location.pathname, { path: route.path, exact: true }),
  );
  const getRouteByPath = (path: string) =>
    APP_ROUTES.find(route => matchPath(route.path, { path, exact: true }));

  return { list: APP_ROUTES, currentRoute, getRouteByPath };
};
