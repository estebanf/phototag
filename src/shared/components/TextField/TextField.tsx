import {
  ChangeEvent,
  forwardRef,
  useCallback,
  useRef,
  useState,
  useEffect,
  CSSProperties,
} from 'react';

import { SerializedStyles } from '@emotion/react';
import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import debounce from 'lodash.debounce';
import { isNil } from 'ramda';

import { ComponentDataProps } from '../types';

export type TextFieldProps = Omit<MuiTextFieldProps, 'InputProps'> &
  ComponentDataProps & {
    debounce?: number;
    style?: CSSProperties;
    css?: SerializedStyles;
    classes?: Record<string, unknown>;
    className?: string;
    InputProps?: MuiTextFieldProps['InputProps'] & {
      style?: CSSProperties;
      css?: SerializedStyles;
      classes?: Record<string, unknown>;
      className?: string;
    };
  };

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      debounce: debounceTime,
      onChange,
      value,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
      InputProps = {},
      ...rest
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = useState<string>(value as string);

    const createDebounceCallback = useCallback(
      (debounceTimeArg?: number) => {
        return debounce(
          (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, nextValue: string) => {
            // eslint-disable-next-line no-param-reassign
            event.target.value = nextValue;
            onChange?.(event);
          },
          debounceTimeArg,
        );
      },
      [onChange],
    );

    const debouncedChangePropValue = useRef(createDebounceCallback(debounceTime));

    useEffect(() => {
      debouncedChangePropValue.current = createDebounceCallback(debounceTime);
    }, [createDebounceCallback, debounceTime]);

    const setDebouncedValue = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLocalValue(event.target.value);

        if (isNil(debounceTime)) {
          onChange?.(event);
        } else {
          debouncedChangePropValue.current(event, event.target.value);
        }
      },
      [debounceTime, onChange],
    );

    const {
      startAdornment: initialStartAdornment,
      endAdornment: initialEndAdornment,
      ...restInputProps
    } = InputProps;

    // I'm not sure if it's necessary but this is the way how
    // They add adornments in the TextFields (In the documentation)
    // https://material-ui.com/components/text-fields/#icons
    const startAdornment = initialStartAdornment && (
      <InputAdornment position="start">{initialStartAdornment}</InputAdornment>
    );
    const endAdornment = initialEndAdornment && (
      <InputAdornment position="end">{initialEndAdornment}</InputAdornment>
    );

    return (
      <MuiTextField
        ref={ref}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
        InputProps={{
          startAdornment,
          endAdornment,
          ...restInputProps,
        }}
        {...rest}
        value={localValue}
        onChange={setDebouncedValue}
      />
    );
  },
);
