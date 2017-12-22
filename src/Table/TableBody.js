import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'rc-tooltip';
// import Checkbox from 'material-ui/Checkbox';
import Checkbox from '../Input/Checkbox';
import { Markassensitive as Lock } from '../Icons';
import TableRowColumn from './TableRowColumn';

const TableBodyStyle = {
  container: {},
};

function ascendingSort(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

const genRangeOfValues = (start, offset) => {
  const values = [];
  const dir = (offset > 0) ? -1 : 1; // This forces offset to approach 0 from either direction.
  while (offset !== 0) {
    values.push(start + offset);
    offset += dir;
  }

  return values;
};

const isValueInRange = (value, range) => {
  if (!range) return false;

  if (
    (range.start <= value && value <= range.end)
    || (range.end <= value && value <= range.start)
  ) {
    return true;
  }

  return false;
};

const splitRange = (range, splitPoint) => {
  const splitValues = [];
  const startOffset = range.start - splitPoint;
  const endOffset = range.end - splitPoint;

  // Process start half
  splitValues.push(...genRangeOfValues(splitPoint, startOffset));

  // Process end half
  splitValues.push(...genRangeOfValues(splitPoint, endOffset));

  return splitValues;
};

class TableBody extends Component {
  static componentName = 'TableBody';


  onRowSelect = (rowProps, event, rowNumber) => {
    // event.stopPropagation();
    if (this.props.selectable && !rowProps.readOnly) {
      // Prevent text selection while selecting rows.
      // I don't think this is working! -df
      // window.getSelection().removeAllRanges();

      this.processRowSelection(event, rowNumber);
    }
  }

  createRowCheckboxColumn(rowProps) {
    if (!this.props.displayRowCheckbox) {
      return null;
    }

    const { condensed, noBorder, onRowSelect, rowNumber } = rowProps;
    const key = `${rowProps.rowNumber}-cb`;
    let content;
    let disabled = !this.props.selectable;
    if (rowProps.readOnly) {
      disabled = true;

      const icon = (<Lock
        style={{ color: 'rgb(158, 158, 158)', fill: 'rgb(158, 158, 158)' }}
        size={condensed ? 14 : 20}
      />);

      if (rowProps.readOnlyText) {
        content = (
          <Tooltip placement="bottom" overlay={rowProps.readOnlyText} >
            {icon}
          </Tooltip>
        );
      } else {
        content = icon;
      }
    } else {
      content = (
        <Checkbox
          // ref="rowSelectCB" // ref have to be fn
          name={key}
          value="selected"
          disabled={disabled}
          checked={rowProps.selected}
          onChange={event => onRowSelect(rowProps, event, rowNumber)}
        />
      );
    }

    const checkBoxCellStyle = {
      cursor: disabled ? 'not-allowed' : 'inherit',
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
        {content}
      </TableRowColumn>
    );
  }

  isRowSelected(rowNumber) {
    if (this.props.allRowsSelected) {
      return true;
    }

    if (this.props.selectedRows.indexOf(rowNumber) > -1) {
      return true;
    }
    return false;
  }

  processRowSelection(event, rowNumber) {
    if (this.props.onRowSelection) this.props.onRowSelection(rowNumber);
  }

  flattenRanges(selectedRows) {
    const rows = [];
    for (const selection of selectedRows) {
      if (typeof selection === 'object') {
        const values = this.genRangeOfValues(selection.end, selection.start - selection.end);
        rows.push(selection.end, ...values);
      } else {
        rows.push(selection);
      }
    }

    return rows.sort();
  }

  createRows() {
    const { selectable, condensed, noBorder, allRowsSelected } = this.props;
    const numChildren = React.Children.count(this.props.children);
    let rowNumber = 0;
    const availableRows = [];

    const rowChildren = React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const handlers = {
          // onRowClick: this.onRowClick.bind(this, child.props),
        };

        const props = Object.assign({}, {
          allRowsSelected,
          condensed,
          noBorder,
          readOnly: child.props.readOnly,
          readOnlyText: child.props.readOnlyText,
          selected: child.props.readOnly ? false : this.isRowSelected(rowNumber),
          rowNumber,
          onRowSelect: this.onRowSelect,
        });

        if (rowNumber === numChildren) {
          props.displayBorder = false;
        }

        const children = [];
        if (selectable) {
          children.push(this.createRowCheckboxColumn(props));
        }

        React.Children.forEach(child.props.children, (aChild) => {
          const augmentedChildren = React.cloneElement(aChild, {
            ...aChild.props,
            onClickHandler: aChild.props.onClick,
            condensed,
            noBorder,
          });
          children.push(augmentedChildren);
        });

        rowNumber += 1;
        availableRows.push(rowNumber);
        return React.cloneElement(child, { ...props, ...handlers }, children);
      }
    });
    return rowChildren;
  }

  render() {
    const { style } = this.props;
    return (
      <tbody style={{ ...TableBodyStyle.container, ...style }}>
        {this.createRows()}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  displayRowCheckbox: PropTypes.bool,
  allRowsSelected: PropTypes.bool,
  selectable: PropTypes.bool,
  multiSelectable: PropTypes.bool,
  onRowSelection: PropTypes.func,
  children: PropTypes.node,
};

TableBody.defaultProps = {
  displayRowCheckbox: true,
};

export default TableBody;
