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
  const {
    storeContentRectHeight,
    cRectHeight,
    columnsSizes,
    useSmartOverflowX,
    children,
    setDisplay,
    display,
  } = props;

  const ref = useRef();

  useResizeObserver([ref, columnsSizes], (contentRect) => {
    if (useSmartOverflowX) {
      const table = (ref && ref.current) ? ref.current.querySelector('table') : {};
      table.setAttribute('style', 'display: table; width: auto;');
      const { width: tableWidth } = table.getBoundingClientRect
        ? table.getBoundingClientRect()
        : { width: 0 };
      const { height, width: containerWidth } = contentRect;
      const displayVal = tableWidth <= containerWidth ? 'table' : 'block';

      if (display !== displayVal) {
        setDisplay(displayVal);
      }

      if (cRectHeight !== height) {
        storeContentRectHeight(
          // Substract scroll bar width, if needed, to remove a useless spacing
          // that would create a useless scrolling context
          // this only serves as a way to get a nice drag ghost,
          // a couple missing PX are not a big issue,
          // where a couple too much create the aforementioned issue
          displayVal === 'block'
            ? height - 17 // largest registered scrollbarWidth (https://bit.ly/2UBdiFz)
            : height
        );
      }

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
