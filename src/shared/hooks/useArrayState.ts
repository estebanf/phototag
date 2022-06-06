import React, { Fragment, useCallback, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';

export const useArrayState = (defaultState: Array<unknown>) => {
  const [array, setArray] = useState<Array<unknown>>(defaultState);

  const hasItemInArray = useCallback(
    (itemToFind: unknown): boolean => {
      return array.find((arrayValue) =>
        equals(arrayValue, itemToFind),
      ) as boolean;
    },
    [array],
  );

  const insertItemInArray = useCallback(
    (itemToInsert: unknown) => {
      setArray([...array, itemToInsert]);
    },
    [array],
  );

  const removeItemFromArray = useCallback(
    (itemIndex: number) => {
      const withoutRemovedItem = remove(itemIndex, 1, array);

      setArray(withoutRemovedItem);
    },
    [array],
  );

  return {
    value: array,
    setValue: setArray,
    hasItemInArray,
    insertItemInArray,
    removeItemFromArray,
  };
};
