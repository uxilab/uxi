// @flow
import React, { useEffect, Component, useState, useReducer } from 'react';
// import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
// import { useDrag } from 'react-dnd';
import { Flex } from '../Layout/Flex';
import Checkbox from '../Input/Checkbox';
import CellWithPopOver from './CellWithPopOver';
import TdInnerWrapper from './TdInnerWrapper';
import TextEllipsis from '../Text/TextEllipsis';
import Table from './Table';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';
// import useOnDocumentMouseUp from '../hooks/useOnDocumentMouseUp';
// import useOnDocumentMouseMove from '../hooks/useOnDocumentMouseMove';
import DataGridSmartOverflowXWrapper from './DataGridSmartOverflowXWrapper';
import ThInnerWrapperComp from './ThInnerWrapper';
import reducer, { initialState } from './reducer'; // eslint-disable-line import/no-named-as-default
import {
  showColumn as showColumnAction,
  hideColumn as hideColumnAction,
  setColumnWidth as setColumnWidthAction,
  setCurrColumnWidth as setCurrColumnWidthAction,
  setIsResizing as setIsResizingAction,
  setNextColumnWidth as setNextColumnWidthAction,
} from './actions';

export const minCellWidth = 64;
const cellHeight = 48;

const runWarnings = (props) => {
  if (
    props.selected === undefined
    && props.selectable
    && props.data[0][props.propertyKey] === undefined
  ) {
    const msg = [
      'Missing `propertyKey`.',
      'If you entities do not have `id` DataGrid needs you to specify propertyKey props',
      'in order for the uncontrolled selection to work',
    ].join('');
    console.warn(msg);
    throw new Error(msg);
  }
};

type EntityId = String

type Entity = {
  id: EntityId,
}

type EntityModel = {
  property: String,
  displayName: String,
  Component: ?Component,
  menu: ?Node
}

export const SORTS = {
  ASC: 'ASC',
  DESC: 'DESC',
};
const toggleSORTS = sort => (SORTS[sort] === SORTS.ASC ? SORTS.DESC : SORTS.ASC);

export type SortDirection = 'ASC' | 'DESC'

type SortModel = {
  property: String,
  sortDirection: SortDirection
}

export type DataGridProps = {
  /** Allow using a other property than `id` to manage entity selection */
  propertyKey: ?String,

  model: ?Array<EntityModel>,
  data: Array<Entity>,

  /* Selection */
  selectable: ?Boolean,
  onSelectionChange: ?(checked: Boolean, entityId: EntityId, selected: Array<EntityId>) => {},
  onSelectAllChange: ?(selectAllChecked: Boolean) => {},
  resizable: ?Boolean,
  selected: ?Array<EntityId>,
  defaultSelected: ?Array<EntityId>,

  /* sorting */
  sortable: ?Boolean,
  sortDirections: ?Array<SortModel>,
  defaultSortDirections: ?Array<SortModel>,
  // eslint-disable-next-line max-len
  onSortChange: ?(property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},

  // defaultColumnsSizes: ?Array<string>,
  borderCollapse: ? 'collapse' | 'separate',
  useSmartOverflowX: ?Boolean,

  /**
   * @beta
   *
   * `ThInnerWrapper` allow passing a props to overwritte the Th inner Element
   * This may be useful but use wisely, as the layout of the default `ThInnerWrapper`
   * has been carefully crafted to support all the data features (resize, menus, etc.)
   */
  ThInnerWrapper: ?Component,
}

