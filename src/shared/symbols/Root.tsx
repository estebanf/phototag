/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';

const div1CSS = css`
display: flex;
flex: 1;
flex-direction: column;
`;

type RootProps = {
  children?: React.ReactNode;
  dialogs?: React.ReactNode;
};

export const Root: React.FC<RootProps> = (symbolProps) => {
  return <div css={div1CSS}>{[symbolProps.children, symbolProps.dialogs]}</div>;
};
