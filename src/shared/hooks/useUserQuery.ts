import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { useAuth } from '@8base-react/auth';

const USER_QUERY = gql`{
    user {
        email
        firstName
        lastName
    }
}`;

export const useUserQuery = () => {
  const auth = useAuth();

  const queryResult = useQuery(USER_QUERY, {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
    onCompleted: (data) => {},
    onError: (error) => {},
    skip: !auth.isAuthorized,
    notifyOnNetworkStatusChange: true,
  });

  const transform = (data) => {
    return data?.user ?? {};
  };

  return { ...queryResult, data: transform(queryResult.data) };
};
