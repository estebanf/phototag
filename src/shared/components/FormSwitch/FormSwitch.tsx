import React, { forwardRef } from 'react';

import { Field, FieldProps, FieldValidator } from 'formik';

import { getIsInvalid } from '../common';
import { Switch, SwitchProps } from '../Switch';
import { ComponentDataProps } from '../types';

export type FormSwitchProps = ComponentDataProps & {
  fieldProps: {
    name: string;
    validate?: FieldValidator;
  };
  switchProps: SwitchProps;
};

export const FormSwitch = forwardRef<HTMLDivElement, FormSwitchProps>(
  (
    {
      switchProps,
      fieldProps,
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
    },
    ref,
  ) => {
    return (
      <Field name={fieldProps.name} validate={fieldProps.validate}>
        {({ field, meta, form }: FieldProps) => {
          const isInvalid = getIsInvalid({ meta, form });
          const errorText = isInvalid ? meta.error : undefined;

          return (
            <Switch
              {...switchProps}
              ref={ref}
              data-test={dataTest}
              data-node-id={dataNodeID}
              data-node-render-path={dataRenderPath}
              checked={field.value}
              onChange={(_, checked) => form.setFieldValue(fieldProps.name, checked)}
              name={fieldProps.name}
              error={isInvalid}
              helperText={errorText}
            />
          );
        }}
      </Field>
    );
  },
);
