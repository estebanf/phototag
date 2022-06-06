/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { DateTime } from 'luxon';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { useGlobalState } from 'providers';
import { useProjectDetailsQuery } from 'shared/hooks';
import {
  GridContainerSymbol,
  GridItemSymbol,
  HeadingSymbol,
} from 'shared/symbols';
import {
  RouteLayout,
  Box,
  Form,
  FormTextField,
  FormSelect,
  FormDatePicker,
  FormMultiselect,
  FormSwitch,
} from 'shared/components';
import {
  Paper,
  Avatar,
  Typography,
  Chip,
  Divider,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const projectClientsCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

const grid2CSS = css`
padding-bottom: 16px;
padding-top: 16px;
padding-right: 16px;
padding-left: 16px;
`;

const gridItem3CSS = css`
grid-gap: 16px;
`;

const container35CSS = css`
margin-right: 16px;
`;

const container36CSS = css`
margin-right: 16px;
display: flex;
align-items: center;
`;

const avatar7CSS = css`
margin-right: 8px;
`;

const container41CSS = css`
margin-right: 16px;
`;

const container37CSS = css`
margin-right: 16px;
`;

const container38CSS = css`
display: flex;
flex-wrap: wrap;
flex-direction: column;
`;

const button6CSS = css`
margin-right: 24px;
`;

const grid5CSS = css`
padding-right: 16px;
padding-bottom: 16px;
padding-left: 16px;
`;

const heading5CSS = css`
margin-top: 16px;
margin-bottom: 16px;
`;

const formBlock3CSS = css`
display: grid;
          grid-gap: 16px;
width: 100%;
`;

const container40CSS = css`
display: flex;
justify-content: flex-end;
`;

const button9CSS = css`
margin-right: 16px;
`;

const ProjectClientsContainerState = ({ children }) => {
  const projectDetailsQuery = useProjectDetailsQuery();

  return children({ projectDetailsQuery });
};

export const ProjectClientsPage: React.FC = () => {
  const {
    projectCatagoryOptions,
    projectUsageTypeOptions,
    projectServiceLevelOptions,
  } = useGlobalState();

  return (
    <ProjectClientsContainerState>
      {({ projectDetailsQuery }) => (
        <RouteLayout css={projectClientsCSS}>
          <Paper elevation={1} variant="elevation">
            <GridContainerSymbol css={grid2CSS} alignContent="space-between">
              <GridItemSymbol css={gridItem3CSS} alignItems="center" xs={6}>
                <Box css={container35CSS}>
                  <HeadingSymbol variant="h6" align="inherit" color="initial">
                    {projectDetailsQuery?.data?.name + ' '}
                  </HeadingSymbol>
                </Box>
                <Box css={container36CSS}>
                  <Avatar css={avatar7CSS} variant="circular" />
                  <Typography
                    variant="inherit"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    {projectDetailsQuery?.data?.client?.name + ' '}
                  </Typography>
                </Box>
                <Box css={container41CSS}>
                  <Chip
                    label={projectDetailsQuery?.data?.status + ' '}
                    size="medium"
                  />
                </Box>
                <Box css={container37CSS}>
                  <Box css={container38CSS}>
                    <Typography
                      variant="inherit"
                      align="inherit"
                      color="initial"
                      paragraph={false}
                    >
                      Last Updated
                    </Typography>
                    <Typography
                      variant="inherit"
                      align="inherit"
                      color="initial"
                      paragraph={false}
                    >
                      {DateTime.fromISO(
                        projectDetailsQuery?.data?.updatedAt,
                      ).toLocaleString() + ' '}
                    </Typography>
                  </Box>
                </Box>
              </GridItemSymbol>
              <GridItemSymbol justify="flex-end" xs={6}>
                <LoadingButton
                  css={button6CSS}
                  color="primary"
                  disabled={false}
                  loading={false}
                  size="medium"
                  variant="contained"
                >
                  Upload photos
                </LoadingButton>
                <LoadingButton
                  color="primary"
                  disabled={false}
                  loading={false}
                  size="medium"
                  variant="contained"
                >
                  Curate
                </LoadingButton>
              </GridItemSymbol>
            </GridContainerSymbol>
            <Divider
              absolute={false}
              flexItem={false}
              light={false}
              orientation="horizontal"
              variant="fullWidth"
            />
            <Box>
              <GridContainerSymbol>
                <GridItemSymbol xs={6}>
                  <GridContainerSymbol css={grid5CSS}>
                    <GridItemSymbol xs={12}>
                      <HeadingSymbol
                        css={heading5CSS}
                        variant="h6"
                        align="inherit"
                        color="initial"
                      >
                        Project Information
                      </HeadingSymbol>
                    </GridItemSymbol>
                    <GridItemSymbol xs={12}>
                      <Form
                        css={formBlock3CSS}
                        onSubmit={async (data, actions) => {
                          alert(JSON.stringify(data));
                        }}
                      >
                        {(formProps) => (
                          <Fragment>
                            <FormTextField
                              inputProps={{
                                color: 'primary',
                                label: 'Project Name',
                                variant: 'outlined',
                              }}
                              fieldProps={{ name: 'name' }}
                            />
                            <FormSelect
                              selectProps={{
                                children: projectCatagoryOptions.value?.map(
                                  (item, itemIndex) => (
                                    <MenuItem
                                      key={itemIndex}
                                      value={item.value}
                                    >
                                      {item.label}
                                    </MenuItem>
                                  ),
                                ),
                                variant: 'outlined',
                                label: 'Category',
                              }}
                              fieldProps={{ name: 'category' }}
                            />
                            <FormDatePicker
                              datePickerProps={{
                                disableFuture: false,
                                disablePast: false,
                              }}
                              fieldProps={{ name: 'datePicker1' }}
                            />
                            <FormMultiselect
                              selectProps={{
                                children: [
                                  { id: 1, value: 'One', label: 'One!' },
                                  { id: 2, value: 'Two', label: 'Two!' },
                                  { id: 3, value: 'Three', label: 'Three!' },
                                ]?.map((item, itemIndex) => (
                                  <MenuItem key={itemIndex} value={item.value}>
                                    {item.label}
                                  </MenuItem>
                                )),
                                variant: 'outlined',
                                label: 'Users',
                              }}
                              fieldProps={{ name: 'users' }}
                            />
                            <FormSelect
                              selectProps={{
                                children: projectServiceLevelOptions.value?.map(
                                  (item, itemIndex) => (
                                    <MenuItem
                                      key={itemIndex}
                                      value={item.value}
                                    >
                                      {item.label}
                                    </MenuItem>
                                  ),
                                ),
                                variant: 'outlined',
                                label: 'Category Levels',
                              }}
                              fieldProps={{ name: 'categoryLevels' }}
                            />
                            <FormSelect
                              selectProps={{
                                children: projectUsageTypeOptions.value?.map(
                                  (item, itemIndex) => (
                                    <MenuItem
                                      key={itemIndex}
                                      value={item.value}
                                    >
                                      {item.label}
                                    </MenuItem>
                                  ),
                                ),
                                variant: 'outlined',
                                label: 'Usage Type',
                              }}
                              fieldProps={{ name: 'usageType' }}
                            />
                            <FormSwitch
                              fieldProps={{ name: 'privatePublic' }}
                              switchProps={{
                                labelPlacement: 'end',
                                label: (
                                  <Typography
                                    variant="inherit"
                                    align="inherit"
                                    color="inherit"
                                    paragraph={false}
                                  >
                                    Private / Public
                                  </Typography>
                                ),
                              }}
                            />
                            <FormTextField
                              inputProps={{
                                color: 'primary',
                                label: 'Project Description',
                                multiline: true,
                                rows: '4',
                                variant: 'outlined',
                              }}
                              fieldProps={{ name: 'description' }}
                            />
                            <Box css={container40CSS}>
                              <LoadingButton
                                css={button9CSS}
                                color="primary"
                                disabled={false}
                                loading={false}
                                size="medium"
                                variant="outlined"
                              >
                                Cancel
                              </LoadingButton>
                              <LoadingButton
                                color="primary"
                                variant="contained"
                                type="submit"
                              >
                                Confirm
                              </LoadingButton>
                            </Box>
                          </Fragment>
                        )}
                      </Form>
                    </GridItemSymbol>
                  </GridContainerSymbol>
                </GridItemSymbol>
                <GridItemSymbol xs={6}>
                  <GridContainerSymbol>
                    <GridItemSymbol xs={12}>
                      <HeadingSymbol
                        variant="h6"
                        align="inherit"
                        color="initial"
                      >
                        Collections
                      </HeadingSymbol>
                    </GridItemSymbol>
                    <GridItemSymbol xs={12}>
                      <Box>
                        <img
                          src="https://global-uploads.webflow.com/5e1b42c8e402b67bc883c5c3/5eec751aba1dee05b6690c04_8base-logo-dark.svg"
                          width={100}
                        />
                      </Box>
                    </GridItemSymbol>
                    <GridItemSymbol xs="auto">
                      <LoadingButton
                        color="primary"
                        disabled={false}
                        loading={false}
                        size="medium"
                        variant="text"
                      >
                        More Photos
                      </LoadingButton>
                    </GridItemSymbol>
                  </GridContainerSymbol>
                </GridItemSymbol>
              </GridContainerSymbol>
            </Box>
          </Paper>
        </RouteLayout>
      )}
    </ProjectClientsContainerState>
  );
};
