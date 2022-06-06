import React, { Fragment, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';

export const useStringState = (defaultState: string) => {
  const [stringState, setStringState] = useState(defaultState);

  return { value: stringState, setValue: setStringState };
};
