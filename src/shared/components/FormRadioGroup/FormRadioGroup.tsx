import React, { forwardRef, Ref } from 'react';

import { Field, FieldProps, FieldValidator } from 'formik';

import { getIsInvalid } from '../common';
import { RadioGroup, RadioGroupProps } from '../RadioGroup';
import { ComponentDataProps } from '../types';

export type FormRadioGroupProps = ComponentDataProps & {
  children: React.ReactNode;
  radioGroupProps: RadioGroupProps;
  fieldProps: {
    name: string;
    validate?: FieldValidator;
  };
};

export const FormRadioGroup = forwardRef(
  (
    {
      children,
      radioGroupProps,
      fieldProps,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
    }: FormRadioGroupProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <Field name={fieldProps.name} validate={fieldProps.validate}>
        {({ field, meta, form }: FieldProps) => {
          const isInvalid = getIsInvalid({ meta, form });
          const errorText = isInvalid ? meta.error : undefined;

          return (
            <RadioGroup
              {...radioGroupProps}
              ref={ref}
              data-test={dataTest}
              data-node-id={dataNodeID}
              data-node-render-path={dataRenderPath}
              value={field.value}
              onChange={(_, value) => form.setFieldValue(fieldProps.name, value)}
              error={isInvalid}
              helperText={errorText}
            >
              {children}
            </RadioGroup>
          );
        }}
      </Field>
    );
  },
);
