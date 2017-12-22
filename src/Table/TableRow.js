import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from '../Theme/colorManipulator';

/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
const Tr = styled.tr`
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid rgb(224, 224, 224)')};
  color: rgba(0, 0, 0, 0.870588);
  height: ${({ condensed }) => (condensed ? 'auto' : '48px')};
  background-color: ${({ readOnly, activeRow, theme, rowNumber }) => {
    if (activeRow === rowNumber) {
      return lighten(theme.palette.accent.light, 0.5);
    }
    return (readOnly ? '#f6f6f6' : '#fff');
  }};
  opacity: ${({ readOnly }) => (readOnly ? 0.6 : 1)};
  &:hover {
    background-color: ${({ isTableHeader, locked, theme }) => (isTableHeader
      ? (locked ? '#f6f6f6' : 'transparent')
      : lighten(theme.palette.accent.light, 0.8))
    };
  }
`;

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick, rowNumber } = this.props;
    if (onClick) { onClick(event, rowNumber); }
  }

  render() {
    const {
      className,
      displayBorder, // eslint-disable-line no-unused-vars
      rowNumber, // eslint-disable-line no-unused-vars
      selectable, // eslint-disable-line no-unused-vars
      selected, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const rowColumns = React.Children.map(this.props.children, (child, columnNumber) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          columnNumber,
          key: `${this.props.rowNumber}-${columnNumber}`,
          onClick: child.props.onClick,
        });
      }
    });

    const handlers = {
      onClick: this.handleClick,
    };

    return (
      <Tr
        {...other}
        rowNumber={rowNumber}
        {...handlers}
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
  locked: PropTypes.bool,
  activeRow: PropTypes.number,
};

TableRow.defaultProps = {
  displayBorder: true,
  selectable: true,
  selected: false,
};

export default TableRow;
