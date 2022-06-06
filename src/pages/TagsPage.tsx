/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { TagsSettingsPage } from 'pages';
import { ListItemSymbol, RouterSwitchSymbol } from 'shared/symbols';
import { RouteLayout, Box, Route } from 'shared/components';
import { List, ListItemText } from '@mui/material';

const tagsCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

export const TagsPage: React.FC = () => {
  return (
    <RouteLayout css={tagsCSS}>
      <Box display="flex">
        <List>
          <ListItemSymbol
            button={true}
            listItemText={<ListItemText>Vocabulary</ListItemText>}
          />
          <ListItemSymbol
            button={true}
            listItemText={<ListItemText>Categories</ListItemText>}
          />
        </List>
        <Box>
          <RouterSwitchSymbol
            routes={
              <Route path={['/tags/settings']} authAccess="any" exact={true}>
                <TagsSettingsPage />
              </Route>
            }
          />
        </Box>
      </Box>
    </RouteLayout>
  );
};
