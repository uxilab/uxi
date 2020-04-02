// @flow
import React, { useRef } from 'react';
import styled from 'styled-components';
import useResizeObserver from '../hooks/useResizeObserver';
import type { DataGridProps } from './DataGrid';


// const scrollBarOffset = 20;
const selectableCellWidth = 50;

const DataGridSmartOverflowXWrapperUI = styled.div`
  &, & * {
    box-sizing: border-box !important;
  }
  display: flex;
  table {
    display: ${({ display }) => display};
    width: 100%;
  }
`;

const DataGridSmartOverflowXWrapper = (props: DataGridProps) => {
  const {
    storeContentRectHeight,
    setExtraColumnWidth,
    extraColWidth,
    cRectHeight,
    columnsSizes,
    useSmartOverflowX,
    children,
    setDisplay,
    display,
    hasBeenResizedOnce,
    columns,
    selectable,
  } = props;

  const ref = useRef();

  useResizeObserver([ref, columnsSizes], (contentRect) => {
    // if (isResizing) { return; }
    // if (isReordering) { return; }

    const table = (ref && ref.current) ? ref.current.querySelector('table') : {};
    table.setAttribute('style', 'display: table; width: auto;');
    let { width: tableWidth } = table.getBoundingClientRect
      ? table.getBoundingClientRect()
      : { width: 0 };

    // do not create a bad cyclic deps
    // check that we doo not take the extraol into accounot to calc
    // the diff for table/block selection
    // columns
    // const last = columns[columns.length - 1]
    const { height, width: containerWidth } = contentRect;

    const mainDiff = containerWidth - tableWidth;
    const displayVal = mainDiff >= 0 ? 'table' : 'block';
    table.setAttribute('style', '');


    console.log('containerWidth', containerWidth, ref.current);
    // const lastTh = table.querySelector('th:last-of-type');
    let widthsSum = columns.filter(x => !x.hide && x.property !== 'toString').reduce((a, { width }) => a + width, 0);
    if (selectable) {
      widthsSum += selectableCellWidth;
      // const extraColTh = (ref && ref.current) ? ref.current.querySelector('th:last') : {};
    }
    const actualExtraCollWidth = tableWidth - widthsSum;
    //   ? lastTh.getBoundingClientRect()
    //   : { width: 0 };

    console.log('widthsSum', widthsSum);
    console.log('actualExtraCollWidth', actualExtraCollWidth);
    if (actualExtraCollWidth) {
      tableWidth -= actualExtraCollWidth;
      // const extraColTh = (ref && ref.current) ? ref.current.querySelector('th:last') : {};
    }


    console.log('tableWidth', tableWidth, table);


    if (useSmartOverflowX) {
      if (hasBeenResizedOnce) {
        const d = containerWidth - tableWidth;
        // const offset = columns
        //  .filter(x => !x.hide).length - 1; // numbers of fences, not pickets;
        const offset = 4;
        const diff = d - offset > 0 ? d - offset : null; // like in the reducer
        if (
          (extraColWidth !== diff)
        ) {
          // if (diff > 0 && extraColWidth > 0 && extraColWidth !== diff) {
          setExtraColumnWidth(diff);
          // }
          // setDisplay('block');
        }

        if (
          (display !== 'block')
        ) {
          console.log('displayVal', 'block');
          setDisplay('block');
        }
        return;
      }

      if (display !== displayVal) {
        console.log('displayVal', displayVal);
        setDisplay(displayVal);
      }
      const heightChanged = (cRectHeight !== height);

      if (heightChanged) {
        storeContentRectHeight(
          // Substract scroll bar width, if needed, to remove a useless spacing
          // that would create a useless scrolling context
          // this only serves as a way to get a nice drag ghost,
          // a couple missing PX are not a big issue,
          // where a couple too much create the aforementioned issue
          // displayVal === 'block'
          //   // ? height - 17 // largest registered scrollbarWidth (https://bit.ly/2UBdiFz)
          //   ? height - scrollBarOffset // Lett's justt make sure we're good here
          //   : height
          height
        );
      }
    }
  });

  return (
    <DataGridSmartOverflowXWrapperUI ref={ref} display={display}>
      {children}
    </DataGridSmartOverflowXWrapperUI>
  );
};


export default DataGridSmartOverflowXWrapper;
