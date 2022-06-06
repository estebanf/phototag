/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { Route } from 'shared/components';

const div1CSS = css`
display: flex;
flex: 1 1 0%;
flex-direction: column;
height: 100%;
`;

type EmptyPageLayoutProps = {
  path?: any;
  exact?: boolean;
  content?: React.ReactNode;
  header?: React.ReactNode;
};

export const EmptyPageLayout: React.FC<EmptyPageLayoutProps> = (
  symbolProps,
) => {
  return (
    <Route path={symbolProps.path} exact={true} authAccess="any">
      <div css={div1CSS}>{symbolProps.content}</div>
    </Route>
  );
};
