/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { useRoutes } from 'shared/hooks';
import { Switch } from 'react-router-dom';

const div1CSS = css`
display: flex;
flex: 1 1 0%;
flex-direction: column;
height: 100%;
`;

type RouterSwitchSymbolProps = {
  routes?: React.ReactNode;
  redirects?: React.ReactNode;
};

export const RouterSwitchSymbol: React.FC<RouterSwitchSymbolProps> = (
  symbolProps,
) => {
  const routes = useRoutes();

  return (
    <div css={div1CSS}>
      <Switch>{[symbolProps.routes, symbolProps.redirects]}</Switch>
    </div>
  );
};
