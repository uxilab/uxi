import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeaderColumnStyle from './TableHeaderColumn.style';

class TableHeaderColumn extends Component {
  state = {
    hovered: false,
  };

  onClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event, this.props.columnNumber);
    }
  };

  render() {
    const {
      children,
      className,
      columnNumber, // eslint-disable-line no-unused-vars
      hoverable, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const handlers = {
      onClick: this.onClick,
    };

    return (
      <th
        className={className}
        style={Object.assign({}, TableHeaderColumnStyle.root, style)}
        {...handlers}
        {...other}
      >
        {children}
      </th>
    );
  }
}

TableHeaderColumn.propTypes = {
  children: PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: PropTypes.number,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
  selectable: PropTypes.bool,
  allRowsSelected: PropTypes.bool,
  multiSelectable: PropTypes.bool,
  onRowSelection: PropTypes.func,
};

export default TableHeaderColumn;
