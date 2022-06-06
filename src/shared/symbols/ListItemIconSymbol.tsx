/** @jsxRuntime classic */
/** @jsx jsx */

import React, { Fragment, SyntheticEvent } from 'react';
import { css, SerializedStyles, jsx } from '@emotion/react';
import { ListItemIcon } from '@mui/material';
import { Icon } from 'shared/components';

const listItemIcon1CSS = css`
min-width: auto;
color: inherit;
`;

type ListItemIconSymbolProps = {
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
  name?: string;
  variant?: any;
  color?: any;
  fontSize?: any;
  viewBox?: string;
  htmlColor?: string;
  customIcon?: string;
};

export const ListItemIconSymbol: React.FC<ListItemIconSymbolProps> = (
  symbolProps,
) => {
  return (
    <ListItemIcon
      css={listItemIcon1CSS}
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
    >
      <Icon
        classes={symbolProps?.classes}
        style={symbolProps?.style}
        css={symbolProps?.css}
        className={symbolProps?.className}
        customIcon={symbolProps.customIcon}
        name={symbolProps.name}
        variant={symbolProps.variant}
        color={symbolProps.color}
        fontSize={symbolProps.fontSize}
        viewBox={symbolProps.viewBox}
        htmlColor={symbolProps.htmlColor}
      />
    </ListItemIcon>
  );
};
