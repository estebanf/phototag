/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx, useTheme } from '@emotion/react';
import { useGlobalState } from 'providers';
import { useProjects, useDashboard } from 'shared/hooks';
import { HeadingSymbol } from 'shared/symbols';
import {
  RouteLayout,
  Box,
  Icon,
  Select,
  TextField,
  DataGrid,
  RouterLink,
} from 'shared/components';
import { Paper, Avatar, Typography, MenuItem, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const homeCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

const paper1CSS = css`
margin-bottom: 20px;
`;

const container18CSS = css`
padding-left: 20px;
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
`;

const container20CSS = css`
display: grid;
grid-gap: 16px;
grid-template-columns: 1fr 1fr;
`;

const container16CSS = css`
margin-bottom: 20px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 24px;
`;

const container24CSS = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 16px;
padding-top: 16px;
padding-right: 16px;
padding-bottom: 16px;
`;

const avatar3CSS = css`
background-color: rgb(0, 198, 189);
height: 50px;
width: 50px;
margin-top: 12px;
margin-right: 12px;
margin-bottom: 12px;
margin-left: 12px;
`;

const container25CSS = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 16px;
padding-top: 16px;
padding-right: 16px;
padding-bottom: 16px;
height: 100%;
`;

const avatar4CSS = css`
background-color: #f33368;
height: 50px;
width: 50px;
margin-top: 12px;
margin-right: 12px;
margin-bottom: 12px;
margin-left: 12px;
`;

const container26CSS = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
padding-left: 16px;
padding-top: 16px;
padding-right: 16px;
padding-bottom: 16px;
`;

const avatar5CSS = css`
background-color: #13aaf8;
height: 50px;
width: 50px;
margin-top: 12px;
margin-right: 12px;
margin-bottom: 12px;
margin-left: 12px;
`;

const container27CSS = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
padding-top: 16px;
padding-right: 16px;
padding-bottom: 16px;
padding-left: 16px;
`;

const avatar6CSS = css`
background-color: rgb(97, 109, 238);
height: 50px;
width: 50px;
margin-top: 12px;
margin-right: 12px;
margin-bottom: 12px;
margin-left: 12px;
`;

const typography18CSS = css`
margin-top: 0;
margin-right: 0;
margin-bottom: 0;
margin-left: 0;
`;

const paper2CSS = css`
padding-bottom: 16px;
padding-right: 16px;
padding-left: 16px;
`;

const container21CSS = css`
padding-left: 24px;
padding-top: 12px;
padding-right: 8px;
padding-bottom: 12px;
display: flex;
justify-content: space-between;
align-items: baseline;
`;

const container23CSS = css`
display: grid;
grid-template-columns: repeat(3, auto);
grid-gap: 16px;
`;

const container11CSS = css`
display: flex;
grid-template-columns: repeat(2, auto);
grid-gap: 8px;
align-items: baseline;
`;

const HomeContainerState = ({ children }) => {
  const dashboard = useDashboard();
  const projects = useProjects();

  return children({ dashboard, projects });
};

export const HomePage: React.FC = () => {
  const theme: any = useTheme();
  const {
    addNewProjectModal,
    projectsQueryString,
    projectsPageSize,
  } = useGlobalState();

  return (
    <HomeContainerState>
      {({ dashboard, projects }) => (
        <RouteLayout css={homeCSS}>
          <Box>
            <Box>
              <Paper css={paper1CSS} elevation={24} variant="elevation">
                <Box
                  css={container18CSS}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box>
                    <HeadingSymbol variant="h4" align="inherit" color="initial">
                      Welcome Back
                    </HeadingSymbol>
                  </Box>
                  <Box css={container20CSS} display="flex">
                    <LoadingButton
                      onClick={(event) => {
                        addNewProjectModal.open();
                      }}
                      color="primary"
                      size="medium"
                      variant="contained"
                    >
                      Add New Project
                    </LoadingButton>
                    <LoadingButton
                      color="primary"
                      size="medium"
                      variant="contained"
                    >
                      Add Client
                    </LoadingButton>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box css={container16CSS}>
              <Paper elevation={1} variant="elevation">
                <Box css={container24CSS}>
                  <Avatar css={avatar3CSS} variant="circular">
                    <Icon
                      name="Assignment"
                      variant="filled"
                      color="inherit"
                      fontSize="medium"
                      viewBox="0 0 24 24"
                    />
                  </Avatar>
                  <Typography
                    variant="body1"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    Projects Live
                  </Typography>
                  <Typography
                    variant="h4"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    {String(dashboard?.data?.liveProjects?.count ?? '')}
                  </Typography>
                </Box>
              </Paper>
              <Paper elevation={1} variant="elevation">
                <Box css={container25CSS}>
                  <Avatar css={avatar4CSS} variant="circular">
                    <Icon
                      name="CheckBox"
                      variant="filled"
                      color="inherit"
                      fontSize="medium"
                      viewBox="0 0 24 24"
                    />
                  </Avatar>
                  <Typography
                    variant="body1"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    Approved Projects
                  </Typography>
                  <Typography
                    variant="h4"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    {String(dashboard?.data?.completedProjects?.count ?? '')}
                  </Typography>
                </Box>
              </Paper>
              <Paper elevation={1} variant="elevation">
                <Box css={container26CSS}>
                  <Avatar css={avatar5CSS} variant="circular">
                    <Icon
                      name="PhotoCamera"
                      variant="filled"
                      color="inherit"
                      fontSize="medium"
                      viewBox="0 0 24 24"
                    />
                  </Avatar>
                  <Typography
                    variant="body1"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    Total # of Photos
                  </Typography>
                  <Typography
                    variant="h4"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    {String(dashboard?.data?.totalPhotos?.count ?? '')}
                  </Typography>
                </Box>
              </Paper>
              <Paper elevation={1} variant="elevation">
                <Box css={container27CSS}>
                  <Avatar css={avatar6CSS} variant="circular">
                    <Icon
                      name="AddAPhoto"
                      variant="filled"
                      color="inherit"
                      fontSize="medium"
                      viewBox="0 0 24 24"
                    />
                  </Avatar>
                  <Typography
                    css={typography18CSS}
                    variant="body1"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    Total # of Approved Photos
                  </Typography>
                  <Typography
                    variant="h4"
                    align="inherit"
                    color="initial"
                    paragraph={false}
                  >
                    {String(dashboard?.data?.totalApprovedPhotos?.count ?? '')}
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper css={paper2CSS} elevation={1} variant="elevation">
                <Box
                  css={container21CSS}
                  display="flex"
                  justifyContent="space-between"
                >
                  <HeadingSymbol
                    variant="h6"
                    color="initial"
                    gutterBottom={false}
                  >
                    Latest Projects
                  </HeadingSymbol>
                  <Box>
                    <Box
                      css={container23CSS}
                      display="flex"
                      alignItems="center"
                    >
                      <Select
                        onChange={(event) => {
                          projectsPageSize.setValue(event.target.value);
                        }}
                        value={String(projectsPageSize.value)}
                        native={false}
                        variant="outlined"
                      >
                        {[
                          { value: 1, label: '1 Row' },
                          { value: 5, label: '5 Row(s)' },
                          { value: 10, label: '10 Row(s)' },
                          { value: 15, label: '15 Row(s)' },
                          { value: 20, label: '20 Row(s)' },
                        ]?.map((item, itemIndex) => (
                          <MenuItem key={itemIndex} value={String(item.value)}>
                            {String(item.label)}
                          </MenuItem>
                        ))}
                      </Select>
                      <TextField
                        onChange={(event) => {
                          projectsQueryString.setValue(event.target.value);
                        }}
                        placeholder="Search"
                        variant="outlined"
                        debounce={500}
                      />
                      <IconButton color="default" size="medium">
                        <Icon
                          name="FilterList"
                          variant="filled"
                          color="action"
                          fontSize="medium"
                          viewBox="0 0 24 24"
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <DataGrid
                  autoHeight={true}
                  columns={[
                    {
                      field: 'name',
                      headerName: 'Project Name',
                      width: 200,
                      renderCell: ({ row: item }) => (
                        <Fragment>
                          <RouterLink
                            absolute={false}
                            underline="none"
                            color="primary"
                            to={`/project/${item.id}/client/${item.client.id}`}
                          >
                            {item.name}
                          </RouterLink>
                        </Fragment>
                      ),
                    },
                    {
                      field: 'client',
                      headerName: 'Client',
                      width: 200,
                      renderCell: ({ row: item }) => (
                        <Fragment>
                          <Box css={container11CSS}>
                            <Avatar
                              css={css`
background-color: ${theme.palette.primary.main};
width: 30px;
height: 30px;
font-size: 10px;
color: #fff;
`}
                              variant="circular"
                            >
                              <Typography
                                variant="inherit"
                                align="inherit"
                                color="inherit"
                                paragraph={false}
                              >
                                {item?.client?.name?.[0]}
                              </Typography>
                            </Avatar>
                            <Typography
                              variant="body2"
                              align="inherit"
                              color="initial"
                              gutterBottom={false}
                              noWrap={false}
                              paragraph={false}
                            >
                              {item?.client?.name}
                            </Typography>
                          </Box>
                        </Fragment>
                      ),
                    },
                    {
                      field: 'createdAt',
                      headerName: 'Created On',
                      width: 200,
                    },
                    {
                      field: 'updatedAt',
                      headerName: 'Last Update',
                      width: 200,
                    },
                    {
                      field: 'photos',
                      headerName: 'Photos',
                      width: 100,
                      valueGetter: ({ row: item }) => {
                        return (
                          item?.projectCollectionRelation?.items
                            ?.map?.(
                              (childItem) =>
                                childItem?.collectionPhotoCollectionRelation
                                  ?.items || [],
                            )
                            ?.flat()?.length ?? 0
                        );
                      },
                    },
                  ]}
                  disableSelectionOnClick={true}
                  loading={projects.loading}
                  pageSize={projectsPageSize.value}
                  rows={projects.data}
                  rowHeight={60}
                  showTableBorder={false}
                />
              </Paper>
            </Box>
          </Box>
        </RouteLayout>
      )}
    </HomeContainerState>
  );
};
