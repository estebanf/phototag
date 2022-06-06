import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';

const CLIENTS_LIST_QUERY = gql`query clientsList{
  clientsList(filter: {
    status: {
      equals: "ACTIVE"
    }
  }) {
    items {
      id
      name
      status
      logo {
        downloadUrl
      }
      clientClientUserRelation {
        items {
          user {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
}`;

export const useClientsListQuery = () => {
  const queryResult = useQuery(CLIENTS_LIST_QUERY, {
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    notifyOnNetworkStatusChange: true,
  });

  const transform = (data) => {
    return data?.clientsList?.items || [];
  };

  return { ...queryResult, data: transform(queryResult.data) };
};
