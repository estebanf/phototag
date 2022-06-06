import React, { Fragment, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';

export const useNumberState = (defaultState: number) => {
  const [numberState, setNumberState] = useState(defaultState);

  return { value: numberState, setValue: setNumberState };
};
