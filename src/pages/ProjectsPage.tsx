/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { useGlobalState } from 'providers';
import { useProjectsListQuery, useClientsListQuery } from 'shared/hooks';
import {
  RouteLayout,
  Box,
  Select,
  TextField,
  DataGrid,
  RouterLink,
} from 'shared/components';
import { Paper, Typography, MenuItem, Divider } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const projectsCSS = css`
display: flex;
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
flex-direction: column;
height: 100%;
`;

const container28CSS = css`
padding-left: 20px;
padding-top: 15px;
padding-right: 20px;
padding-bottom: 15px;
display: flex;
justify-content: space-between;
`;

const container30CSS = css`
display: flex;
align-items: center;
`;

const container31CSS = css`
margin-left: 32px;
display: flex;
align-items: center;
`;

const container29CSS = css`
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
`;

const container32CSS = css`
display: flex;
justify-content: flex-end;
padding-top: 8px;
padding-bottom: 8px;
`;

const select3CSS = css`
margin-right: 20px;
`;

const link2CSS = css`
display: inline-block;
`;

const ProjectsContainerState = ({ children }) => {
  const clientsListQuery = useClientsListQuery();
  const projectsListQuery = useProjectsListQuery();

  return children({ clientsListQuery, projectsListQuery });
};

const MenuItem2ContainerState = ({ children }) => {
  const clientsListQuery = useClientsListQuery();

  return children({ clientsListQuery });
};

export const ProjectsPage: React.FC = () => {
  const { projectsState } = useGlobalState();

  return (
    <ProjectsContainerState>
      {({ clientsListQuery, projectsListQuery }) => (
        <RouteLayout css={projectsCSS}>
          <Paper elevation={1} variant="elevation">
            <Box css={container28CSS}>
              <Box css={container30CSS}>
                <Typography
                  variant="h4"
                  align="inherit"
                  color="initial"
                  gutterBottom={false}
                  noWrap={false}
                  paragraph={false}
                >
                  Projects
                </Typography>
                <Box css={container31CSS}>
                  <Select
                    onChange={(event) => {
                      projectsState.setSelectedClientId(event.target.value);
                    }}
                    value={projectsState.selectedClientId}
                    variant="outlined"
                    size="small"
                  >
                    {clientsListQuery.data?.map((item, itemIndex) => (
                      <MenuItem2ContainerState>
                        {({ clientsListQuery }) => (
                          <MenuItem key={itemIndex} value={item?.id}>
                            {item?.name}
                          </MenuItem>
                        )}
                      </MenuItem2ContainerState>
                    ))}
                  </Select>
                </Box>
              </Box>
              <LoadingButton color="primary" size="large" variant="contained">
                ADD NEW PROJECT
              </LoadingButton>
            </Box>
            <Divider
              absolute={false}
              flexItem={false}
              light={false}
              orientation="horizontal"
              variant="fullWidth"
            />
            <Box css={container29CSS}>
              <Box css={container32CSS}>
                <Select
                  css={select3CSS}
                  onChange={(event) => {
                    projectsState.setSize(event.target.value);
                  }}
                  value={String(projectsState.size)}
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
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  onChange={(event) => {
                    projectsState.setQuery(event.target.value);
                  }}
                  placeholder="Search"
                  variant="outlined"
                />
              </Box>
              <DataGrid
                autoHeight={true}
                checkboxSelection={false}
                columns={[
                  {
                    field: 'name',
                    headerName: 'PROJECT NAME',
                    width: 150,
                    hide: false,
                    renderCell: ({ row: item }) => (
                      <Fragment>
                        <RouterLink
                          css={link2CSS}
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
                    headerName: 'CLIENT NAME',
                    width: 150,
                    renderCell: ({ row: item }) => (
                      <Fragment>item.client.name</Fragment>
                    ),
                  },
                  { field: 'category', headerName: 'CATEGORY', width: 120 },
                  { field: 'status', headerName: 'STATUS', width: 100 },
                  { field: 'createdAt', headerName: 'CREATED ON', width: 150 },
                  { field: 'updatedAt', headerName: 'LAST UPDATE', width: 150 },
                ]}
                hideFooter={false}
                hideFooterSelectedRowCount={false}
                loading={projectsListQuery.loading}
                pageSize={5}
                rows={projectsListQuery.data}
                showTableBorder={false}
              />
            </Box>
          </Paper>
        </RouteLayout>
      )}
    </ProjectsContainerState>
  );
};
