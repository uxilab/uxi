// @flow
import React, { useRef } from 'react';
import styled from 'styled-components';
import useResizeObserver from '../hooks/useResizeObserver';
import type { DataGridProps } from './DataGrid';


const DataGridSmartOverflowXWrapperUI = styled.div`
  display: flex;
  table {
    display: ${({ display }) => display};
    width: 100%;
  }
`;

const DataGridSmartOverflowXWrapper = (props: DataGridProps) => {
  const { columnsSizes, useSmartOverflowX, children, setDisplay, display } = props;
  /** useSmartOverflowX */
  const ref = useRef();
  // const [display, setDisplay] = useState('table');
  useResizeObserver([ref, columnsSizes], (contentRect) => {
    if (useSmartOverflowX) {
      const table = (ref && ref.current) ? ref.current.querySelector('table') : {};
      table.setAttribute('style', 'display: table; width: auto;');
      const { width: tableWidth } = table.getBoundingClientRect
        ? table.getBoundingClientRect()
        : { width: 0 };
      const { width: containerWidth } = contentRect;
      const displayVal = tableWidth <= containerWidth ? 'table' : 'block';
      setDisplay(displayVal);
      table.setAttribute('style', '');
    }
  });

  return (
    <DataGridSmartOverflowXWrapperUI ref={ref} display={display}>
      {children}
    </DataGridSmartOverflowXWrapperUI>
  );
};


export default DataGridSmartOverflowXWrapper;
