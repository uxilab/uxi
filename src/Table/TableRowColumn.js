import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableRowColumnStyle = {
  paddingLeft: '24px',
  paddingRight: '4px',
  height: '48px',
  textAlign: 'left',
  fontSize: '13px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  backgroundColor: 'inherit',
};

class TableRowColumn extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * @ignore
     * Number to identify the header row. This property
     * is automatically populated when used with TableHeader.
     */
    columnNumber: PropTypes.number,
    hoverable: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    hoverable: false,
  };

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

    const mergedStyle = Object.assign({}, TableRowColumnStyle, style);

    return (
      <td
        className={className}
        style={mergedStyle}
        {...other}
        {...handlers}
      >
        {children}
      </td>
    );
  }
}

export default TableRowColumn;
