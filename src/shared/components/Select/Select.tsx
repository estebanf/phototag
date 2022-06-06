import React, { CSSProperties, forwardRef } from 'react';

import { SerializedStyles } from '@emotion/react';
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  Select as MaterialSelect,
  SelectProps as MaterialSelectProps,
} from '@mui/material';

import { ComponentDataProps } from '../types';

export type SelectProps = Omit<MaterialSelectProps<unknown[]>, 'ref' | 'error'> &
  ComponentDataProps &
  Pick<FormControlProps, 'variant' | 'size'> & {
    error?: boolean;
    helperText?: React.ReactNode;
    style?: CSSProperties;
    css?: SerializedStyles;
  };

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      disabled,
      label,
      className,
      style,
      css,
      error,
      helperText,
      variant,
      size,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
      ...otherSelectProps
    },
    ref,
  ) => {
    return (
      <FormControl
        variant={variant}
        size={size}
        disabled={disabled}
        className={className}
        style={style}
        css={css}
        ref={ref}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
      >
        {label && <InputLabel>{label}</InputLabel>}
        <MaterialSelect {...otherSelectProps} error={error} label={label} />
        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);
