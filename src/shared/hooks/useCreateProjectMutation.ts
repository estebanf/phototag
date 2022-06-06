import React, { Fragment } from 'react';
import { gql, useMutation } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';

const CREATE_PROJECT_MUTATION = gql`mutation CreateProject($data: ProjectCreateInput!) {
    projectCreate(data: $data) {
      id
    }
  }`;

export const useCreateProjectMutation = () => {
  const [run, mutationResult] = useMutation(CREATE_PROJECT_MUTATION, {
    refetchQueries: ['GetProjectsList'],
    onCompleted: (data) => {},
    onError: (error) => {},
  });

  return { ...mutationResult, run };
};
