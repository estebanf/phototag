/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { RouteLayout } from 'shared/components';
import { Typography } from '@mui/material';

const tagsSettingsCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

export const TagsSettingsPage: React.FC = () => {
  return (
    <RouteLayout css={tagsSettingsCSS}>
      <Typography
        variant="inherit"
        align="inherit"
        color="initial"
        paragraph={false}
      >
        Tags Settings
      </Typography>
    </RouteLayout>
  );
};
