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
        width: '42px',
        maxWidth: '42px',
        paddingLeft: '8px',
        paddingRight: '8px',
        // textAlign: 'left',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      {checkbox}
    </TableHeaderColumn>
  );
};

export default TableHeaderCheckedAllCell;
