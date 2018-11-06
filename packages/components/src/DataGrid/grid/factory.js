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

const ActionMenuWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
`;

export const createDataGridCell = (property, actions, entity) => {
  if (!actions) {
    return (
      <TableRowColumn hasAction={!!actions}>
        {property}
      </TableRowColumn>
    );
  }

  return (
    <TableRowColumn hasAction={!!actions}>
      <div>
        {property}
        {
          actions &&
          (
            <ActionMenuWrapper className="actionMenuInTableRowColumn">
              <ActiondMenu
                value={entity}
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

export const createDataGridColumn = (viewModel, actions) => (<TableRow
  hasAction={!!actions}
  key={viewModel.key}
  data-key={viewModel.key}
  value={viewModel.key}
>
  {
    viewModel.properties.map(
      (property, index) => (
        createDataGridCell(property, (index === 0) ? actions : null, viewModel.original)
      ),
    )
  }
</TableRow>
);

export const createDataGridBody = (viewModels, isHidden, actions) => {
  const result = [];

  viewModels.forEach((viewModel) => {
    result.push(
      createDataGridColumn(viewModel, actions),
    );
  });

  return (
    <TableBody style={isHidden ? { visibility: 'hidden' } : {}}>
      {result}
    </TableBody>
  );
};

export const createDataGridHeader = (
  headers = [],
  fixedHeight,
  hideHeader,
  withCheckbox,
  checkAllHandler
) => (
  <TableHeader>
    <TableRow hideSvg={hideHeader}>
      {withCheckbox && <TableHeaderCheckedAllCell onCheckAll={checkAllHandler} />}
      {
        headers.map((header) => {
          const key = `header-${header.name || header.displayName}`;
          if (!header.isSortable) {
            return (
              <TableHeaderColumn style={hideHeader ? { visibility: 'hidden' } : {}} key={key}>{header.displayName}</TableHeaderColumn>
            );
          }
          return (
            <DataGridSorting style={hideHeader ? { visibility: 'hidden' } : {}} key={key} title={header.displayName} />
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
