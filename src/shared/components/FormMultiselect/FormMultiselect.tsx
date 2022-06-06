import { forwardRef } from 'react';

import { Field, FieldProps, FieldValidator } from 'formik';

import { getIsInvalid } from '../common';
import { Multiselect, MultiselectProps } from '../Multiselect';
import { ComponentDataProps } from '../types';

export type FormMultiselectProps = ComponentDataProps & {
  fieldProps: {
    name: string;
    validate?: FieldValidator;
  };
  selectProps: MultiselectProps;
};

export const FormMultiselect = forwardRef<HTMLDivElement, FormMultiselectProps>(
  (
    {
      fieldProps,
      selectProps,
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
            <Multiselect
              {...selectProps}
              name={fieldProps.name}
              value={field.value}
              onChange={field.onChange}
              error={isInvalid}
              helperText={errorText}
              ref={ref}
              data-test={dataTest}
              data-node-id={dataNodeID}
              data-node-render-path={dataRenderPath}
            />
          );
        }}
      </Field>
    );
  },
);
