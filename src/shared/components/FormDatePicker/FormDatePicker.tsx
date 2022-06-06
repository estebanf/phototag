import { forwardRef } from 'react';

import { Field, FieldProps, FieldValidator } from 'formik';

import { getIsInvalid } from '../common';
import { DatePicker, DatePickerProps } from '../DatePicker';
import { ComponentDataProps } from '../types';

export type FormDatePickerProps = ComponentDataProps & {
  fieldProps: {
    name: string;
    validate?: FieldValidator;
  };
  datePickerProps?: Omit<DatePickerProps, 'onChange' | 'value'>;
};

export const FormDatePicker = forwardRef<HTMLInputElement, FormDatePickerProps>(
  (
    {
      fieldProps,
      datePickerProps,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
    },
    ref,
  ) => {
    return (
      <Field name={fieldProps.name} validate={fieldProps.validate}>
        {({ field, form, meta }: FieldProps) => {
          const isInvalid = getIsInvalid({ meta, form });
          const errorText = isInvalid ? meta.error : undefined;

          return (
            <DatePicker
              ref={ref}
              {...datePickerProps}
              value={field.value}
              onChange={(date, value) => form.setFieldValue(fieldProps.name, value)}
              data-test={dataTest}
              data-node-id={dataNodeID}
              data-node-render-path={dataRenderPath}
              error={isInvalid}
              helperText={errorText}
            />
          );
        }}
      </Field>
    );
  },
);
