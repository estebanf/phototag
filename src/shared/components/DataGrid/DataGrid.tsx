import { useRef, forwardRef, useLayoutEffect, Ref, useCallback, MutableRefObject } from 'react';

import styled from '@emotion/styled';
import {
  DataGrid as MaterialDataGrid,
  DataGridProps as MaterialDataGridProps,
} from '@mui/x-data-grid';
import CSS from 'csstype';

import { ComponentDataProps } from '../types';

export type DataGridProps = MaterialDataGridProps &
  ComponentDataProps & {
    style?: CSS.Properties<string | number>;
    showTableBorder?: boolean;
  };

const DataGridWrapper = styled.div<Pick<DataGridProps, 'showTableBorder'>>`
  & .MuiDataGrid-root {
    ${props => !props.showTableBorder && `border: none;`}
  }
`;

export const DataGrid = forwardRef(
  (
    {
      style,
      className,
      showTableBorder,
      rows = [],
      columns = [],
      'data-test': dataTest,
      'data-node-id': dataNodeID,
      'data-node-render-path': dataRenderPath,
      ...gridRestProps
    }: DataGridProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const filteredRows = typeof rows?.filter === 'function' ? rows.filter(row => row.id) : [];
    const domRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

    const refCallback = useCallback(
      (node: HTMLDivElement) => {
        if (typeof ref === 'function') ref(node);

        if (typeof domRef === 'object') domRef.current = node;
      },
      [ref],
    );

    useLayoutEffect(() => {
      if (typeof domRef === 'object' && domRef?.current) {
        const gridDiv = domRef.current;
        const gridEl = gridDiv.querySelector('div') as HTMLDivElement;

        if (gridEl?.style) gridEl.style.height = '';
      }
    });

    return (
      <DataGridWrapper
        ref={refCallback}
        style={style}
        className={className}
        showTableBorder={showTableBorder}
        data-test={dataTest}
        data-node-id={dataNodeID}
        data-node-render-path={dataRenderPath}
      >
        <MaterialDataGrid {...gridRestProps} rows={filteredRows} columns={columns} />
      </DataGridWrapper>
    );
  },
);
