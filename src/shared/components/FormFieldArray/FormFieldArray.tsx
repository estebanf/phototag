import React, { forwardRef, Ref } from 'react';

import { FieldArray, FieldArrayConfig } from 'formik';

import { ComponentDataProps } from '../types';

export type FormFieldArrayProps = ComponentDataProps &
  FieldArrayConfig & {
    className: string;
    style: React.CSSProperties;
  };

export const FormFieldArray = forwardRef(
  (
    {
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
      style,
      className,
      ...props
    }: FormFieldArrayProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
        className={className}
        style={style}
      >
        <FieldArray {...props} />
      </div>
    );
  },
);
