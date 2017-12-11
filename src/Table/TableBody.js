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

  state = {
    selectedRows: [],
  };

  onRowClick = (rowProps, event, rowNumber) => {
    event.stopPropagation();

    if (this.props.selectable && !rowProps.readOnly) {
      // Prevent text selection while selecting rows.
      window.getSelection().removeAllRanges();
      this.processRowSelection(event, rowNumber);
    }
  };

  createRowCheckboxColumn(rowProps) {
    if (!this.props.displayRowCheckbox) {
      return null;
    }

    const { condensed } = rowProps;
    const key = `${rowProps.rowNumber}-cb`;
    let content;
    let disabled = !this.props.selectable;
    if (rowProps.readOnly) {
      disabled = true;

      const icon = (<Lock
        style={{ color: 'rgb(158, 158, 158)', fill: 'rgb(158, 158, 158)' }}
        size={condensed ? 14 : 24}
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
        />
      );
    }

    const checkBoxStyle = {
      width: 24,
      cursor: disabled ? 'not-allowed' : 'inherit',
    };

    return (
      <TableRowColumn
        key={key}
        columnNumber={0}
        style={checkBoxStyle}
        condensed={condensed}
      >
        {content}
      </TableRowColumn>
    );
  }

  isRowSelected(rowNumber) {
    if (this.props.allRowsSelected) {
      return true;
    }

    for (let i = 0; i < this.state.selectedRows.length; i++) {
      const selection = this.state.selectedRows[i];

      if (typeof selection === 'object') {
        if (isValueInRange(rowNumber, selection)) return true;
      } else if (selection === rowNumber) return true;
    }

    return false;
  }

  processRowSelection(event, rowNumber) {
    let selectedRows = this.state.selectedRows;

    if (event.shiftKey && this.props.multiSelectable && selectedRows.length) {
      const lastIndex = selectedRows.length - 1;
      const lastSelection = selectedRows[lastIndex];

      if (typeof lastSelection === 'object') {
        lastSelection.end = rowNumber;
      } else {
        selectedRows.splice(lastIndex, 1, { start: lastSelection, end: rowNumber });
      }
    } else if (
      ((event.ctrlKey && !event.metaKey) || (event.metaKey && !event.ctrlKey))
      && this.props.multiSelectable
    ) {
      const idx = selectedRows.indexOf(rowNumber);
      if (idx < 0) {
        let foundRange = false;
        for (let i = 0; i < selectedRows.length; i++) {
          const range = selectedRows[i];
          if (typeof range !== 'object') continue;

          if (this.isValueInRange(rowNumber, range)) {
            foundRange = true;
            const values = splitRange(range, rowNumber);
            selectedRows.splice(i, 1, ...values);
          }
        }

        if (!foundRange) selectedRows.push(rowNumber);
      } else {
        selectedRows.splice(idx, 1);
      }
    } else if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
      selectedRows = [];
    } else {
      selectedRows = [rowNumber];
    }

    this.setState({ selectedRows });
    if (this.props.onRowSelection) this.props.onRowSelection(this.flattenRanges(selectedRows));
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
    const { selectable, condensed } = this.props;
    const numChildren = React.Children.count(this.props.children);
    let rowNumber = 0;

    return React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const handlers = {
          onRowClick: this.onRowClick.bind(this, child.props),
        };

        const props = Object.assign({}, {
          condensed,
          readOnly: child.props.readOnly,
          readOnlyText: child.props.readOnlyText,
          selected: child.props.readOnly ? false : this.isRowSelected(rowNumber),
          rowNumber: rowNumber++,
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
            condensed,
          });
          children.push(augmentedChildren);
        });

        return React.cloneElement(child, { ...props, ...handlers }, children);
      }
    });
  }

  render() {
    return (
      <tbody style={TableBodyStyle.container}>
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
