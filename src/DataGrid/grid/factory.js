import React from 'react';
import {
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn,
} from '../../Table';

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

export const createDataGridBody = (viewModels) => {
  const result = [];

  viewModels.forEach((viewModel) => {
    result.push(
      createDataGridColumn(viewModel),
    );
  });

  return (
    <TableBody>
      {result}
    </TableBody>
  );
};

export const createDataGridHeader = (headers = [], fixedHeight) => {
  const style = fixedHeight ? {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
  } : {};

  return (
    <TableHeader style={style}>
      <TableRow>
        {headers.map(header => (
          <TableHeaderColumn key={`header-${header}`}>
            {header}
          </TableHeaderColumn>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default {
  createDataGridHeader,
  createDataGridBody,
  createDataGridColumn,
  createDataGridCell,
};
