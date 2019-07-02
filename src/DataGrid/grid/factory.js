import React from 'react';
import styled from 'styled-components';
import {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
} from '../../Table';
import TableHeaderCheckedAllCell from '../../Table/TableHeaderCheckedAllCell';
import DataGridSorting from './DataGridSorting';
import ActiondMenu from '../../ActionMenu';
import { TextEllipsis } from '../../Text';

const ActionMenuWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
`;

export const createDataGridCell = (property, actions, viewModel, keyFromPropertyOrIndex) => {
  if (!actions) {
    return (
      <TableRowColumn
        hasAction={!!actions}
        key={keyFromPropertyOrIndex}
        data-key={keyFromPropertyOrIndex}
      >
        {property}
      </TableRowColumn>
    );
  }

  return (
    <TableRowColumn
      hasAction={!!actions}
      key={keyFromPropertyOrIndex}
      data-key={keyFromPropertyOrIndex}
    >
      <div>
        {property}
        {
          actions &&
          (
            <ActionMenuWrapper className="actionMenuInTableRowColumn">
              <ActiondMenu
                value={viewModel.original}
                menuDescriptors={actions}
                mainMenuButtonItemStyle={{ height: '50px' }}
              />
            </ActionMenuWrapper>
          )
        }
      </div>
    </TableRowColumn>
  );
};

// that's arow not acolumn, rioght ?
export const createDataGridColumn = (viewModel, actions, index) => {
  const rowKey = viewModel.id || viewModel.key || index;
  return (
    <TableRow
      hasAction={!!actions}
      key={rowKey}
      data-key={viewModel.id || viewModel.key || index}
      value={viewModel.key}
    >
      {
        viewModel.properties.map(
          (property, idx) => {
            const keyFromPropertyOrIndex = (
              viewModel
              && viewModel.propertiesDefinitions
              && viewModel.propertiesDefinitions[idx]
              && viewModel.propertiesDefinitions[idx].name
            ) || idx;

            const cellKey = `${rowKey}-${keyFromPropertyOrIndex}`;

            return (
              createDataGridCell(
                property,
                (idx === 0) ? actions : null,
                viewModel,
                cellKey,
              )
            );
          }
        )
      }
    </TableRow>
  );
};

export const createDataGridBody = (viewModels, isHidden, actions) => {
  const result = [];

  viewModels.forEach((viewModel, index) => {
    result.push(
      createDataGridColumn(viewModel, actions, index),
    );
  });

  return (
    <TableBody style={isHidden ? { visibility: 'hidden' } : {}} viewModels={viewModels} >
      {result}
    </TableBody>
  );
};

export const createDataGridHeader = (
  headers = [],
  fixedHeight,
  hideHeader,
  stickyHeader,
  withCheckbox,
  checkAllHandler,
  allRowsSelected
) => (
  <TableHeader stickyHeader={stickyHeader}>
    <TableRow hideSvg={hideHeader}>
      {
        withCheckbox &&
        <TableHeaderCheckedAllCell
          dataKey="TableHeaderCheckedAllCell"
          allRowsSelected={allRowsSelected}
          onCheckAll={checkAllHandler}
        />
      }
      {
        headers.map((header, i) => {
          const key = `header-${header.name || header.displayName || i}`;
          if (header.menuItems) {
            return (<DataGridSorting
              menuItems={header.menuItems}
              dataKey={key}
              style={hideHeader
                ? { visibility: 'hidden' }
                : {}
              }
              title={header.displayName}
            />);
          }

          if (header.extraMenuItems) {
            return (
              <DataGridSorting
                extraMenuItems={header.extraMenuItems}
                dataKey={key}
                style={hideHeader
                  ? { visibility: 'hidden' }
                  : {}
                }
                title={header.displayName}
              />

            );
          }

          if (header.isSortable) {
            return (<DataGridSorting
              dataKey={key}
              style={hideHeader
                ? { visibility: 'hidden' }
                : {}
              }
              title={header.displayName}
            />);
          }


          // default (not sortable) ——————————
          return (
            <TableHeaderColumn
              key={key}
              style={hideHeader
                ? { visibility: 'hidden' }
                : {}
              }
            >
              <TextEllipsis>{header.displayName}</TextEllipsis>
            </TableHeaderColumn>
          );
        })
      }
    </TableRow>
  </TableHeader>
);

export default {
  createDataGridHeader,
  createDataGridBody,
  createDataGridColumn,
  createDataGridCell,
};
