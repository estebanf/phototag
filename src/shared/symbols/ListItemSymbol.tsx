/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { ListItem, ListItemButton } from '@mui/material';
import { Tooltip } from 'shared/components';

type ListItemSymbolProps = {
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
  autoFocus?: boolean;
  tooltipTitle?: string;
  tooltipPlacement?: any;
  button?: boolean;
  selected?: boolean;
  alignItems?: any;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  startIcon?: React.ReactNode;
  listItemText?: React.ReactNode;
  startIconStyle?: Record<string, any>;
};

export const ListItemSymbol: React.FC<ListItemSymbolProps> = (symbolProps) => {
  return (
    <Fragment>
      {!symbolProps.tooltipTitle && !symbolProps.button && (
        <ListItem
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
          alignItems={symbolProps.alignItems}
          dense={symbolProps.dense}
          disableGutters={symbolProps.disableGutters}
          divider={symbolProps.divider}
        >
          {symbolProps.startIcon && (
            <Fragment>{symbolProps.startIcon}</Fragment>
          )}
          <Fragment>{symbolProps.listItemText}</Fragment>
        </ListItem>
      )}
      {!symbolProps.tooltipTitle && symbolProps.button && (
        <ListItemButton
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
          alignItems={symbolProps.alignItems}
          autoFocus={symbolProps.autoFocus}
          dense={symbolProps.dense}
          disabled={symbolProps.disabled}
          disableGutters={symbolProps.disableGutters}
          divider={symbolProps.divider}
          selected={symbolProps.selected}
        >
          {symbolProps.startIcon && (
            <Fragment>{symbolProps.startIcon}</Fragment>
          )}
          <Fragment>{symbolProps.listItemText}</Fragment>
        </ListItemButton>
      )}
      {symbolProps.tooltipTitle && (
        <Tooltip
          placement={symbolProps.tooltipPlacement}
          title={symbolProps.tooltipTitle}
        >
          <Fragment>
            {!symbolProps.button && (
              <ListItem
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
                alignItems={symbolProps.alignItems}
                dense={symbolProps.dense}
                disableGutters={symbolProps.disableGutters}
                divider={symbolProps.divider}
              >
                {symbolProps.startIcon && (
                  <Fragment>{symbolProps.startIcon}</Fragment>
                )}
                <Fragment>{symbolProps.listItemText}</Fragment>
              </ListItem>
            )}
            {symbolProps.button && (
              <ListItemButton
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
                alignItems={symbolProps.alignItems}
                autoFocus={symbolProps.autoFocus}
                dense={symbolProps.dense}
                disabled={symbolProps.disabled}
                disableGutters={symbolProps.disableGutters}
                divider={symbolProps.divider}
                selected={symbolProps.selected}
              >
                {symbolProps.startIcon && (
                  <Fragment>{symbolProps.startIcon}</Fragment>
                )}
                <Fragment>{symbolProps.listItemText}</Fragment>
              </ListItemButton>
            )}
          </Fragment>
        </Tooltip>
      )}
    </Fragment>
  );
};
