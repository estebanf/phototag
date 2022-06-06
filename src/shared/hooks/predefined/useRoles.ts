import { useCallback, useState } from 'react';

import { gql, useQuery } from '@apollo/client';
import { intersection, isEmpty } from 'ramda';

export type UserRole = {
  id: string;
  name: string;
};

export type RolesReturnType = {
  userRoles: Array<UserRole>;
  possibleRoles: Array<UserRole>;
  hasPermission: (allowedRoles: string[]) => boolean;
};

const ROLES_LIST_QUERY = gql`
  query RolesListQuery {
    rolesList {
      items {
        id
        name
      }
    }
  }
`;

const USER_ROLES_QUERY = gql`
  query UserRolesQuery {
    user {
      id
      roles {
        items {
          id
          name
        }
      }
    }
  }
`;

export const useRoles = (): RolesReturnType => {
  const [userRoles, setUserRoles] = useState<Array<UserRole>>([]);
  const [possibleRoles, setPossibleRoles] = useState<Array<UserRole>>([]);

  useQuery(ROLES_LIST_QUERY, {
    onCompleted: responseData =>
      setPossibleRoles(
        (responseData?.rolesList?.items || []).map(({ id, name }: UserRole) => ({ id, name })),
      ),
  });

  useQuery(USER_ROLES_QUERY, {
    onCompleted: responseData =>
      setUserRoles(
        (responseData?.user?.roles?.items || []).map(({ id, name }: UserRole) => ({ id, name })),
      ),
  });

  const hasPermission = useCallback(
    (allowedRoles: string[]): boolean => {
      if (isEmpty(allowedRoles)) {
        return true;
      }

      const userRolesName = userRoles.map(({ name }) => name);

      return !isEmpty(intersection(allowedRoles, userRolesName));
    },
    [userRoles],
  );

  return { userRoles, possibleRoles, hasPermission };
};
