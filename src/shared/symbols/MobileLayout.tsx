/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { Route, RouteLayout } from 'shared/components';

const wrapper1CSS = css`
display: flex;
width: 100%;
height: 100vh;
`;

const content1CSS = css`
display: flex;
flex-direction: column;
flex: 1 1 0;
height: 100%;
`;

type MobileLayoutProps = {
  classes?: Record<string, any>;
  style?: Record<string, any>;
  css?: SerializedStyles;
  className?: string;
  onClick?: (event: SyntheticEvent | undefined) => void;
  onMouseOver?: (event: SyntheticEvent | undefined) => void;
  onMouseOut?: (event: SyntheticEvent | undefined) => void;
  onMouseDown?: (event: SyntheticEvent | undefined) => void;
  onMouseUp?: (event: SyntheticEvent | undefined) => void;
  onMouseEnter?: (event: SyntheticEvent | undefined) => void;
  onMouseLeave?: (event: SyntheticEvent | undefined) => void;
  onWheel?: (event: SyntheticEvent | undefined) => void;
  onContextMenu?: (event: SyntheticEvent | undefined) => void;
  onAuxClick?: (event: SyntheticEvent | undefined) => void;
  key?: number;
  children?: React.ReactNode;
  path?: any;
  exact?: boolean;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

export const MobileLayout: React.FC<MobileLayoutProps> = (symbolProps) => {
  return (
    <Route path={symbolProps.path} exact={true} authAccess="any">
      <RouteLayout>
        <div css={wrapper1CSS}>
          <div css={content1CSS}>
            {[symbolProps.header, symbolProps.content, symbolProps.footer]}
          </div>
        </div>
      </RouteLayout>
    </Route>
  );
};
