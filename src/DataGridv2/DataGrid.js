// @flow
import React, { Component, useState } from 'react';
import Table from './Table';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';
import useOnDocumentMouseUp from '../hooks/useOnDocumentMouseUp';
import useOnDocumentMouseMove from '../hooks/useOnDocumentMouseMove';
import DataGridSmartOverflowXWrapper from './DataGridSmartOverflowXWrapper';
import ThInnerWrapperComp from './ThInnerWrapper';
import { Flex } from '../Layout/Flex';
// import ButtonMenu from '../Menu/ButtonMenu/ButtonMenu';
import Checkbox from '../Input/Checkbox';
import CellWithPopOver from './CellWithPopOver';
import TdInnerWrapper from './TdInnerWrapper';
// import DropDown from '../DropDownv2';
// import PopOver from '../internal/PopOver';


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

type SortDirection = 'ASC' | 'DESC'

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

  defaultColumnsSizes: ?Array<string>,
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

    defaultColumnsSizes,
    resizable,
    useSmartOverflowX,
    borderCollapse,

    ThInnerWrapper,

    tableHeaderOverlayRender,
  } = props;

  const hasCustomHeader = tableHeaderOverlayRender !== undefined;

  /* Sort */
  const isSortControlled = selectedProp !== undefined;
  const [sortDirections, setSortDirections] = useState(
    defaultSortDirections
    || (sortable ? model.map(({ property }) => ({ property })) : [])
  );
  const actualSortDirections = isSortControlled ? sortDirectionsProp : sortDirections;
  const handleSortChange = (property, sortDirection) => {
    const newSortDirections = actualSortDirections.map(sortModel => ({
      ...sortModel,
      sortDirection,
    }));
    if (!isSortControlled) {
      setSortDirections(newSortDirections);
    }
    onSortChange(property, sortDirection, newSortDirections);
  };

  /* Resize */
  const columnsCount = model.length > 0 ? model.length + (selectable ? 1 : 0) : null;
  const [columnsSizes, setColumnsSizes] = useState(
    defaultColumnsSizes
      || [...new Array(columnsCount)].map(() => 'none')
  ); // do we need controlled behavior ?
  const [isResizing, setIsResizing] = useState();
  const [resizingColumnIndexes, setResizingColumnIndexes] = useState();
  const [pageX, setPageX] = useState();
  const [curColWidth, setCurColWidth] = useState();
  const [nextColWidth, setNextColWidth] = useState();

  const onResizeStart = (e, columnIdx) => {
    // eslint-disable-next-line no-nested-ternary
    const siblingColumnIdx = columnIdx > -1
      ? (columnIdx + 1) <= columnsCount ? columnIdx + 1 : null
      : null;

    setIsResizing(true);
    setResizingColumnIndexes([columnIdx, siblingColumnIdx]);
    const nextCol = e.target.parentElement.nextElementSibling;
    setPageX(e.pageX);
    setCurColWidth(e.target.parentElement.offsetWidth);
    if (nextCol) { setNextColWidth(nextCol.offsetWidth); }

    document.body.style.cursor = 'grabbing';
  };

  useOnDocumentMouseMove(null, (e) => {
    if (isResizing) {
      const diffX = e.pageX - pageX;
      const newColumnsSizes = columnsSizes.map((c, i) => {
        const [curColIdx, nxtColIdx] = resizingColumnIndexes;

        if (nxtColIdx !== null && i === nxtColIdx) {
          return `${nextColWidth - diffX}px`;
        }
        if (curColIdx === i) {
          return `${curColWidth + diffX}px`;
        }
        return c;
      });

      setColumnsSizes(newColumnsSizes);
    }
  });

  useOnDocumentMouseUp(null, (/* e */) => {
    setIsResizing(false);
    setPageX(undefined);
    setCurColWidth(undefined);
    setNextColWidth(undefined);
    document.body.style.cursor = 'inherit';
  });


  /* selection */
  const isSelectionControlled = selectedProp !== undefined;
  const [selected, setSelected] = useState(defaultSelected || []);
  const actualSelected = isSelectionControlled ? selectedProp : selected;
  const onToggleSelectAll = ({ target = {} }) => {
    const newSelected = target.checked ? data.map((_, i) => i) : [];
    if (!isSelectionControlled) {
      setSelected(newSelected);
    }
    onSelectAllChange(!!(target.checked));
  };
  const onToggle = ({ target = {} }, entityPropertyKeyValue) => {
    const newSelected = target.checked
      ? [...actualSelected, entityPropertyKeyValue]
      : actualSelected.filter(x => x !== entityPropertyKeyValue);

    if (!isSelectionControlled) {
      setSelected(newSelected);
    }

    onSelectionChange(!!(target.checked), entityPropertyKeyValue, newSelected);
  };

  return (
    <DataGridSmartOverflowXWrapper useSmartOverflowX={useSmartOverflowX}>
      <Table
        borderCollapse={borderCollapse}
        isResizing={isResizing}
      >
        <thead {...(hasCustomHeader ? { position: 'relative' } : {})}>
          <Tr>
            {
              selectable
                ? <Th
                  ThInnerWrapper={ThInnerWrapper}
                  resizable={false}
                  style={{ width: '32px' }}
                >
                  <Flex style={{ marginLeft: -'8px', width: '100%', height: '100%' }}>
                    {/* <Checkbox type="checkbox" onChange={onToggleSelectAll} /> */}
                    <input type="checkbox" onChange={onToggleSelectAll} />
                  </Flex>
                </Th>
                : null
            }
            {
              model.map((m, i, { length }) => {
                const resizeProps = resizable && (i < (length - 1))
                  ? {
                    onResizeStart: e => onResizeStart(e, i),
                    resizable: true,
                    style: { width: columnsSizes[i] },
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

                return (
                  <Th
                    isResizing={isResizing}
                    menuDescriptor={m.menuDescriptor}
                    index={i}
                    key={i}
                    ThInnerWrapper={ThInnerWrapper}
                    {...resizeProps}
                    {...sortProps}
                  >
                    {m.displayName}
                    <span>{m.menu}</span>
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
                columnsSizes,
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

                            {/* <input
                            type="checkbox"
                            onChange={e => onToggle(e, entity[propertyKey])}
                            checked={actualSelected.indexOf(entity[propertyKey]) > -1}
                          /> */}
                            <Checkbox
                              onChange={e => onToggle(e, entity[propertyKey])}
                              checked={isSelected}
                            />
                          </TdInnerWrapper>
                        </Td>
                      )
                      : null
                  }

                  {
                    model.map((m = {}, idx) => {
                      const cellContent = (m.Component !== undefined)
                        ? <m.Component {...entity} />
                        : <TdInnerWrapper>{entity[m.property]}</TdInnerWrapper>;

                      const cellDetail = (m.CellDetail !== undefined)
                        ? <m.CellDetail {...entity} />
                        : null;

                      const finalCellContent = cellDetail
                        // ? (
                        //   <ButtonMenu
                        //     isFullWidth
                        //     button={<div>{cellContent}</div>}
                        //   >
                        //     {cellDetail}
                        //   </ButtonMenu>
                        // )
                        ? (
                          <CellWithPopOver cellContent={cellContent} cellDetail={cellDetail} />
                          // <DropDown
                          //   box={cellDetail}
                          //   trigger={<div>{cellContent}</div>}
                          // />
                        )
                        : cellContent;

                      return (
                        <Td key={idx} >
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

export default DataGrid;
