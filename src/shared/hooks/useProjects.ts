import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';

const PROJECTS = gql`query GetProjectsList($first: Int, $skip: Int, $filter: ProjectFilter) {
  projectsList(first: $first, skip: $skip, filter: $filter, orderBy: createdAt_DESC) {
    count
    items {
      id
      name
      createdAt
      updatedAt
      status
      projectCollectionRelation {
        items {
          collectionPhotoCollectionRelation {
            items {
              photo {
                id
              }
            }
          }
        }
      }
      client {
        name
        id
      }
    }
  }
}`;

export const useProjects = () => {
  const queryResult = useQuery(PROJECTS, {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    notifyOnNetworkStatusChange: true,
    context: {},
  });

  const transform = (data) => {
    return data?.projectsList?.items;
  };

  return { ...queryResult, data: transform(queryResult.data) };
};
