import { forwardRef } from 'react';

import { AutocompleteChangeReason, AutocompleteChangeDetails } from '@mui/material';
import { Field, FieldProps, FieldValidator } from 'formik';

import { Autocomplete, AutocompleteProps } from '../Autocomplete';
import { getIsInvalid } from '../common';
import { ComponentDataProps } from '../types';

export type FormAutocompleteProps = ComponentDataProps & {
  fieldProps: {
    name: string;
    validate?: FieldValidator;
  };
  autocompleteProps: AutocompleteProps & {
    onChange?: (
      event: React.ChangeEvent<Record<string, unknown>>,
      value: unknown,
      reason?: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<unknown>,
      fieldProps?: FieldProps,
    ) => void;
  };
};

export const FormAutocomplete = forwardRef<HTMLDivElement, FormAutocompleteProps>(
  (
    {
      fieldProps,
      autocompleteProps,
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
            <Autocomplete
              {...autocompleteProps}
              ref={ref}
              data-test={dataTest}
              data-node-id={dataNodeID}
              data-node-render-path={dataRenderPath}
              value={field.value}
              error={isInvalid}
              helperText={errorText}
              name={fieldProps.name}
              // TODO: rewrite types for onChange function (Material-v4 => Material-v5)
              // This was a little workaround but after update @types/react to version 17.0.3
              // the typescript starts to show a warn here here so this function should be rewritten
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onChange={(
                event: React.ChangeEvent<Record<string, unknown>>,
                value: unknown,
                reason?: AutocompleteChangeReason,
                details?: AutocompleteChangeDetails<unknown>,
              ) => {
                if (autocompleteProps.onChange) {
                  autocompleteProps.onChange(event, value, reason, details, {
                    field,
                    meta,
                    form,
                  });
                } else {
                  form.setFieldValue(fieldProps.name, value);
                }
              }}
            />
          );
        }}
      </Field>
    );
  },
);
