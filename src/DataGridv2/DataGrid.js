// @flow
import React, { useEffect, Component, useState, useReducer } from 'react';
import debounce from 'lodash/debounce';
import Checkboxoutline from '../Icons/Checkboxoutline';
import { UnstyledButton } from '../Button/UnstyledButton1';
import { Flex } from '../Layout/Flex';
import Checkbox from '../Input/Checkbox';
import CellWithPopOver from './CellWithPopOver';
import TdInnerWrapper from './TdInnerWrapper';
import TextEllipsis from '../Text/TextEllipsis';
import Table from './Table';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';
import DataGridSmartOverflowXWrapper from './DataGridSmartOverflowXWrapper';
import ThInnerWrapperComp from './ThInnerWrapper';
import reducer, { initialState } from './reducer'; // eslint-disable-line import/no-named-as-default
import {
  setSelected as setSelectedAction,
  setExtraColumnWidth as setExtraColumnWidthAction,
  setDisplay as setDisplayAction,
  setColumns as setColumnsAction,
  showColumn as showColumnAction,
  hideColumn as hideColumnAction,
  setColumnWidth as setColumnWidthAction,
  setCurrColumnWidth as setCurrColumnWidthAction,
  setIsReordering as setIsReorderingAction,
  setColumOrder as setColumOrderAction,
  setIsResizing as setIsResizingAction,
  setNextColumnWidth as setNextColumnWidthAction,
  storeContentRectHeight as storeContentRectHeightAction,
} from './actions';

export const minCellWidth = 64;
const cellHeight = 48;

