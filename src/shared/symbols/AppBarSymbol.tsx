/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { AppBar, Toolbar } from '@mui/material';

type AppBarSymbolProps = {
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
  appBarProps?: {
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
    classes?: Record<string, any>;
    style?: Record<string, any>;
    css?: SerializedStyles;
    className?: string;
    color?: any;
    position?: any;
  };
  toolbarProps?: {
    classes?: Record<string, any>;
    style?: Record<string, any>;
    css?: SerializedStyles;
    className?: string;
    disableGutters?: boolean;
    variant?: any;
  };
};

export const AppBarSymbol: React.FC<AppBarSymbolProps> = (symbolProps) => {
  return (
    <AppBar
      classes={symbolProps.appBarProps?.classes}
      style={symbolProps.appBarProps?.style}
      css={symbolProps.appBarProps?.css}
      className={symbolProps.appBarProps?.className}
      onClick={symbolProps.appBarProps?.onClick}
      onMouseOver={symbolProps.appBarProps?.onMouseOver}
      onMouseOut={symbolProps.appBarProps?.onMouseOut}
      onMouseDown={symbolProps.appBarProps?.onMouseDown}
      onMouseUp={symbolProps.appBarProps?.onMouseUp}
      onMouseEnter={symbolProps.appBarProps?.onMouseEnter}
      onMouseLeave={symbolProps.appBarProps?.onMouseLeave}
      onWheel={symbolProps.appBarProps?.onWheel}
      onContextMenu={symbolProps.appBarProps?.onContextMenu}
      onAuxClick={symbolProps.appBarProps?.onAuxClick}
      color={symbolProps.appBarProps?.color}
      position={symbolProps.appBarProps?.position}
    >
      <Toolbar
        classes={symbolProps.toolbarProps?.classes}
        style={symbolProps.toolbarProps?.style}
        css={symbolProps.toolbarProps?.css}
        className={symbolProps.toolbarProps?.className}
        disableGutters={symbolProps.toolbarProps?.disableGutters}
        variant={symbolProps.toolbarProps?.variant}
      >
        {symbolProps.children}
      </Toolbar>
    </AppBar>
  );
};
