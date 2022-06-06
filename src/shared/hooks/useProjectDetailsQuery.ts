import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { css, SerializedStyles } from '@emotion/react';

const PROJECT_DETAILS_QUERY = gql`query GetProjectDetails($id: ID!) {
  project(id: $id) {
    id
    status
    updatedAt
    name
    status
    deadline
    details
    category
    visibility
    serviceLevel
    usageType
    client {
      id
      name
      logo {
        downloadUrl
      }
    }
  }
}`;

export const useProjectDetailsQuery = () => {
  const params = useParams();

  const queryResult = useQuery(PROJECT_DETAILS_QUERY, {
    variables: { id: params.projectid },
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    notifyOnNetworkStatusChange: true,
  });

  const transform = (data) => {
    return data?.project;
  };

  return { ...queryResult, data: transform(queryResult.data) };
};
