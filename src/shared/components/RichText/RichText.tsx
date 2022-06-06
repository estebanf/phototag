import { forwardRef, Ref } from 'react';

import { SerializedStyles } from '@emotion/react';

import { ComponentDataProps } from '../types';

type RichTextProps = ComponentDataProps & {
  style?: Record<string, string>;
  children?: React.ReactNode;
  css?: SerializedStyles;
};

export const RichText = forwardRef(
  ({ style = {}, ...rest }: RichTextProps, ref: Ref<HTMLDivElement>) => {
    // we need to enforce overflow to force `div` to include inner margins,
    // otherwise those will collapse by default & we wont be able to size overlays accurately
    return <div ref={ref} {...rest} style={{ ...style, overflow: 'auto' }} />;
  },
);
