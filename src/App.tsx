/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import {
  Global,
  jsx,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import { LocalizationProvider } from '@mui/lab';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import { Auth, AUTH_STRATEGIES } from '@8base/auth';
import { AppProvider } from '@8base-react/app-provider';
import { AsyncContent } from 'shared/components';
import { GlobalStateProvider, AssetsProvider } from 'providers';
import { RootContent } from 'RootContent';

const authClient = Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.API_TOKEN,
    subscribable: true,
  },
  {
    apiToken: '58aef27d-4ec2-490e-ba2d-32018337ca93',
  },
);

const appTheme = createTheme({
  shadows: [
    'none',
    'rgb(0 0 0 / 3%) -4px -5px 17px 10px, rgb(0 0 0 / 3%) 0px 13px 18px 0px, rgb(0 0 0 / 3%) 0px 1px 10px 0px',
    'rgb(0 0 0 / 3%) -4px -5px 17px 10px, rgb(0 0 0 / 3%) 0px 13px 18px 0px, rgb(0 0 0 / 3%) 0px 1px 10px 0px',
    'rgb(0 0 0 / 3%) -4px -5px 17px 10px, rgb(0 0 0 / 3%) 0px 13px 18px 0px, rgb(0 0 0 / 3%) 0px 1px 10px 0px',
    'rgb(0 0 0 / 3%) -4px -5px 17px 10px, rgb(0 0 0 / 3%) 0px 13px 18px 0px, rgb(0 0 0 / 3%) 0px 1px 10px 0px',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    'rgb(0 0 0 / 3%) -4px -5px 17px 10px, rgb(0 0 0 / 3%) 0px 13px 18px 0px, rgb(0 0 0 / 3%) 0px 1px 10px 0px',
  ],
  name: 'custom',
  palette: {
    primary: { main: '#09a7fa', contrastText: '#fff' },
    secondary: { main: '#f50057' },
    text: { primary: '#212121', secondary: '#969696' },
  },
  spacing: 8,
  typography: {
    fontSize: 14,
    fontFamily: 'Barlow, Roboto, Helvetica, Arial, sans-serif',
    h4: { fontWeight: 400, lineHeight: 1.235 },
    h6: { fontWeight: 500, lineHeight: '32px', letterSpacing: '-0.2px' },
    body1: { fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.2px' },
    body2: { fontWeight: 400, lineHeight: '24px', letterSpacing: '-0.2px' },
    subtitle1: {
      color: 'rgb(150, 150, 150)',
      fontWeight: 500,
      lineHeight: '24px',
    },
    caption: {
      fontWeight: 500,
      lineHeight: '19px',
      letterSpacing: '0.8px',
      color: 'rgb(155, 155, 155)',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiSelect: { root: { fontWeight: 400 } },
    MuiSvgIcon: { colorAction: { color: 'rgb(178, 178, 178)' } },
    MuiDataGrid: {
      root: {
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: 'rgb(244, 247, 252)',
          color: 'rgba(0, 0, 0, 0.87)',
          textTransform: 'uppercase',
          fontWeight: 500,
          letterSpacing: '1px',
        },
        '& .MuiDataGrid-columnSeparator': { display: 'none !important' },
        '& .MuiDataGrid-cell': { borderBottom: 'none' },
        '& .MuiDataGrid-row:hover': { backgroundColor: 'inherit !important' },
        '& .MuiDataGrid-cell:focus,& .MuiDataGrid-colCell:focus': {
          outline: 'none',
        },
      },
    },
  },
} as any);

export const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <EmotionThemeProvider theme={appTheme}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <CssBaseline />

          <AppProvider
            uri={'https://api.8base.com/ckoskvcd0000001mj7j2i4z0z'}
            authClient={authClient as any}
            onRequestSuccess={() => {}}
            onRequestError={() => {}}
          >
            {({ loading }) => (
              <AsyncContent loading={loading} stretch>
                <BrowserRouter>
                  <GlobalStateProvider>
                    <AssetsProvider>
                      <RootContent />
                    </AssetsProvider>
                  </GlobalStateProvider>
                </BrowserRouter>
              </AsyncContent>
            )}
          </AppProvider>
        </LocalizationProvider>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
