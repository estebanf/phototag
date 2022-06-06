import { forwardRef, Ref } from 'react';

import { useAuth } from '@8base-react/auth';
import {
  Route as ReactRoute,
  Redirect as ReactRedirect,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

type RouteProps = ReactRouteProps & {
  /**
   * `private` means route available only for authorized users
   * `public` means route available only for not-authorized users
   * `any` means route available for any users
   */
  authAccess: 'private' | 'public' | 'any';
};

export const Route = forwardRef(
  ({ authAccess, children, ...rest }: RouteProps, ref: Ref<HTMLDivElement>) => {
    const { isAuthorized } = useAuth();

    if (isAuthorized && authAccess === 'public') {
      return <ReactRedirect to="/" />;
    }

    if (!isAuthorized && authAccess === 'private') {
      return <ReactRedirect to="/login" />;
    }

    return <ReactRoute {...rest}>{children}</ReactRoute>;
  },
);
