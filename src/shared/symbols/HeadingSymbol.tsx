/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { Typography } from '@mui/material';

type HeadingSymbolProps = {
  classes?: Record<string, any>;
  style?: Record<string, any>;
  css?: SerializedStyles;
  className?: string;
  onClick?: (event: SyntheticEvent | undefined) => void;
  onMouseOver?: (event: SyntheticEvent | undefined) => void;
  onMouseOut?: (event: SyntheticEvent | undefined) => void;
  onMouseDown?: (event: SyntheticEvent | undefined) => void;
  onMouseUp?: (event: SyntheticEvent | undefined) => void;
  onMouseEnter?: (event: SyntheticEvent | undefined) => void;
  onMouseLeave?: (event: SyntheticEvent | undefined) => void;
  onWheel?: (event: SyntheticEvent | undefined) => void;
  onContextMenu?: (event: SyntheticEvent | undefined) => void;
  onAuxClick?: (event: SyntheticEvent | undefined) => void;
  key?: number;
  children?: React.ReactNode;
  variant?: any;
  align?: any;
  color?: any;
  gutterBottom?: boolean;
  noWrap?: boolean;
  component?: any;
};

export const HeadingSymbol: React.FC<HeadingSymbolProps> = (symbolProps) => {
  return (
    <Typography
      classes={symbolProps?.classes}
      style={symbolProps?.style}
      css={symbolProps?.css}
      className={symbolProps?.className}
      onClick={symbolProps?.onClick}
      onMouseOver={symbolProps?.onMouseOver}
      onMouseOut={symbolProps?.onMouseOut}
      onMouseDown={symbolProps?.onMouseDown}
      onMouseUp={symbolProps?.onMouseUp}
      onMouseEnter={symbolProps?.onMouseEnter}
      onMouseLeave={symbolProps?.onMouseLeave}
      onWheel={symbolProps?.onWheel}
      onContextMenu={symbolProps?.onContextMenu}
      onAuxClick={symbolProps?.onAuxClick}
      component={symbolProps.component}
      variant={symbolProps.variant}
      align={symbolProps.align}
      color={symbolProps.color}
      gutterBottom={symbolProps.gutterBottom}
      noWrap={symbolProps.noWrap}
    >
      {symbolProps.children}
    </Typography>
  );
};
