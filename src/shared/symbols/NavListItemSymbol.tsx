/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { useHistory, useLocation, matchPath } from 'react-router-dom';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { ListItemButton } from '@mui/material';
import { Tooltip } from 'shared/components';

type NavListItemSymbolProps = {
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
  path?: string;
  exact?: boolean;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  selectedBackgroundColor?: string;
  selectedColor?: string;
  selectedIconColor?: string;
  color?: string;
  autoFocus?: boolean;
  selected?: boolean;
  alignItems?: any;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  disableRipple?: boolean;
  divider?: boolean;
  tooltipTitle?: string;
  tooltipPlacement?: any;
  startIcon?: React.ReactNode;
  listItemText?: React.ReactNode;
  startIconStyle?: Record<string, any>;
};

export const NavListItemSymbol: React.FC<NavListItemSymbolProps> = (
  symbolProps,
) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Fragment>
      {!symbolProps.tooltipTitle && (
        <ListItemButton
          classes={symbolProps?.classes}
          style={{
            ...symbolProps?.style,
            backgroundColor: matchPath(location.pathname, {
              path: symbolProps.path,
              exact: symbolProps.exact,
            })
              ? symbolProps.selectedBackgroundColor
              : symbolProps.backgroundColor || 'transparent',
            color: matchPath(location.pathname, {
              path: symbolProps.path,
              exact: symbolProps.exact,
            })
              ? symbolProps.selectedColor
              : symbolProps.color,
          }}
          css={symbolProps?.css}
          className={symbolProps?.className}
          onClick={(event) => {
            symbolProps.onClick
              ? symbolProps.onClick(event)
              : history.push(symbolProps.path ?? '/');
          }}
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
            <Fragment>{[symbolProps.startIcon]}</Fragment>
          )}
          <Fragment>{symbolProps.listItemText}</Fragment>
        </ListItemButton>
      )}
      {symbolProps.tooltipTitle && (
        <Tooltip
          placement={symbolProps.tooltipPlacement}
          title={symbolProps.tooltipTitle}
        >
          <ListItemButton
            classes={symbolProps?.classes}
            style={{
              ...symbolProps?.style,
              backgroundColor: matchPath(location.pathname, {
                path: symbolProps.path,
                exact: symbolProps.exact,
              })
                ? symbolProps.selectedBackgroundColor
                : symbolProps.backgroundColor || 'transparent',
              color: matchPath(location.pathname, {
                path: symbolProps.path,
                exact: symbolProps.exact,
              })
                ? symbolProps.selectedColor
                : symbolProps.color,
            }}
            css={symbolProps?.css}
            className={symbolProps?.className}
            onClick={(event) => {
              symbolProps.onClick
                ? symbolProps.onClick(event)
                : history.push(symbolProps.path ?? '/');
            }}
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
        </Tooltip>
      )}
    </Fragment>
  );
};
