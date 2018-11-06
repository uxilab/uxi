import React from 'react';
import Checkbox from '../Input/Checkbox';
import TableHeaderColumn from './TableHeaderColumn';

const TableHeaderCheckedAllCell = ({
  onCheckAll,
  allRowsSelected,
  rowNumber,
}) => {
  const checkbox = (
    <Checkbox
      key="selectallcb"
      name="selectallcb"
      value="selected"
      checked={allRowsSelected}
      onChange={onCheckAll}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );

  return (
    <TableHeaderColumn
      key={`hpcb${rowNumber}`}
      noPadding
      style={{
        cursor: !allRowsSelected ? 'not-allowed' : 'inherit',
        width: '42px',
        paddingLeft: '8px',
        paddingRight: '8px',
        textAlign: 'center',
      }}
    >
      {checkbox}
    </TableHeaderColumn>
  );
};

export default TableHeaderCheckedAllCell;
