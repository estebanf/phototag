/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { useAuth } from '@8base-react/auth';
import { RouteLayout, Box, Form, FormTextField } from 'shared/components';
import { Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const loginCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

const container33CSS = css`
display: block;
align-items: flex-start;
justify-content: flex-start;
height: 100%;
flex-direction: column;
margin-top: 150px;
margin-right: 150px;
margin-bottom: 150px;
margin-left: 150px;
`;

const formBlock1CSS = css`
          display: grid;
          grid-gap: 16px;
        `;

const typography21CSS = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const auth = useAuth();

  return (
    <RouteLayout css={loginCSS}>
      <Box css={container33CSS}>
        <Form
          css={formBlock1CSS}
          onSubmit={async (data, actions) => {
            try {
              actions.setStatus(null);

              const { success } = await auth.authClient.login(data);

              if (!success) {
                actions.setStatus('Something went wrong');
              } else {
                history.push('/');
              }
            } catch (err) {
              actions.setErrors(err?.response?.errors[0]?.details);
            }
          }}
        >
          {(formProps) => (
            <Fragment>
              <Typography
                css={typography21CSS}
                variant="inherit"
                align="inherit"
                color="error"
                paragraph={false}
              >
                {formProps.status}
              </Typography>
              <FormTextField
                inputProps={{
                  color: 'primary',
                  label: 'Email',
                  variant: 'outlined',
                }}
                fieldProps={{
                  name: 'email',
                  validate: (value) => {
                    return !value ? 'Required' : undefined;
                  },
                }}
              />
              <FormTextField
                inputProps={{
                  color: 'primary',
                  label: 'Password',
                  type: 'password',
                  variant: 'outlined',
                }}
                fieldProps={{ name: 'password' }}
              />
              <LoadingButton
                color="primary"
                disabled={formProps.isSubmitting}
                variant="contained"
                type="submit"
              >
                Login
              </LoadingButton>
            </Fragment>
          )}
        </Form>
      </Box>
    </RouteLayout>
  );
};
