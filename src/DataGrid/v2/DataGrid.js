// @flow
import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Table from './Table'
import Th from './Th'
import Tr from './Tr'
import Td from './Td'
import Flex from '../Layouts/Flex'
import useOnDocumentMouseUp from '../hooks/useOnDocumentMouseUp'
import useOnDocumentMouseMove from '../hooks/useOnDocumentMouseMove'
import useResizeObserver from '../hooks/useResizeObserver'



const DataGridWrapper = styled.div`
  /* max-width: 100%;
  overflow-x: auto; */
  display: flex;
  table {
    display: ${({ display }) => display};
    width: 100%;
  }
`;

const DataGrid = props => {
  const {
    model,
    data,
    selectable,
    onChange,
    borderCollapse,
    selected: selectedProp,
    defaultSelected,
    resizable,
    defaultColumnsSizes,
    useSmartOverflowX,
  } = props;

  /* Resize */
  const columnsCount = model.length + (selectable ? 1 : 0)

  const [columnsSizes, setColumnsSizes] = useState(defaultColumnsSizes || [...new Array(columnsCount)].map(x => 'none')) // do we need controlled behavior ?

  const [isResizing, setIsResizing] = useState()
  const [resizingColumnIndexes, setResizingColumnIndexes] = useState()
  const [pageX, setPageX] = useState()
  const [curColWidth, setCurColWidth] = useState()
  const [nextColWidth, setNextColWidth] = useState()

  const onResizeStart = (e, columnIdx) => {
    const siblingColumnIdx = columnIdx > -1
      ? (columnIdx + 1) <= columnsCount ? columnIdx + 1 : null
      : null

    setIsResizing(true);
    setResizingColumnIndexes([columnIdx, siblingColumnIdx]);
    const nextCol = e.target.parentElement.nextElementSibling ;
    setPageX( e.pageX);
    setCurColWidth( e.target.parentElement.offsetWidth)
    if (nextCol)
      setNextColWidth(nextCol.offsetWidth)
  }

  useOnDocumentMouseMove(null, function (e) {
    if (isResizing) {
      var diffX = e.pageX - pageX;
      const newColumnsSizes = columnsSizes.map((c, i) => {
        const [curColIdx, nxtColIdx] = resizingColumnIndexes

        if (nxtColIdx !== null && i === nxtColIdx) {
          return `${nextColWidth - diffX}px`
        }
        if (curColIdx === i) {
          return `${curColWidth + diffX}px`
        }
        return c
      })

      setColumnsSizes(newColumnsSizes)
    }
  })
  useOnDocumentMouseUp(null, (e) => {
    setIsResizing(false)
    setPageX(undefined)
    setCurColWidth(undefined)
    setNextColWidth(undefined)
  });
  console.log('columnsSizes', columnsSizes)



  /* selection */
  const isSelectionControlled = selectedProp !== undefined ? true : false;
  const [selected, setSelected] = useState(defaultSelected || [])
  const actualSelected = isSelectionControlled ? selectedProp : selected
  const onToggleSelectAll = ({ target = {} }) => {
    const newSelected = target.checked ? data.map((_, i) => i) : []
    if (!isSelectionControlled) {
      setSelected(newSelected)
    }
    onChange(newSelected)
  }
  const onToggle = ({ target = {} }, idx) => {
    const newSelected = target.checked
      ? [ ...actualSelected, idx ]
      : actualSelected.filter(x => x !== idx)

    if (!isSelectionControlled) {
      setSelected(newSelected)
    }
    onChange(newSelected)
  }


  /** useSmartOverflowX */
  const ref = useRef()
  const [display, setDisplay] = useState('table');
  useResizeObserver(ref, (contentRect) => {
    if (useSmartOverflowX) {
      const table = (ref && ref.current) ? ref.current.querySelector('table') : {};
      console.log('container', ref.current)
      console.log('table', table)
      table.setAttribute('style', 'display: table; width: auto;');
      const { width: tableWidth } = table.getBoundingClientRect
        ? table.getBoundingClientRect()
        : { width: 0 };
      console.log('brect', tableWidth, table.getAttribute('style'), table)
      const { width: containerWidth } = contentRect;
      console.log('tableWidth', tableWidth)
      console.log('containerWidth', containerWidth)
      const displayVal = tableWidth <= containerWidth ? 'table' : 'block';
      setDisplay(displayVal);
      table.setAttribute('style', '');
      console.log('display in effet cb', displayVal)
    }
  });

  console.log('display', display)
  return (
    <DataGridWrapper ref={ref} display={display}>
      <Table
        borderCollapse={borderCollapse}
        // display={display}
      >
        <thead>
          <Tr>
            {
              selectable
                ? <Th
                  resizable={false}
                  style={{ width: '32px' }}
                >
                  <input type="checkbox" onChange={onToggleSelectAll} />
                </Th>
                : null
            }
            {
              model.map((m, i) => (
                <Th
                  index={i}
                  key={i}
                  {...(resizable
                    ? {
                      onResizeStart,
                      resizable: true,
                      style: { width: columnsSizes[i] },
                    }
                    : {}
                  )}
                >
                  <Flex style={{ flex: 1 }}>
                    {m.displayName}
                    <span style={{ marginLeft: 'auto' }}>{m.menu}</span>
                  </Flex>
                </Th>
              ))
            }
          </Tr>
        </thead>

        <tbody>
          {
            data.map((rowData, i) => (
              <Tr key={i} >
                {
                  selectable
                    ? <Td>
                      <input
                        type="checkbox"
                        onChange={(e) => onToggle(e, i)}
                        checked={isSelectionControlled
                          ? selectedProp.indexOf(i) > -1
                          : selected.indexOf(i) > -1
                        }
                      />
                    </Td>
                    : null
                }

                {
                  model.map((m = {}, i) => (
                    <Td key={i} >
                      {
                        (m.Component !== undefined)
                          ? <m.Component {...rowData} />
                          : rowData[m.property]
                      }
                    </Td>
                  ))
                }
              </Tr>
            ))
          }
        </tbody>
      </Table>
    </DataGridWrapper>
  )
}

DataGrid.propTypes = {
  model: PropTypes.arrayOf(PropTypes.shape({
    property: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    Component: PropTypes.string,
    menu: PropTypes.node,
  })),
  data: PropTypes.arrayOf(PropTypes.object),
  onChange: (selected: Array) => {},
  resizable: PropTypes.bool,
  selectable: PropTypes.bool,
  borderCollapse: PropTypes.oneOf(['collapse', 'separate']),
  selected: PropTypes.arrayOf(PropTypes.number),
  defaultSelected: PropTypes.arrayOf(PropTypes.number),
  defaultColumnsSizes: PropTypes.arrayOf(PropTypes.stirng),
  useSmartOverflowX: PropTypes.bool,
}

DataGrid.defaultProps = {
  model: [],
  data: [],
  onChange: (selected: Array) => {},
  resizable: false,
  selectable: false,
  borderCollapse: 'collapse',
  selected: undefined,
  defaultSelected: undefined,
  defaultColumnsSizes: undefined,
  useSmartOverflowX: false,
}

export default DataGrid;
