/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { Switch } from 'react-router-dom';

const div1CSS = css`
flex: 1;
display: flex;
flex-direction: column;
`;

type RootLayoutsContainerProps = {
  layouts?: React.ReactNode;
  redirects?: React.ReactNode;
};

export const RootLayoutsContainer: React.FC<RootLayoutsContainerProps> = (
  symbolProps,
) => {
  return (
    <div css={div1CSS}>
      <Switch>{[symbolProps.layouts, symbolProps.redirects]}</Switch>
    </div>
  );
};
