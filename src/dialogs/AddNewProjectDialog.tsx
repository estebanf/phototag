/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { useGlobalState } from 'providers';
import { DialogSymbol } from 'shared/symbols';
import { Box, Form, FormSelect, FormTextField } from 'shared/components';
import { MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const addNewProjectDialogDialogPropsCSS = css`
.MuiDialog-paperWidthSm {
      width: 500px;
    }
`;

const formBlock2CSS = css`
display: grid;
                          grid-gap: 16px;
display: flex;
flex-direction: column;
padding-top: 16px;
padding-right: 16px;
padding-bottom: 16px;
padding-left: 16px;
`;

export const AddNewProjectDialog: React.FC = () => {
  const {
    addNewProjectModal,
    clientsQuery,
    projectCatagoryOptions,
    projectUsageTypeOptions,
    projectServiceLevelOptions,
    createProjectMutation,
  } = useGlobalState();

  return (
    <DialogSymbol
      dialogProps={{
        css: addNewProjectDialogDialogPropsCSS,
        fullScreen: false,
        fullWidth: false,
        onClose: () => {
          addNewProjectModal.close();
        },
        open: addNewProjectModal.isOpened,
      }}
    >
      <Box>
        <Form
          css={formBlock2CSS}
          initialValues={{ deadLine: '2022-08-28T12:12:00+03:00' }}
          onSubmit={async (data, actions) => {
            const DEFAULT_COLLECTION_NAME = 'My first Collection';

            const variables = {
              data: {
                name: data.name,
                category: data.category,
                details: data.details,
                deadline: data.deadline,
                serviceLevel: data.serviceLevel,
                usageType: data.usageType,
                client: {
                  connect: {
                    id: data.clientId,
                  },
                },
                projectCollectionRelation: {
                  create: {
                    name: DEFAULT_COLLECTION_NAME,
                  },
                },
              },
            };

            try {
              await createProjectMutation.run({ variables });
              addNewProjectModal.close();
            } catch (err) {
              actions.setErrors(err?.graphQLErrors?.[0]?.details);
            }
          }}
        >
          {(formProps) => (
            <Fragment>
              <FormSelect
                selectProps={{
                  children: (clientsQuery.data?.clientsList?.items || [])?.map(
                    (item, itemIndex) => (
                      <MenuItem key={itemIndex} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ),
                  ),
                  variant: 'outlined',
                  size: 'medium',
                  label: 'CLIENT',
                }}
                fieldProps={{ name: 'clientId' }}
              />
              <FormTextField
                inputProps={{
                  color: 'primary',
                  label: 'PROJECT NAME',
                  variant: 'outlined',
                }}
                fieldProps={{ name: 'name' }}
              />
              <FormSelect
                selectProps={{
                  children: projectCatagoryOptions.value?.map(
                    (item, itemIndex) => (
                      <MenuItem key={itemIndex} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ),
                  ),
                  variant: 'outlined',
                  label: 'CATEGORY',
                }}
                fieldProps={{ name: 'category' }}
              />
              <FormTextField
                inputProps={{
                  color: 'primary',
                  disabled: true,
                  label: 'DEADLINE',
                  value: '',
                  variant: 'outlined',
                }}
                fieldProps={{ name: 'deadLine' }}
              />
              <FormTextField
                inputProps={{
                  color: 'primary',
                  label: 'DESCRIPTION',
                  multiline: false,
                  rows: '2',
                  variant: 'outlined',
                }}
                fieldProps={{ name: 'details' }}
              />
              <FormSelect
                selectProps={{
                  children: projectUsageTypeOptions.value?.map(
                    (item, itemIndex) => (
                      <MenuItem key={itemIndex} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ),
                  ),
                  variant: 'outlined',
                  label: 'USAGE TYPE',
                }}
                fieldProps={{ name: 'usageType' }}
              />
              <FormSelect
                selectProps={{
                  children: projectServiceLevelOptions.value?.map(
                    (item, itemIndex) => (
                      <MenuItem key={itemIndex} value={String(item.value)}>
                        {item.label}
                      </MenuItem>
                    ),
                  ),
                  variant: 'outlined',
                  label: 'SERVICE LEVEL',
                }}
                fieldProps={{ name: 'serviceLevel' }}
              />
              <LoadingButton
                color="primary"
                disabled={createProjectMutation.loading}
                variant="contained"
                type="submit"
              >
                Submit
              </LoadingButton>
            </Fragment>
          )}
        </Form>
      </Box>
    </DialogSymbol>
  );
};
