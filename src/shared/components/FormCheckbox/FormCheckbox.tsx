import React, { forwardRef } from 'react';

import { Field, FieldProps, FieldValidator } from 'formik';

import { Checkbox, CheckboxProps } from '../Checkbox';
import { getIsInvalid } from '../common';
import { ComponentDataProps } from '../types';

export type FormCheckboxProps = ComponentDataProps & {
  fieldProps: {
    name: string;
    validate?: FieldValidator;
  };
  checkboxProps: CheckboxProps;
};

export const FormCheckbox = forwardRef<HTMLDivElement, FormCheckboxProps>(
  (
    {
      checkboxProps,
      fieldProps,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
    },
    ref,
  ) => {
    const { disabled, ...otherCheckboxProps } = checkboxProps ?? {};

    return (
      <Field name={fieldProps.name} validate={fieldProps.validate}>
        {({ field, meta, form }: FieldProps) => {
          const isInvalid = getIsInvalid({ meta, form });
          const errorText = isInvalid ? meta.error : undefined;

          return (
            <Checkbox
              {...otherCheckboxProps}
              ref={ref}
              data-test={dataTest}
              data-node-id={dataNodeID}
              data-node-render-path={dataRenderPath}
              disabled={disabled}
              name={fieldProps.name}
              checked={Boolean(field.value)}
              onChange={(_, checked) => form.setFieldValue(fieldProps.name, checked)}
              error={isInvalid}
              helperText={errorText}
            />
          );
        }}
      </Field>
    );
  },
);
