import React from 'react';
import Checkbox from '../Input/Checkbox';
import TableHeaderColumn from './TableHeaderColumn';

const TableHeaderCheckedAllCell = ({
  onCheckAll,
  allRowsSelected,
  rowNumber,
  dataKey,
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
        width: '34px',
        margin: '0 auto',
      }}
    />
  );
  // table header is a single element, rowNumber dosen't make any sense here, does it ?

  return (
    <TableHeaderColumn
      key={dataKey || `hpcb${rowNumber}`}
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
