import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { useAuth } from '@8base-react/auth';
import { useResourceClient } from 'shared/hooks/useResourceClient';

const TEST_REQUEST = gql`query {
  postsList { 
    items { 
      id 
      name 
    }
  }
}`;

export const useTestRequest = () => {
  const auth = useAuth();

  const { gqlBackend_1: client } = useResourceClient();

  const queryResult = useQuery(TEST_REQUEST, {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    notifyOnNetworkStatusChange: true,
    context: {
      headers: { authorization: '9453ca6a-81d0-4c6d-8d19-049642950236' },
    },
    client,
  });

  return queryResult;
};
