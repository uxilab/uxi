import React from 'react';
import TableHeaderColumn from './TableHeaderColumn';

const TableHeaderCheckedPlaceholderCell = ({
  enableSelectAll,
  rowNumber,
}) => (
  <TableHeaderColumn
    key={`hpcb${rowNumber}`}
    style={{
      cursor: (!enableSelectAll) ? 'not-allowed' : 'inherit',
      width: '42px',
      paddingLeft: '8px',
      paddingRight: '8px',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />
);

export default TableHeaderCheckedPlaceholderCell;
