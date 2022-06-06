import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';

const CLIENTS_QUERY = gql`query GetClientsListProjectQuery {
    clientsList {
      items {
        id
        name
      }
    }
  }`;

export const useClientsQuery = () => {
  const queryResult = useQuery(CLIENTS_QUERY, {
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    notifyOnNetworkStatusChange: true,
  });

  return queryResult;
};