const isString = value => typeof value === 'string';

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
    model = Object.keys(data[0] || {}).map(k => ({ property: k, displayName: k, show: true })),

    selectable,
    multiSelectable,
    onSelectionChange,
    onSelectAllChange,
    onInvertSelection,
    selected: selectedProp,
    defaultSelected,

    sortable,
    sortDirections: sortDirectionsProp,
    defaultSortDirections,
    onSortChange,

    resizable,
    useSmartOverflowX: useSmartOverflowXProp,
    borderCollapse,

    ThInnerWrapper,

    reorderable = true, // true for dev purp only ?

    tableHeaderOverlayRender,
    // eslint-disable-next-line no-nested-ternary
    baseCellWidth: baseCellWidthProp,
    allowInlinePropertySelection = true,
    uniqueSelectionProperty,
    restrictionValue,
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


  const [
    {
      cRectHeight,
      columns: columnsState,
      isResizing,
      pageX,
      isResizingProp,
      isResizingNextProp,
      currColWidth,
      nextColWidth,
      hasBeenResizedOnce,

      isReordering,

      display,

      extraColWidth,

      selected,
    },
    dispatch,
  ] = useReducer(
    reducer,
    {
      ...initialState,
      columns: model,
      baseCellWidth,
      ...(defaultSelected ? { selected: defaultSelected } : {}),
    }
  );
  // const [selected, setSelected] = useState(defaultSelected || []);


  let columns = allowInlinePropertySelection
    ? columnsState
    : model.map(x => ({
      ...x,
      show: true,
      width: (columnsState.find(y => y.property === x.property) || {}).width || 240,
    }))
  ;

  if (extraColWidth) {
    columns = [...columns, {
      property: 'toString', // cheat
      displayName: <TextEllipsis style={{ userSelect: 'none', textOverflow: 'clip' }}>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
      </TextEllipsis>,
      width: extraColWidth,
    }];
  }


  const setSelected = newSelected => dispatch(setSelectedAction(newSelected));

  const setExtraColumnWidth = width => dispatch(setExtraColumnWidthAction(width));

  const setDisplay = property => dispatch(setDisplayAction(property));

  const setColumns = property => dispatch(setColumnsAction(property));
  const storeContentRectHeight = property => dispatch(storeContentRectHeightAction(property));

  const showColumn = property => dispatch(showColumnAction(property));
  const hideColumn = property => dispatch(hideColumnAction(property));

  const setIsReordering = payload => dispatch(setIsReorderingAction(payload));
  const setColumOrder = payload => dispatch(setColumOrderAction(payload));
  const setIsResizing = payload => dispatch(setIsResizingAction(payload));


  const setColumnWidth = ({ property, width }) =>
    dispatch(setColumnWidthAction({ property, width }));

  const setCurrColumnWidth = width => dispatch(setCurrColumnWidthAction(width));
  const setNextColumnWidth = width => dispatch(setNextColumnWidthAction(width));


  const allowInlinePropertySelectionMonitor = model.map(({ property }) => property).join('');
  useEffect(() => {
    if (!allowInlinePropertySelection) {
      setColumns(model.map(x => ({
        ...x,
        show: true,
        width: (columnsState.find(y => y.property === x.property) || {}).width || 240,
      })));
      return () => {};
    }
    return () => {};
  }, [allowInlinePropertySelectionMonitor]);

  useEffect(() => {
    setColumns(model.map(x => ({
      ...x,
      show: true,
      width: (columnsState.find(y => y.property === x.property) || {}).width || 240,
    })));
  }, [model]);


  runWarnings(props);

  const hasCustomHeader = tableHeaderOverlayRender !== undefined;


  const onOnDocumentMouseUp = (/* e */) => {
    setIsResizing({
      isResizing: false,
      pageX: undefined,
      currColWidth: undefined,
      nextColWidth: undefined,
      property: undefined,
    });
    document.removeEventListener('mouseup', onOnDocumentMouseUp);
    document.body.style.cursor = 'inherit';
  };

  const onResizeStart = (e, property) => {
    // eslint-disable-next-line no-shadow
    const currCol = e.target.parentElement;
    // eslint-disable-next-line no-shadow
    const { width: currColWidth } = currCol.getBoundingClientRect();

    const nextCol = currCol.nextElementSibling;
    // eslint-disable-next-line no-shadow
    const { width: nextColWidth } = (nextCol ? nextCol.getBoundingClientRect() : {});
    const payload = {
      isResizing: true,
      property,
      pageX: e.pageX,
      currColWidth,
      nextColWidth: nextCol ? nextColWidth : undefined,
    };

    setIsResizing(payload);

    document.addEventListener('mouseup', onOnDocumentMouseUp);

    document.body.style.cursor = 'col-resize';
  };

  const onOnDocumentMouseMoveHandler = (e) => {
    if (isResizing) {
      const diffX = e.pageX - pageX;
      if (display === 'table' && isResizingNextProp) {
        const v = nextColWidth - diffX;
        setNextColumnWidth(v < minCellWidth ? minCellWidth : v);
      }
      const newVal = currColWidth + diffX;
      setCurrColumnWidth(newVal < minCellWidth ? minCellWidth : newVal);
    }
  };

  useEffect(
    () => {
      if (isResizing) {
        const debounceListener = debounce(
          onOnDocumentMouseMoveHandler, 16, { maxWait: 16, leading: true, trailing: true }
        );

        document.addEventListener('mousemove', debounceListener);

        return () => {
          debounceListener.flush();
          document.removeEventListener('mousemove', debounceListener);
        };
      }
      return () => {};
    },
    [isResizing]
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

  const onDragTableHeaderStart = (index/* , ref */) => {
    setIsReordering(index);
  };

  const onDropTableHeader = () => {
    setIsReordering(null);
  };


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
  // const [selected, setSelected] = useState(defaultSelected || []);
  const actualSelected = isSelectionControlled ? selectedProp : selected;
  const onToggleSelectAll = (checked) => {
    const newSelected = checked ? data.map((_, i) => i) : [];
    if (!isSelectionControlled) {
      setSelected(newSelected);
    }
    onSelectAllChange(checked);
  };
  const onInvertSelectionHandler = () => {
    const newSelected = data
      .filter(x => !actualSelected.includes(x[propertyKey]))
      .map(x => x[propertyKey]);

    if (!isSelectionControlled) {
      setSelected(newSelected);
    }
    // onSelectAllChange(checked);
    onInvertSelection(newSelected);
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
      selectable={selectable}
      extraColWidth={extraColWidth}
      setExtraColumnWidth={setExtraColumnWidth}
      hasBeenResizedOnce={hasBeenResizedOnce}
      isResizing={isResizing}
      useSmartOverflowX={useSmartOverflowX}
      setDisplay={setDisplay}
      display={display}
      columns={columns}
      columnsSizes={columns.map(({ width }) => width)}
      storeContentRectHeight={storeContentRectHeight}
      cRectHeight={cRectHeight}
    >
      <Table
        borderCollapse={borderCollapse}
        isResizing={isResizing}
        isReordering={isReordering}
      >
        <thead {...(hasCustomHeader ? { position: 'relative' } : {})}>
          <Tr>
            {
              multiSelectable || selectable
                ? <Th
                  isCheckboxCell
                  selected={actualSelected}
                  key="select-checkbox-cell"
                  ThInnerWrapper={({ children }) => <Flex>{children}</Flex>}
                  resizable={false}
                  reorderable={false}
                  style={{ width: cellHeight, maxWidth: cellHeight }}
                >
                  <Flex style={{ width: '100%', height: '100%' }}>
                    {
                      /* eslint-disable no-nested-ternary */
                      multiSelectable
                        ? actualSelected.length === data.length
                          ? (
                            <Checkbox
                              id={'DataGridMultiSelectCheckBox'}
                              name={'DataGridMultiSelectCheckBox'}
                              onChange={(evt, checked) => onToggleSelectAll(checked)}
                              checked={true}
                            />
                          )
                          : actualSelected.length === 0
                            ? (
                              <Checkbox
                                id={'DataGridMultiSelectCheckBox'}
                                name={'DataGridMultiSelectCheckBox'}
                                onChange={(evt, checked) => onToggleSelectAll(checked)}
                                checked={false}
                              />
                            )
                            : (
                              <UnstyledButton onClick={() => { onInvertSelectionHandler(); }}>
                                <Flex style={{ width: '100%', height: '100%', position: 'relative' }}>
                                  <Checkboxoutline />
                                  <Flex style={{ fontSize: '32px', position: 'absolute', top: '-2.5px', left: 0, width: '100%', height: '100%' }}>
                                    -
                                  </Flex>
                                </Flex>
                              </UnstyledButton>
                            )
                        : null
                        /* eslint-enable no-nested-ternary */
                    }
                  </Flex>
                </Th>
                : null
            }
            {
              // (columnsOrder).map((m, i, { length }) => {
              (columns.filter(c => !c.hide)).map((m, i, { length }) => {
                const resizeProps = resizable /* && (i < (length - 1)) */
                  ? {
                    onResizeStart,
                    onResizeStop: (/* e */) => onOnDocumentMouseUp(/* e, i */),
                    resizable: true,
                    columnWidth: m.width,
                  }
                  : {
                    columnWidth: m.width,
                  };

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


                const reorderingProps = {
                  reorderable,
                  setColumOrder,
                  isReordering,
                  onDragTableHeaderStart,
                  onDropTableHeader,
                };

                const thTitle = isString(m.displayName) ? m.displayName : m.property;

                return (
                  <Th
                    cRectHeight={cRectHeight}
                    allowInlinePropertySelection={allowInlinePropertySelection}
                    display={display}
                    property={m.property}
                    setInitialSize={(width) => {
                      if (resizable) {
                        const res = width < baseCellWidth ? baseCellWidth : width;
                        setColumnWidth({ property: m.property, width: res });
                      }
                    }}
                    model={columns}
                    showColumn={showColumn}
                    hideColumn={hideColumn}
                    data={data}
                    isResizing={isResizing}
                    isBeingResized={!!(m.property === isResizingProp)}
                    isBeingResizedBySibling={!!(m.property === isResizingNextProp)}
                    isReordering={isReordering}
                    menuDescriptor={m.menuDescriptor}
                    menu={m.menu}
                    index={i}
                    key={i}
                    isLast={i === length - 1}
                    {...resizeProps}
                    {...sortProps}
                    {...reorderingProps}
                    ThInnerWrapper={ThInnerWrapper}
                    dragId={m.property}
                  >
                    {
                      m.property === 'toString'
                        ? m.displayName
                        : <TextEllipsis title={thTitle}>{m.displayName}</TextEllipsis>
                    }
                  </Th>
                );
              })
            }
          </Tr>
          {
            hasCustomHeader
              ? tableHeaderOverlayRender({
                data,
                model,
                selected: actualSelected,
                sortDirections: actualSortDirections,
              })
              : null
          }

        </thead>

        <tbody>
          {
            data.map((entity, i) => {
              const isSelected = actualSelected.indexOf(entity[propertyKey]) > -1;
              const propertyKeyIndex = (
                entity &&
                entity[propertyKey]
              ) ? entity[propertyKey] : i;

              let disabled = false;

              if (uniqueSelectionProperty && restrictionValue) {
                const valueForRestrictionProperty = (entity || {})[uniqueSelectionProperty];
                disabled = (
                  multiSelectable || selectable
                ) && valueForRestrictionProperty !== restrictionValue;
              }

              return (
                <Tr
                  key={propertyKeyIndex}
                  selected={isSelected}
                >
                  {
                    (multiSelectable || selectable)
                      ? (
                        <Td
                          key={`checkbox-select-cell${isSelected ? '-selected' : ''}`}
                          selected={actualSelected}
                        >
                          <TdInnerWrapper style={{ justifyContent: 'center', padding: '0 8px' }}>
                            <Checkbox
                              id={i}
                              name={i}
                              disabled={disabled}
                              onChange={(evt, checked) => onToggle(checked, entity[propertyKey])}
                              checked={isSelected}
                            />
                          </TdInnerWrapper>
                        </Td>
                      )
                      : null
                  }

                  {
                    (columns.filter(c => !c.hide)).map((m = {}, idx, filteredColumns) => {
                      const sizeProps = (
                        hasBeenResizedOnce
                        && resizable
                        && m.width !== undefined
                        && columns.filter(c => !c.hide).length > 1
                      )
                        ? {
                          style: {
                            width: m.width,
                            minWidth: m.width,
                            maxWidth: m.width,
                          },
                        }
                        : {};

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
                          allowInlinePropertySelection={allowInlinePropertySelection}
                          key={idx}
                          columns={columns}
                          mComp={mComp}
                          Component={m.Component}
                          columnSize={m.width}
                          columnOrder={filteredColumns[idx]}
                          filteredColumns={filteredColumns}
                          isResizing={isResizing}
                          isBeingResized={!!(m.property === isResizingProp)}
                          isBeingResizedBySibling={!!(m.property === isResizingNextProp)}
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
