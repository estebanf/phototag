import React, { CSSProperties, forwardRef, ReactElement } from 'react';

import { CircularProgress, CircularProgressProps } from '@mui/material';

import { Box, BoxProps } from '../Box';
import { ComponentDataProps } from '../types';

type AsyncContentProps = ComponentDataProps & {
  style?: CSSProperties;
  stretch?: boolean;
  loading?: boolean;
  children?: ReactElement;
  boxProps?: BoxProps;
  circularProgressProps?: CircularProgressProps;
};

const STRETCH_PROPS = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  flexGrow: 1,
};

export const AsyncContent = forwardRef<HTMLDivElement, AsyncContentProps>(
  (
    {
      style,
      children,
      loading,
      stretch,
      boxProps = {},
      circularProgressProps = {},
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
    },
    ref,
  ) => {
    const stretchProps = stretch && loading ? STRETCH_PROPS : {};

    const resultBoxProps = {
      ...boxProps,
      ...stretchProps,
    };

    let content: React.ReactNode = null;
    if (loading) {
      content = <CircularProgress {...circularProgressProps} />;
    } else if (children) {
      content = children;
    }

    return (
      <Box
        ref={ref}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
        style={style}
        {...resultBoxProps}
      >
        {content}
      </Box>
    );
  },
);
