/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { RouteLayout } from 'shared/components';
import { Typography } from '@mui/material';

const assetsManagerCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

export const AssetsManagerPage: React.FC = () => {
  return (
    <RouteLayout css={assetsManagerCSS}>
      <Typography
        variant="inherit"
        align="inherit"
        color="initial"
        paragraph={false}
      >
        Assets Manager
      </Typography>
    </RouteLayout>
  );
};
