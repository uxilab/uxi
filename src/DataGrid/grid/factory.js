import React from 'react';
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

export const createDataGridCell = (property, actions) => {
  if (!actions) {
    return (
      <TableRowColumn hasAction={!!actions}>
        {property}
      </TableRowColumn>
    );
  }

  return (
    <TableRowColumn style={{ position: 'relative' }} hasAction={!!actions}>
      <div>
        {property}
        {actions && <div style={{ position: 'absolute', right: '10px', top: 0, bottom: 0 }}><ActiondMenu menuDescriptors={actions} /></div>}
      </div>
    </TableRowColumn>
  );
};

export const createDataGridColumn = (viewModel, actions) => (
  <TableRow hasAction={!!actions} key={viewModel.key} data-key={viewModel.key} value={viewModel.key}>
    {
      viewModel.properties.map(
        (property, index) => (
          createDataGridCell(property, (index === 0) ? actions : null)
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

export const createDataGridHeader = (headers = [], fixedHeight, hideHeader, withCheckbox, checkAllHandler) => (
  <TableHeader>
    <TableRow>
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
