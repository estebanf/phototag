import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';

const PROJECTS_LIST_QUERY = gql`query projectsList($first: Int, $skip: Int, $filter: ProjectFilter) {
  projectsList(first: $first, skip: $skip, orderBy: createdAt_DESC, filter: $filter) {
    count
    items {
      id
      name
      category
      createdAt
      updatedAt
      status
      deadline
      projectUserRelation {
        items {
          id
          email
          avatar {
            downloadUrl
          }
        }
      }
      client {
        id
        name
        logo {
          downloadUrl
        }
      }
    }
  }
}`;

export const useProjectsListQuery = () => {
  const queryResult = useQuery(PROJECTS_LIST_QUERY, {
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    skip: false,
    notifyOnNetworkStatusChange: true,
  });

  const transform = (data) => {
    return data?.projectsList?.items;
  };

  return { ...queryResult, data: transform(queryResult.data) };
};
