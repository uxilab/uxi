import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TableHeaderCheckedAllCell from './TableHeaderCheckedAllCell';
import TableHeaderCheckedPlaceholderCell from './TableHeaderCheckedPlaceholderCell';

/* eslint-disable indent */
const Thead = styled.thead`

  th {
    ${({ stickyHeader }) => (stickyHeader
      ? `background: white;
        position: sticky;
        top: 0;
        z-index: 1;
      `
      : ''
    )};

    & > * {
      ${({ stickyHeader }) => (stickyHeader ? 'border-bottom: 2px solid #cecece' : '')};
    }
  }
`;
/* eslint-enable indent */

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
    // displaySelectAll: PropTypes.bool, // commented out because it is never used
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
    // selectAllSelected: PropTypes.bool, // commented out because it is never used
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    adjustForCheckbox: true,
    // displaySelectAll: true,  // commented out because it is never used
    enableSelectAll: true,
    // selectAllSelected: false, // commented out because it is never used
    /**
      * Controls whether or not header rows should be
      * adjusted for a checkbox column. If the select all
      * checkbox is true, this property will not influence
      * the number of columns. This is mainly useful for
      * "super header" rows so that the checkbox column
      * does not create an offset that needs to be accounted
      * for manually.
      */
    children: null,
    className: '',
    onSelectAll: () => { },
    style: {},
  };


  createSuperHeaderRows() {
    const numChildren = React.Children.count(this.props.children);
    if (numChildren === 1) return undefined;

    const superHeaders = [];
    for (let index = 0; index < numChildren - 1; index += 1) {
      const child = this.props.children[index];

      if (!React.isValidElement(child)) continue; // eslint-disable-line no-continue

      const props = {
        ...child.props,
        key: `sh${index}`,
        rowNumber: index,
      };
      superHeaders.push(this.createSuperHeaderRow(child, props, index));
    }

    if (superHeaders.length) {
      return superHeaders;
    }
    return null;
  }

  createSuperHeaderRow(child, props, index) {
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
          key={rowNumber}
        />,
      );
    }

    React.Children.forEach(child.props.children, (aChild, i) => {
      if (aChild) {
        const augmentedChildren = React.cloneElement(aChild, {
          ...((aChild && aChild.props) || {}),
          key: i,
          condensed,
          noBorder,
        });
        children.push(augmentedChildren);
      }
    });

    return React.cloneElement(
      child,
      {
        ...props,
        condensed,
        noBorder,
        isTableHeader: true,
        key: index,
      },
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
      // rowNumber, // never used
      onSelectAll,
    } = this.props;

    const numChildren = React.Children.count(this.props.children);
    const child = (numChildren === 1) ? this.props.children : this.props.children[numChildren - 1];

    const children = [];

    if (selectable) {
      if (multiSelectable) {
        children.push(
          <TableHeaderCheckedAllCell
            key="TableHeaderCheckedAllCell"
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
            key="TableHeaderCheckedPlaceholderCell"
            enableSelectAll={enableSelectAll}
            rowNumber={numChildren}
          />,
        );
      }
    }

    React.Children.forEach(child.props.children, (aChild, i) => {
      if (aChild) {
        const augmentedChildren = React.cloneElement(aChild, {
          ...aChild.props,
          key: i,
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
      stickyHeader,
    } = this.props;

    const superHeaderRows = this.createSuperHeaderRows();
    const baseHeaderRow = this.createBaseHeaderRow();

    return (
      <Thead stickyHeader={stickyHeader} className={className} style={style}>
        {superHeaderRows}
        {baseHeaderRow}
      </Thead>
    );
  }
}

export default TableHeader;
