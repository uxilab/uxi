import React from 'react';
import Tooltip from 'rc-tooltip';
import { Markassensitive as Lock } from '../Icons';
import Checkbox from '../Input/Checkbox';
import TableRowColumn from './TableRowColumn';

const createCheckbox = (rowProps) => {
  const { condensed, onRowSelect, checkboxId, uniqueId, locked, selected, readOnlyText, rowNumber, checked } = rowProps;
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

  console.log('checked in TableRowCheckedCell', checked);

  return (
    <div data-uniqueid={uniqueId}>
      <Checkbox
      // ref="rowSelectCB" // ref have to be fn
        id={checkboxId}
        name={checkboxId}
        // disabled={false}
        defaultChecked={undefined}
        checked={checked}
        onChange={event => onRowSelect(rowProps, event, rowNumber)}
      />
    </div>
  );
};

const TableRowCheckedCell = (props) => {
  const { condensed, locked, rowNumber, noBorder, childKey } = props;
  const key = childKey ? `${childKey}-selectCB` : rowNumber;
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
      data-key={`${childKey}-selectCB`}
      columnNumber={0}
      style={checkBoxCellStyle}
      condensed={condensed}
      noBorder={noBorder}
    >
      {createCheckbox({ ...props, checkboxId: `${childKey}-selectCB` })}
    </TableRowColumn>
  );
};

export default TableRowCheckedCell;
