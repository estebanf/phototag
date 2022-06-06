import React, { CSSProperties, forwardRef, useMemo, useState } from 'react';

import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/lab';
import { FormHelperText, TextField, TextFieldProps, FormControl } from '@mui/material';
import { DateTime } from 'luxon';

import { ComponentDataProps } from '../types';

export type DatePickerProps = ComponentDataProps &
  Omit<
    MuiDatePickerProps,
    'value' | 'initialFocusedDate' | 'renderInput' | 'onChange' | 'value'
  > & {
    renderInput?: (
      props: TextFieldProps,
    ) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
    initialFocusedDate?: string;
    style?: CSSProperties;
    css?: string;
    error?: boolean;
    helperText?: React.ReactNode;
    inputVariant?: 'filled' | 'standard' | 'outlined';
    onChange?: MuiDatePickerProps['onChange'];
    value?: MuiDatePickerProps['value'];
  };

const DEFAULT_FORMAT = 'MM/dd/yyyy';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      onChange = () => undefined,
      value = '',
      initialFocusedDate,
      renderInput,
      error,
      helperText,
      disabled,
      className,
      style,
      css,
      inputVariant,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
      ...otherDatePickerProps
    },
    ref,
  ) => {
    const inputFormat = otherDatePickerProps.inputFormat ?? DEFAULT_FORMAT;
    const initialValue = useMemo(() => value || initialFocusedDate, [initialFocusedDate, value]) as
      | string
      | undefined;
    const parsedDate = useMemo(() => DateTime.fromFormat(initialValue ?? '', inputFormat), [
      initialValue,
      inputFormat,
    ]);
    const isValidDate = parsedDate.isValid;
    const [localValue, setLocalValue] = useState<DateTime | null>(
      isValidDate ? parsedDate : DateTime.now(),
    );
    const InputProps = useMemo(
      () => ({
        style,
        css,
        className,
        error,
        ...otherDatePickerProps.InputProps,
      }),
      [style, css, className, error, otherDatePickerProps.InputProps],
    );

    const handleDateChange = (date: unknown) => {
      setLocalValue(date as DateTime | null);
      onChange?.(date, (date as DateTime | null)?.toFormat(inputFormat));
    };

    const renderInputFunction =
      renderInput || (params => <TextField {...params} variant={inputVariant} />);

    return (
      <FormControl
        disabled={disabled}
        ref={ref}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
      >
        <MuiDatePicker
          {...otherDatePickerProps}
          disabled={disabled}
          InputProps={InputProps}
          onChange={handleDateChange}
          value={localValue}
          inputFormat={inputFormat}
          renderInput={renderInputFunction}
          data-test={dataTest}
          data-node-id={dataNodeID}
          data-node-render-path={dataRenderPath}
        />
        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </FormControl>
    );
  },
);
