import React from 'react';
import Tooltip from 'rc-tooltip';
import { Markassensitive as Lock } from '../Icons';
import Checkbox from '../Input/Checkbox';
import TableRowColumn from './TableRowColumn';

const createCheckbox = (rowProps) => {
  const { condensed, onRowSelect, uniqueId, locked, selected, readOnlyText, rowNumber } = rowProps;
  const key = `${uniqueId}-cb`;

  if (locked) {
    const icon = (
      <Lock
        style={{ color: 'rgb(158, 158, 158)', fill: 'rgb(158, 158, 158)' }}
        size={condensed ? 14 : 20}
      />
    );

    if (readOnlyText) {
      return (
        <Tooltip placement="bottom" overlay={readOnlyText} >
          {icon}
        </Tooltip>
      );
    }

    return icon;
  }

  return (
    <div data-uniqueid={uniqueId}>
      <Checkbox
      // ref="rowSelectCB" // ref have to be fn
        name={key}
        disabled={false}
        defaultChecked={selected}
        onChange={event => onRowSelect(rowProps, event, rowNumber)}
      />
    </div>
  );
};

const TableRowCheckedCell = (props) => {
  const { condensed, locked, rowNumber, noBorder } = props;
  const key = `${rowNumber}-cb`;
  const checkBoxCellStyle = {
    cursor: locked ? 'not-allowed' : 'inherit',
    width: '42px',
    paddingLeft: '8px',
    paddingRight: '8px',
    textAlign: 'center',
  };

  return (
    <TableRowColumn
      key={key}
      columnNumber={0}
      style={checkBoxCellStyle}
      condensed={condensed}
      noBorder={noBorder}
    >
      {createCheckbox(props)}
    </TableRowColumn>
  );
};

export default TableRowCheckedCell;
