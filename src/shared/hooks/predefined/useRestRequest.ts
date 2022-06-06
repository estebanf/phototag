import { useState, useMemo, useCallback, useEffect } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

type useRestRequestArgs = {
  onCompleted?: (data: unknown) => void;
  transformer?: (data: unknown) => void;
  onError?: (error: unknown) => void;
  endpoint: string;
  requestArgs?: Pick<AxiosRequestConfig, 'method' | 'params' | 'headers' | 'url' | 'data'>;
  isTriggeredManually?: boolean;
};

type useRestRequestReturn = {
  data?: unknown;
  loading: boolean;
  error?: unknown;
  refetch: () => Promise<void>;
  run: () => Promise<void>;
};

export const useRestRequest = ({
  onCompleted,
  onError,
  transformer,
  endpoint,
  requestArgs,
  isTriggeredManually,
}: useRestRequestArgs): useRestRequestReturn => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: endpoint,
      }),
    [endpoint],
  );

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data: response } = await axiosInstance({ ...requestArgs });
      const transformedData = transformer ? transformer?.(response) : response;

      onCompleted?.(transformedData);
      setData(transformedData);
    } catch (err) {
      onError?.(err);
      setError(err);
    }

    setLoading(false);
  }, [axiosInstance, onCompleted, onError, transformer, requestArgs]);

  useEffect(() => {
    if (!isTriggeredManually) {
      fetchData();
    }
  }, [fetchData, isTriggeredManually]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    run: fetchData,
  };
};
