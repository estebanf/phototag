/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { Grid } from '@mui/material';

type GridItemSymbolProps = {
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
  justify?: any;
  wrap?: any;
  lg?: any;
  md?: any;
  sm?: any;
  xl?: any;
  xs?: any;
  zeroMinWidth?: boolean;
};

export const GridItemSymbol: React.FC<GridItemSymbolProps> = (symbolProps) => {
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
      item={true}
      lg={symbolProps.lg}
      md={symbolProps.md}
      sm={symbolProps.sm}
      wrap={symbolProps.wrap}
      xl={symbolProps.xl}
      xs={symbolProps.xs}
      zeroMinWidth={symbolProps.zeroMinWidth}
    >
      <div
        css={css`
display: flex;
height: 100%;
width: 100%;
align-content: ${symbolProps.alignContent};
align-items: ${symbolProps.alignItems};
justify-content: ${symbolProps.justify};
`}
      >
        {symbolProps.children}
      </div>
    </Grid>
  );
};
