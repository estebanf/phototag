import React, { Fragment, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';

export const useProjectsState = () => {
  const [query, setQuery] = React.useState('');
  const [size, setSize] = React.useState(5);
  const [selectedClientId, setSelectedClientId] = React.useState(null);

  const searchFilter = query
    ? {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            client: {
              name: {
                contains: query,
              },
            },
          },
        ],
      }
    : null;

  const clientFilter = selectedClientId
    ? {
        client: {
          id: {
            equals: selectedClientId,
          },
        },
      }
    : null;

  const filter =
    clientFilter || searchFilter
      ? { ...clientFilter, ...searchFilter }
      : undefined;

  return {
    query,
    setQuery,
    size,
    setSize,
    selectedClientId,
    setSelectedClientId,
    filter,
  };
};
