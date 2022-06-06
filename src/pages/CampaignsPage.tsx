/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { RouteLayout } from 'shared/components';

const campaignsCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

export const CampaignsPage: React.FC = () => {
  return <RouteLayout css={campaignsCSS} />;
};
