/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { Grid } from '@mui/material';

type GridContainerSymbolProps = {
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
  alignContent?: any;
  alignItems?: any;
  direction?: any;
  justifyContent?: any;
  spacing?: any;
  wrap?: any;
};

export const GridContainerSymbol: React.FC<GridContainerSymbolProps> = (
  symbolProps,
) => {
  return (
    <Grid
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
      alignContent={symbolProps.alignContent}
      alignItems={symbolProps.alignItems}
      container={true}
      direction={symbolProps.direction}
      justifyContent={symbolProps.justifyContent}
      spacing={symbolProps.spacing}
      wrap={symbolProps.wrap}
    >
      {symbolProps.children}
    </Grid>
  );
};