const DataGrid = (props: DataGridProps) => {
  const {
    propertyKey,

    data,
    model = Object.keys(data[0] || {}).map(k => ({ property: k, displayName: k })),

    selectable,
    onSelectionChange,
    onSelectAllChange,
    selected: selectedProp,
    defaultSelected,

    sortable,
    sortDirections: sortDirectionsProp,
    defaultSortDirections,
    onSortChange,

    // defaultColumnsSizes,
    // defaultColumnsSize,
    resizable,
    useSmartOverflowX: useSmartOverflowXProp,
    borderCollapse,

    ThInnerWrapper,

    // reorderable = true,

    tableHeaderOverlayRender,
    // eslint-disable-next-line no-nested-ternary
    baseCellWidth: baseCellWidthProp,
  } = props;

  const useSmartOverflowX = resizable
    ? true
    : useSmartOverflowXProp
  ;


  // eslint-disable-next-line no-nested-ternary
  const baseCellWidth = baseCellWidthProp !== undefined
    ? baseCellWidthProp
    : (useSmartOverflowX && resizable/*  && display === 'block' */)
      ? 240
      : undefined
  ;

  const availProps = model
    .map(m => ({ ...m, show: true, width: baseCellWidth }))
    .concat(
      Object.keys(data[0] || {})
        .map((k) => {
          const alreadyInModel = model.find(m => m.property === k);
          if (!alreadyInModel) {
            return {
              property: k,
              displayName: k,
              show: false,
              width: baseCellWidth,
            };
          }
          return null;
        })
        .filter(x => x)
    );

  // const columnsCount = model.length > 0 ? model.length + (selectable ? 1 : 0) : null;
  // const [columnsSizes, setColumnsSizes] = useState(
    // defaultColumnsSizes === undefined
  //     ? [...new Array(columnsCount)].map(() => baseCellWidth)
  // : defaultColumnsSizes
  // ); // do we need controlled behavior ?


  const [
    {
      columns,
      isResizing,
      pageX,
      isResizingProp,
      isResizingNextProp,
      currColWidth,
      nextColWidth,
      hasBeenResizedOnce,
    },
    dispatch,
  ] = useReducer(
    reducer,
    {
      ...initialState,
      columns: availProps,
    }
  );

  const showColumn = property => dispatch(showColumnAction(property));
  const hideColumn = property => dispatch(hideColumnAction(property));

  const setIsResizing = payload => dispatch(setIsResizingAction(payload));

  const setColumnWidth = ({ property, width }) =>
    dispatch(setColumnWidthAction({ property, width }));

  const setCurrColumnWidth = width => dispatch(setCurrColumnWidthAction(width));
  const setNextColumnWidth = width => dispatch(setNextColumnWidthAction(width));


  const [display, setDisplay] = useState('table'
    // resizable && useSmartOverflowX
    //   ? 'block'
    //   : 'table'
  );


  runWarnings(props);

  const hasCustomHeader = tableHeaderOverlayRender !== undefined;


  /* Resize + Reorder */

  /* Reorder */
  // const [columnsOrder, setColumnsOrder] = useState(model.map((m, i) => ({ ...m, index: i })));
  /* Reorder end */

  // const [isResizing, setIsResizing] = useState();
  // const [resizingColumnIndexes, setResizingColumnIndexes] = useState();
  // const [pageX, setPageX] = useState();
  // const [curColWidth, setCurColWidth] = useState();
  // const [nextColWidth, setNextColWidth] = useState();


  const onOnDocumentMouseUp = (/* e */) => {
    setIsResizing({
      isResizing: false,
      pageX: undefined,
      currColWidth: undefined,
      nextColWidth: undefined,
      property: undefined,
    });
    // setResizingColumnIndexes(undefined);
    // setPageX(undefined);
    // setCurColWidth(undefined);
    document.removeEventListener('mouseup', onOnDocumentMouseUp);
    // setNextColWidth(undefined);
    document.body.style.cursor = 'inherit';
  };

  const onResizeStart = (e, property) => {
    // eslint-disable-next-line no-shadow
    const currCol = e.target.parentElement.parentElement;
    // eslint-disable-next-line no-shadow
    const { width: currColWidth } = currCol.getBoundingClientRect();

    console.log('currColWidth', currColWidth, currCol);
    // eslint-disable-next-line no-nested-ternary
    // const siblingColumnIdx = columnIdx > -1
    //   ? (columnIdx + 1) <= columnsCount ? columnIdx + 1 : null
    //   : null;
    // setResizingColumnIndexes([columnIdx, siblingColumnIdx]);
    const nextCol = currCol.nextElementSibling;
    // eslint-disable-next-line no-shadow
    const { width: nextColWidth } = (nextCol ? nextCol.getBoundingClientRect() : {});
    console.log('nextColWidth', nextColWidth, nextCol);
    const payload = {
      isResizing: true,
      property,
      // resizingColumnIndexes: [columnIdx, nextCol ? siblingColumnIdx : void 0],
      pageX: e.pageX,
      currColWidth,
      nextColWidth: nextCol ? nextColWidth : undefined,
    };

    setIsResizing(payload);

    // setPageX(e.pageX);
    // setCurColWidth(currColWidth);
    // if (nextCol) { setNextColWidth(nextCol.offsetWidth); }

    document.addEventListener('mouseup', onOnDocumentMouseUp);

    // return () => {
    //   document.removeEventListener('mouseup', onOnDocumentMouseUp);
    // };

    document.body.style.cursor = 'col-resize';
  };

  // useOnDocumentMouseMove([isResizing], (e) => {
  const onOnDocumentMouseMoveHandler = (e) => {
    if (isResizing) {
      const diffX = e.pageX - pageX;
      console.log('diffX', diffX);
      if (display === 'table' && isResizingNextProp) {
        const v = nextColWidth - diffX;
        console.log('calling setNextColumnWidth', v);
        setNextColumnWidth(v < minCellWidth ? minCellWidth : v);
      }
      const newVal = currColWidth + diffX;
      setCurrColumnWidth(newVal < minCellWidth ? minCellWidth : newVal);
      // return c;
    }
  };

  useEffect(
    () => {
      if (isResizing) {
        // const listener = (event) => {
        //   onOnDocumentMouseMoveHandler(event);
        // };

        // const debounceListener = listener
        const debounceListener = debounce(
          // debounce(
          onOnDocumentMouseMoveHandler,
          // 32, { maxWait: 180, leading: true, trailing: true }
          // ),
          16, { maxWait: 16, leading: true, trailing: true }
        );

        document.addEventListener('mousemove', debounceListener);

        return () => {
          debounceListener.flush();
          document.removeEventListener('mousemove', debounceListener);
        };
      }
      return () => {};
    },
    [isResizing/* , onOnDocumentMouseMoveHandler */]
  );

  useEffect(
    () => {
      if (isResizing) {
        const listener = (event) => {
          onOnDocumentMouseUp(event);
        };

        document.addEventListener('mouseup', listener);

        return () => {
          document.removeEventListener('mouseup', listener);
        };
      }
      return () => {};
    },
    [isResizing, onOnDocumentMouseUp]
  );


  /* ColumnsOrder */
  /* this one is declared higher up in the comp: */
  // const [columnsOrder, setColumnsOrder] = useState(model.map((m, i) => ({ ...m, index: i })));
  // const [tempThWidth, setIsReordering] = useState(null);
  /*
  const [isReordering, setIsReordering] = useState(null);
  const [isReorderingHovered, setIsReorderingHovered] = useState(null);

  const onDragTableHeaderStart = (index, ref) => {
    if (ref && ref.current && ref.current.getBoundingClientRect) {
      const { width } = ref.current.getBoundingClientRect();
      setColumnsSizes([...columnsSizes]);
    }
    setIsReordering(index);
  };
  const onDragTableHeaderMove = (idx) => {
    if (isReorderingHovered !== idx) {
      setIsReorderingHovered(idx);
    }
  };
  const onDropTableHeader = (idx) => {
    const reorderedColsSizes = Object.entries(
      columnsSizes
        .reduce((ac, x, i) => {
          // eslint-disable-next-line no-param-reassign
          if (i === idx) {
            // eslint-disable-next-line no-param-reassign
            ac[isReordering] = x;
          } else if (i === isReordering) {
            // eslint-disable-next-line no-param-reassign
            ac[idx] = x;
          }
          return ac;
        }, {})
    )
      .map(([k, v]) => v);


    //   })
    // .reduce((ac, cs, i, l) => {
    //   if (i === idx) {
    //     // eslint-disable-next-line no-param-reassign
    //     ac[isReordering] = cs;
    //     // eslint-disable-next-line no-param-reassign
    //     ac[idx] = cs;
    //   }
    //   return ac;
    // }, columnsSizes);

    setColumnsOrder(columnsOrder
      .map((co) => {
        if (co.index === idx) {
          return {
            ...co,
            index: isReordering,
          };
        } else if (co.index === isReordering) {
          return {
            ...co,
            index: idx,
          };
        }
        return co;
      })
      .sort(({ index: a }, { index: b }) => (a > b ? +1 : -1))
    );
    setColumnsSizes(reorderedColsSizes);
    setIsReorderingHovered(null);
    setIsReordering(null);
  };
  */


  /* Sort */
  const isSortControlled = selectedProp !== undefined;
  const [sortDirections, setSortDirections] = useState(
    defaultSortDirections
    // || (sortable ? columnsOrder.map(({ property }) => ({ property })) : [])
    || (sortable ? model.map(({ property }) => ({ property })) : [])
  );
  const actualSortDirections = isSortControlled ? sortDirectionsProp : sortDirections;
  const handleSortChange = (property, sortDirection) => {
    const newSortDirections = actualSortDirections.map(sortModel => ({
      ...sortModel,
      ...(sortModel.property === property ? { sortDirection } : {}),
    }));
    if (!isSortControlled) {
      setSortDirections(newSortDirections);
    }
    onSortChange(property, sortDirection, newSortDirections);
  };


  /* selection */
  const isSelectionControlled = selectedProp !== undefined;
  const [selected, setSelected] = useState(defaultSelected || []);
  const actualSelected = isSelectionControlled ? selectedProp : selected;
  const onToggleSelectAll = (checked) => {
    const newSelected = checked ? data.map((_, i) => i) : [];
    if (!isSelectionControlled) {
      setSelected(newSelected);
    }
    onSelectAllChange(checked);
  };
  const onToggle = (checked, entityPropertyKeyValue) => {
    const newSelected = checked
      ? [...actualSelected, entityPropertyKeyValue]
      : actualSelected.filter(x => x !== entityPropertyKeyValue);

    if (!isSelectionControlled) {
      setSelected(newSelected);
    }

    onSelectionChange(checked, entityPropertyKeyValue, newSelected);
  };

  return (
    <DataGridSmartOverflowXWrapper
      hasBeenResizedOnce={hasBeenResizedOnce}
      isResizing={isResizing}
      useSmartOverflowX={useSmartOverflowX}
      setDisplay={setDisplay}
      display={display}
      columnsSizes={columns.map(({ width }) => width)}
    >
      <Table
        borderCollapse={borderCollapse}
        isResizing={isResizing}
      >
        <thead {...(hasCustomHeader ? { position: 'relative' } : {})}>
          <Tr>
            {
              selectable
                ? <Th
                  ThInnerWrapper={({ children }) => <Flex>{children}</Flex>}
                  resizable={false}
                  reorderable={false}
                  style={{ width: cellHeight, maxWidth: cellHeight }}
                >
                  <Flex style={{ width: '100%', height: '100%' }}>
                    <Checkbox
                      id={'DataGridMultiSelectCheckBox'}
                      name={'DataGridMultiSelectCheckBox'}
                      onChange={(evt, checked) => onToggleSelectAll(checked)}
                      checked={actualSelected.length === data.length}
                    />
                  </Flex>
                </Th>
                : null
            }
            {
              // (columnsOrder).map((m, i, { length }) => {
              (columns.filter(c => c.show)).map((m, i, { length }) => {
                const resizeProps = resizable /* && (i < (length - 1)) */
                  ? {
                    onResizeStart,
                    onResizeStop: (/* e */) => onOnDocumentMouseUp(/* e, i */),
                    resizable: true,
                    columnWidth: m.width,
                  }
                  : {};

                const sortModel = (actualSortDirections || [])
                  .find(({ property }) => property === m.property);

                const sortProps = (sortable && sortModel)
                  ? {
                    onSortChange: () => handleSortChange(
                      m.property,
                      toggleSORTS((sortModel || {}).sortDirection)
                    ),
                    sortable: true,
                    sortDirection: (sortModel || {}).sortDirection,
                  }
                  : {}
                ;


                // const reorderingProps = {
                //   reorderable: reorderable,
                //   isReordering: isReordering,
                //   isReorderingHovered: isReorderingHovered,
                //   onDragTableHeaderStart: onDragTableHeaderStart,
                //   onDragTableHeaderMove: onDragTableHeaderMove,
                //   onDropTableHeader: onDropTableHeader,
                // }

                return (
                  <Th
                    // hasBeenResizedOnce={hasBeenResizedOnce}
                    display={display}
                    property={m.property}
                    setInitialSize={(width) => {
                      // setColumnsSizes((columnsSizes) => { // eslint-disable-line no-shadow
                      // columnsSizes.forEach((cs, j) => {
                      // if (i === j) {
                      // eslint-disable-next-line no-nested-ternary
                      const res = display === 'block'
                        ? width > baseCellWidth ? baseCellWidth : width
                        : width;
                      // setCurrColumnWidth({ property: m.property, width: res });
                      setColumnWidth({ property: m.property, width: res });
                      // return res;
                      // }
                      // return cs;
                      // });

                      // return newColsSizes;
                      // });
                    }}
                    model={columns}
                    showColumn={showColumn}
                    hideColumn={hideColumn}
                    // setColumnsOrder={setColumnsOrder}
                    // setColumnsSizes={setColumnsSizes}
                    availProps={availProps}
                    data={data}
                    isResizing={isResizing}
                    // resizingColumnIndexes={resizingColumnIndexes}
                    isBeingResized={!!(m.property === isResizingProp)}
                    isBeingResizedBySibling={!!(m.property === isResizingNextProp)}
                    menuDescriptor={m.menuDescriptor}
                    menu={m.menu}
                    index={i}
                    key={i}
                    isLast={i === length - 1}
                    {...resizeProps}
                    {...sortProps}
                    // {...reorderingProps}
                    ThInnerWrapper={ThInnerWrapper}
                    dragId={m.property}
                  >
                    {/* {m.displayName} */}
                    <TextEllipsis title={m.displayName}>{m.displayName}</TextEllipsis>
                  </Th>
                );
              })
            }
          </Tr>
          {
            hasCustomHeader
              ? tableHeaderOverlayRender({
                data,
                // model: columnsOrder,
                model,
                selected: actualSelected,
                // columnsSizes,
                sortDirections: actualSortDirections,
              })
              : null
          }

        </thead>

        <tbody>
          {
            data.map((entity, i) => {
              const isSelected = actualSelected.indexOf(entity[propertyKey]) > -1;


              return (
                <Tr
                  key={i}
                  selected={isSelected}
                >
                  {
                    selectable
                      ? (
                        <Td>
                          <TdInnerWrapper style={{ justifyContent: 'center', padding: '0 8px' }}>
                            <Checkbox
                              id={i}
                              name={i}
                              onChange={(evt, checked) => onToggle(checked, entity[propertyKey])}
                              checked={isSelected}
                            />
                          </TdInnerWrapper>
                        </Td>
                      )
                      : null
                  }

                  {
                    // columnsOrder.map((m = {}, idx) => {
                    (columns.filter(c => c.show)).map((m = {}, idx, filteredColumns) => {
                      const sizeProps = (
                        hasBeenResizedOnce
                        && m.width !== undefined
                        && columns.filter(c => c.show).length > 1
                      )
                        ? {
                          style: {
                            width: m.width,
                            minWidth: m.width,
                            maxWidth: m.width,
                            // maxWidth: '100%',
                            // },
                          },
                        }
                        : {};

                      // const maxWidth = columnsSizes && columnsSizes[idx] !== undefined
                      //   ? columnsSizes[idx] - 8

                      const mComp = m.Component ? <m.Component {...entity} /> : null;

                      const cellContent = (
                        <TdInnerWrapper
                          {...sizeProps}
                        >
                          <span
                            style={{
                              maxWidth: 'calc(100% - 8px)',
                              width: '100%',
                              minWidth: '1px',
                              boxSizing: 'border-box',
                            }}
                          >
                            <Flex
                              style={{
                                justifyContent: 'flex-start',
                                flexFlow: 'row nowrap',
                                maxWidth: '100%',
                                boxSizing: 'border-box',
                              }}
                            >
                              {
                                m.Component !== undefined
                                  ? mComp
                                  : (
                                    <Flex style={{ minWidth: '1px', flexGrow: 1, flexShrink: 999, justifyContent: 'flex-start' }}>
                                      <TextEllipsis title={entity[m.property]}>
                                        {entity[m.property]}
                                      </TextEllipsis>
                                    </Flex>
                                  )
                              }

                            </Flex>
                          </span>
                        </TdInnerWrapper>
                      );

                      const cellDetail = (m.CellDetail !== undefined)
                        ? <m.CellDetail {...entity} />
                        : null;

                      const finalCellContent = (cellDetail && !isResizing)
                        ? (
                          <CellWithPopOver cellContent={cellContent} cellDetail={cellDetail} />
                        )
                        : cellContent;

                      return (
                        <Td
                          columns={columns}
                          mComp={mComp}
                          Component={m.Component}
                          columnSize={m.width}
                          columnOrder={filteredColumns[idx]}
                          isResizing={isResizing}
                          isBeingResized={!!(m.property === isResizingProp)}
                          isBeingResizedBySibling={!!(m.property === isResizingNextProp)}
                          key={idx}
                        >
                          {finalCellContent}
                        </Td>
                      );
                    })
                  }
                </Tr>
              );
            })
          }
        </tbody>
      </Table>
    </DataGridSmartOverflowXWrapper>
  );
};

/* eslint-disable no-unused-vars */
DataGrid.defaultProps = {
  propertyKey: 'id',

  model: undefined,
  data: [],

  selectable: false,
  selected: undefined,
  defaultSelected: undefined,
  onSelectionChange: (checked: Boolean, entityId: EntityId, selected: Array<EntityId>) => {},
  onSelectAllChange: (selectAllChecked: Boolean) => {},

  reorderable: false,
  sortable: false,
  sortDirections: undefined,
  defaultSortDirections: undefined,
  // eslint-disable-next-line max-len
  onSortChange: (property: string, sortDirection: SortDirection, newSortDirections: Array<SortDirection>) => {},

  resizable: false,
  borderCollapse: 'collapse',
  defaultColumnsSizes: undefined,
  useSmartOverflowX: false,

  ThInnerWrapper: ThInnerWrapperComp,
};
/* eslint-enable no-unused-vars */

DataGrid.displayName = 'DataGridv2';

export default DataGrid;
