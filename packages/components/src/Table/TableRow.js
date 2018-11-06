import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from '../Theme/colorManipulator';

/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
const Tr = styled.tr`
  border-bottom: ${({ noBorder }) => (noBorder ? 'none' : '1px solid rgb(224, 224, 224)')};
  cursor: ${({ activable }) => (activable ? 'pointer' : '')};
  color: rgba(0, 0, 0, 0.870588);
  height: ${({ condensed }) => (condensed ? 'auto' : '48px')};
  background-color: ${({ readOnly, hasAction, activable, isActive, theme, sperateRows, rowNumber }) => {
    if (activable && isActive) {
      return lighten(theme.palette.accent.light, 0.8);
    }
    if (sperateRows && rowNumber % 2 === 0) {
      return '#f4f4f4';
    }
    if (hasAction) {
      return 'inherit';
    }
    return (readOnly ? '#f6f6f6' : '#fff');
  }};
  opacity: ${({ readOnly }) => (readOnly ? 0.6 : 1)};
  transition:box-shadow .127s linear;
  .actionMenuInTableRowColumn {
    display:none;
  }
  &:hover .actionMenuInTableRowColumn {
    display: block;
  }
  &:hover {
    box-shadow: ${({ hasAction }) => (
      hasAction ? '0px 2px 8px 0px rgba(0,0,0,.15)' : 'none'
    )};
    background-color: ${({ readOnly, hasAction, isTableHeader, locked, theme }) => {
      if (hasAction) {
        return '#fcfcfc';
      }
      return isTableHeader
      ? (locked ? '#f6f6f6' : 'transparent')
      : (readOnly ? '#f6f6f6' : lighten(theme.palette.accent.light, 0.93));
    }};
  }
  .sortingGrid svg {
    display: ${({ hideSvg }) => (hideSvg ? 'none' : 'block')};
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
      return undefined;
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
/* eslint-disable react/require-default-props */
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
  style: PropTypes.object,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  readOnlyText: PropTypes.node,
  locked: PropTypes.bool,
  activable: PropTypes.bool,
  isActive: PropTypes.bool,
};
/* eslint-enable react/require-default-props */

TableRow.defaultProps = {
  displayBorder: true,
};

export default TableRow;
