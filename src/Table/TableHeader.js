import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeaderCheckedAllCell from './TableHeaderCheckedAllCell';
import TableHeaderCheckedPlaceholderCell from './TableHeaderCheckedPlaceholderCell';

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


  createSuperHeaderRows() {
    const numChildren = React.Children.count(this.props.children);
    if (numChildren === 1) return undefined;

    const superHeaders = [];
    for (let index = 0; index < numChildren - 1; index++) {
      const child = this.props.children[index];

      if (!React.isValidElement(child)) continue;

      const props = {
        ...child.props,
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
    const {
      condensed,
      noBorder,
      adjustForCheckbox,
      enableSelectAll,
      rowNumber,
    } = this.props;

    const children = [];
    if (adjustForCheckbox) {
      children.push(
        <TableHeaderCheckedPlaceholderCell
          enableSelectAll={enableSelectAll}
          rowNumber={rowNumber}
        />,
      );
    }

    React.Children.forEach(child.props.children, (aChild) => {
      if (aChild) {
        const augmentedChildren = React.cloneElement(aChild, {
          ...aChild.props,
          condensed,
          noBorder,
        });
        children.push(augmentedChildren);
      }
    });

    return React.cloneElement(
      child,
      { ...props, condensed, noBorder, isTableHeader: true },
      children,
    );
  }

  createBaseHeaderRow() {
    const {
      multiSelectable,
      selectable,
      condensed,
      noBorder,
      allRowsSelected,
      enableSelectAll,
      rowNumber,
      onSelectAll,
    } = this.props;

    const numChildren = React.Children.count(this.props.children);
    const child = (numChildren === 1) ? this.props.children : this.props.children[numChildren - 1];

    const children = [];

    if (selectable) {
      if (multiSelectable) {
        children.push(
          <TableHeaderCheckedAllCell
            onCheckAll={(event, checked) => {
              if (onSelectAll) {
                onSelectAll(checked);
              }
            }}
            allRowsSelected={allRowsSelected}
            rowNumber={numChildren}
          />,
        );
      } else {
        children.push(
          <TableHeaderCheckedPlaceholderCell
            enableSelectAll={enableSelectAll}
            rowNumber={numChildren}
          />,
        );
      }
    }

    React.Children.forEach(child.props.children, (aChild) => {
      if (aChild) {
        const augmentedChildren = React.cloneElement(aChild, {
          ...aChild.props,
          onClick: aChild.props.onClick,
          onClickHandler: aChild.props.onClick,
          condensed,
          noBorder,
        });
        children.push(augmentedChildren);
      }
    });

    return React.cloneElement(
      child,
      {
        key: `h${numChildren}`,
        rowNumber: numChildren,
        condensed,
        noBorder,
        isTableHeader: true,
      },
      children,
    );
  }

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
