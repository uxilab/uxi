import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableRowStyle from './TableRow.style';
import Radium from 'radium';

const Tr = styled.tr`
  border-bottom: 1px solid rgb(224, 224, 224);
  color: rgba(0, 0, 0, 0.870588);
  height: ${({ condensed }) => (condensed ? 'auto' : '48px')};
  background-color: ${({ readOnly }) => (readOnly ? '#f6f6f6' : '#fff')};
  &:hover {
    background-color: ${({ readOnly }) => (readOnly ? '#f6f6f6' : '#f2f2f2')};
  }
`;


class TableRow extends Component {
  onRowClick(event) {
    if (this.props.selectable && this.props.onRowClick) this.props.onRowClick(event, this.props.rowNumber);
  }

  onCellClick = (event, columnIndex) => {
    if (this.props.selectable && this.props.onCellClick) {
      this.props.onCellClick(event, this.props.rowNumber, columnIndex);
    }
    event.ctrlKey = true;
    this.onRowClick(event);
  };

  render() {
    const {
      className,
      displayBorder, // eslint-disable-line no-unused-vars
      onCellClick, // eslint-disable-line no-unused-vars
      onRowClick, // eslint-disable-line no-unused-vars
      rowNumber, // eslint-disable-line no-unused-vars
      selectable, // eslint-disable-line no-unused-vars
      selected, // eslint-disable-line no-unused-vars
      style,
      // readOnly,
      // readOnlyText,
      ...other
    } = this.props;

    const rowColumns = React.Children.map(this.props.children, (child, columnNumber) => {
      if (React.isValidElement(child)) {
        console.log('child.props.condensed', child.props.condensed);
        return React.cloneElement(child, {
          columnNumber,
          key: `${this.props.rowNumber}-${columnNumber}`,
          onClick: this.onCellClick,
        });
      }
    });

    return (
      <Tr
        {...other}
      >
        {rowColumns}
      </Tr>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,
  displayBorder: PropTypes.bool,
  onCellClick: PropTypes.func,
  onRowClick: PropTypes.func,
  /**
   * Number to identify the row. This property is
   * automatically populated when used with the TableBody component.
   */
  rowNumber: PropTypes.number,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  readOnlyText: PropTypes.node,
};

TableRow.defaultProps = {
  displayBorder: true,
  selectable: true,
  selected: false,
};

export default Radium(TableRow);
