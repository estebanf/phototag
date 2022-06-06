import React, { CSSProperties, forwardRef, SyntheticEvent, useMemo } from 'react';

import { SerializedStyles, css } from '@emotion/react';
import {
  ClickAwayListener,
  Popper as MuiPopper,
  PopperProps as MuiPopperProps,
} from '@mui/material';
import { bindToggle, usePopupState, bindPopper } from 'material-ui-popup-state/hooks';

import { ComponentDataProps } from '../types';

export type PopperProps = Omit<MuiPopperProps, 'open'> &
  ComponentDataProps & {
    target: React.ReactNode;
    content: (args: { onMouseLeave: (event: SyntheticEvent<unknown>) => void }) => React.ReactNode;
    forceOpen?: boolean;
    __nodeAlias?: string;
    style?: CSSProperties;
    css?: SerializedStyles;
  };

export const Popper = forwardRef<HTMLDivElement, PopperProps>(
  (
    {
      target,
      content,
      forceOpen,
      __nodeAlias,
      style,
      css: cssProp,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
      ...popperProps
    },
    ref,
  ): JSX.Element => {
    const popupState = usePopupState({
      variant: 'popper',
      popupId: __nodeAlias,
    });

    const bindPopperState = useMemo(() => bindPopper(popupState), [popupState]);
    const bindToggleState = useMemo(() => bindToggle(popupState), [popupState]);
    const open = forceOpen === undefined ? bindPopperState.open : forceOpen;

    return (
      <div
        ref={ref}
        style={style}
        css={cssProp}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
      >
        <div
          {...bindToggleState}
          css={css`
            display: inline-flex;
          `}
        >
          {target}
        </div>
        <MuiPopper {...bindPopperState} {...popperProps} open={open}>
          <ClickAwayListener onClickAway={popupState.close}>
            <div>{content({ onMouseLeave: bindPopperState.onMouseLeave })}</div>
          </ClickAwayListener>
        </MuiPopper>
      </div>
    );
  },
);
