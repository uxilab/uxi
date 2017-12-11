import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Input/Checkbox';
import TableHeaderColumn from './TableHeaderColumn';

// const TableHeaderStyle = {
//   borderBottom: '1px solid rgb(158, 158, 158)',
// };

class TableHeader extends Component {
  static componentName = 'TableHeader';

  static propTypes = {
    /**
     * Controls whether or not header rows should be
     * adjusted for a checkbox column. If the select all
     * checkbox is true, this property will not influence
     * the number of columns. This is mainly useful for
     * "super header" rows so that the checkbox column
     * does not create an offset that needs to be accounted
     * for manually.
     */
    adjustForCheckbox: PropTypes.bool,
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Controls whether or not the select all checkbox is displayed.
     */
    displaySelectAll: PropTypes.bool,
    /**
     * If set to true, the select all button will be interactable.
     * If set to false, the button will not be interactable.
     * To hide the checkbox, set displaySelectAll to false.
     */
    enableSelectAll: PropTypes.bool,
    /**
     * @ignore
     * Callback when select all has been checked.
     */
    onSelectAll: PropTypes.func,
    /**
     * @ignore
     * True when select all has been checked.
     */
    selectAllSelected: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    adjustForCheckbox: true,
    displaySelectAll: true,
    enableSelectAll: true,
    selectAllSelected: false,
  };

  getCheckboxPlaceholder(props) {
    if (!this.props.adjustForCheckbox) return null;

    const disabled = !this.props.enableSelectAll;
    const key = `hpcb${props.rowNumber}`;
    return (
      <TableHeaderColumn
        key={key}
        style={{
          width: 24,
          cursor: disabled ? 'not-allowed' : 'inherit',
        }}
      />
    );
  }

  getSelectAllCheckboxColumn(props) {
    if (!this.props.displaySelectAll) return this.getCheckboxPlaceholder(props);

    const disabled = !this.props.enableSelectAll;
    const checkbox = (
      <Checkbox
        key="selectallcb"
        name="selectallcb"
        value="selected"
        disabled={disabled}
        checked={this.props.selectAllSelected}
        onChange={this.handleCheckAll}
      />
    );

    const key = `hpcb${props.rowNumber}`;
    return (
      <TableHeaderColumn
        key={key}
        style={{
          width: 24,
          cursor: disabled ? 'not-allowed' : 'inherit',
        }}
      >
        {checkbox}
      </TableHeaderColumn>
    );
  }

  createSuperHeaderRows() {
    const numChildren = React.Children.count(this.props.children);
    if (numChildren === 1) return undefined;

    const superHeaders = [];
    for (let index = 0; index < numChildren - 1; index++) {
      const child = this.props.children[index];

      if (!React.isValidElement(child)) continue;

      const props = {
        key: `sh${index}`,
        rowNumber: index,
      };
      superHeaders.push(this.createSuperHeaderRow(child, props));
    }

    if (superHeaders.length) {
      return superHeaders;
    }
    return null;
  }

  createSuperHeaderRow(child, props) {
    const { condensed, noBorder } = this.props;
    const children = [];
    if (this.props.adjustForCheckbox) {
      children.push(this.getCheckboxPlaceholder(props));
    }
    // React.Children.forEach(child.props.children, (child) => {
    //   children.push(child);
    // });

    React.Children.forEach(child.props.children, (aChild) => {
      const augmentedChildren = React.cloneElement(aChild, {
        ...aChild.props,
        condensed,
        noBorder,
      });
      children.push(augmentedChildren);
    });

    return React.cloneElement(child, { ...props, condensed, noBorder }, children);
  }

  createBaseHeaderRow() {
    const { multiSelectable, selectable, condensed, noBorder } = this.props;
    const numChildren = React.Children.count(this.props.children);
    const child = (numChildren === 1) ? this.props.children : this.props.children[numChildren - 1];
    const props = {
      key: `h${numChildren}`,
      rowNumber: numChildren,
    };

    const children = [];
    if (selectable) {
      if (multiSelectable) {
        children.push(this.getSelectAllCheckboxColumn(props));
      } else {
        children.push(<span />);
      }
    }

    // React.Children.forEach(child.props.children, (child) => {
    //   children.push(child);
    // });

    React.Children.forEach(child.props.children, (aChild) => {
      const augmentedChildren = React.cloneElement(aChild, {
        ...aChild.props,
        condensed,
        noBorder,
      });
      children.push(augmentedChildren);
    });

    return React.cloneElement(
      child,
      { ...props, condensed, noBorder },
      children,
    );
  }

  handleCheckAll = (event, checked) => {
    if (this.props.onSelectAll) {
      this.props.onSelectAll(checked);
    }
  };

  render() {
    const {
      className,
      style,
    } = this.props;

    const superHeaderRows = this.createSuperHeaderRows();
    const baseHeaderRow = this.createBaseHeaderRow();

    return (
      <thead className={className} style={style}>
        {superHeaderRows}
        {baseHeaderRow}
      </thead>
    );
  }
}

export default TableHeader;
