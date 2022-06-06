import React, { CSSProperties, ElementType, forwardRef } from 'react';

import { SerializedStyles } from '@emotion/react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps<C extends ElementType = 'button'> = MuiButtonProps<C> & {
  component?: C;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: CSSProperties;
  css?: SerializedStyles;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, children, onClick, ...rest }, ref) => {
    return (
      <MuiButton {...rest} ref={ref}>
        {children}
      </MuiButton>
    );
  },
);
