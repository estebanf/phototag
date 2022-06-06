import React, { Fragment, useCallback, useMemo } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { useRestRequest } from 'shared/hooks/predefined/useRestRequest';

export const useRequest = () => {
  const endpoint = 'https://www.boredapi.com/api';
  const requestArgs = useMemo(
    () => ({ method: 'GET', url: '/activity' } as const),
    [],
  );
  const onCompleted = useCallback(() => undefined, []);
  const onError = useCallback((error) => undefined, []);
  const transformer = useCallback((data) => data, []);

  const result = useRestRequest({
    endpoint,
    requestArgs,
    onCompleted,
    onError,
    transformer,
    isTriggeredManually: false,
  });
  return result;
};
