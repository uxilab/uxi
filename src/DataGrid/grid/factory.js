import React from 'react';
import {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
} from '../../Table';
import DataGridSorting from './DataGridSorting';

export const createDataGridCell = property => (
  <TableRowColumn>
    {property}
  </TableRowColumn>
);

export const createDataGridColumn = viewModel => (
  <TableRow key={viewModel.key} data-key={viewModel.key} value={viewModel.key}>
    {
      viewModel.properties.map(
        property => (
          createDataGridCell(property)
        ),
      )
    }
  </TableRow>
);

export const createDataGridBody = (viewModels, isHidden) => {
  const result = [];

  viewModels.forEach((viewModel) => {
    result.push(
      createDataGridColumn(viewModel),
    );
  });

  return (
    <TableBody style={isHidden ? { visibility: 'hidden' } : {}}>
      {result}
    </TableBody>
  );
};

export const createDataGridHeader = (headers = [], fixedHeight) => (
  <TableHeader>
    <TableRow>
      {
        headers.map((header) => {
          const key = `header-${header.name || header.displayName}`;
          if (!header.isSortable) {
            return (
              <TableHeaderColumn key={key}>{header.displayName}</TableHeaderColumn>
            );
          }
          return (
            <DataGridSorting key={key} title={header.displayName} />
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
