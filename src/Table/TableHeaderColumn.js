import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeaderColumnStyle from './TableHeaderColumn.style';
import styled from 'styled-components';

const Th = styled.td`
  font-weight: normal;
  font-size: ${({ condensed }) => (condensed ? '12px' : '13px')};
  padding-left: 24px;
  padding-right: 24px;
  height: ${({ condensed }) => (condensed ? 'auto' : '56px')};
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(158, 158, 158);
  position: relative;
  text-transform: uppercase;
`;


class TableHeaderColumn extends Component {
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
      style,
      ...other
    } = this.props;

    const handlers = {
      onClick: this.onClick,
    };

    return (
      <Th
        className={className}
        {...other}
        {...handlers}
        style={style}
      >
        {children}
      </Th>
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
