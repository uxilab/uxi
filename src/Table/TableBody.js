import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRowCheckedCell from './TableRowCheckedCell';


class TableBody extends Component {
  static componentName = 'TableBody';

  onRowSelect = (rowProps, event, rowNumber) => {
    if (this.props.selectable && this.props.onRowSelection) {
      this.props.onRowSelection(rowNumber);
    }
  }

  createRows() {
    const {
      selectable,
      condensed,
      noBorder,
      onActivateRow,
      activeRow,
      isRowSelected,
      activable,
      sperateRows,
    } = this.props;

    const numChildren = React.Children.count(this.props.children);
    let rowNumber = 0;

    const rowChildren = React.Children.map(this.props.children, (child) => {
      if (!React.isValidElement(child)) {
        return undefined; // consistent-return
      }

      const isSelected = isRowSelected && isRowSelected(rowNumber);

      const handlers = {
        onClick: (event, rowIndex) => {
          if (onActivateRow) {
            onActivateRow(event, rowIndex);
          }

          if (child.props.onClick) {
            child.props.onClick(event, rowIndex);
          }
        },
      };

      const props = Object.assign({}, {
        condensed,
        noBorder,
        selected: isSelected,
        readOnly: child.props.readOnly,
        readOnlyText: child.props.readOnlyText,
        locked: child.props.locked,
        rowNumber,
        onRowSelect: this.onRowSelect.bind(this),
        isActive: (activeRow === rowNumber),
        displayBorder: rowNumber !== numChildren,
        sperateRows,
        activable,
      });


      const children = [];

      if (selectable) {
        children.push(<TableRowCheckedCell {...props} />);
      }

      React.Children.forEach(child.props.children, (aChild) => {
        if (aChild && React.isValidElement(aChild)) {
          const augmentedChildren = React.cloneElement(aChild, {
            ...aChild.props,
            onClickHandler: aChild.props.onClick,
            condensed,
            noBorder,
            selected: isSelected,
          });
          children.push(augmentedChildren);
        }
      });

      rowNumber += 1;

      return React.cloneElement(child, { ...props, ...handlers }, children);
    });
    return rowChildren;
  }

  render() {
    const { style } = this.props;
    return (
      <tbody style={style}>
        {this.createRows()}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  selectable: PropTypes.bool,
  onRowSelection: PropTypes.func,
  children: PropTypes.node,
};

TableBody.defaultProps = {
  selectable: false,
  onRowSelection: () => { },
  children: null,
};

export default TableBody;
