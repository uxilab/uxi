import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
  padding-left: 24px;
  padding-right: 4px;
  height: ${({ condensed }) => (condensed ? 'auto' : '48px')};
  text-align: left;
  font-size: ${({ condensed }) => (condensed ? '13px' : '14px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: inherit;
  position: relative;
  background-clip: padding-box;
`;

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
    onClickHandler: PropTypes.func, // is this correct name ? -df
    style: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    /**
     * @ignore
     * Number to identify the header row. This property
     * is automatically populated when used with TableHeader.
     */
    columnNumber: 0,
    hoverable: false,
    onClick: () => { },
    onClickHandler: () => { }, // is this correct name ? -df
    style: {},
    className: '',
  };

  state = {
    hovered: false,
  };

  onClick = (event) => {
    if (this.props.onClickHandler) {
      this.props.onClickHandler(event, this.props.columnNumber);
    }
  };

  render() {
    const {
      children,
      className,
      columnNumber, // eslint-disable-line no-unused-vars
      hoverable, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const handlers = {
      onClick: this.onClick,
    };

    return (
      <Td
        className={className}
        {...other}
        {...handlers}
      >
        {children}
      </Td>
    );
  }
}

export default TableRowColumn;
