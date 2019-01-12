import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Th = styled.td`
  font-weight: normal;
  font-size: ${({ condensed }) => (condensed ? '12px' : '13px')};
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(158, 158, 158);
  position: relative;
  text-transform: uppercase;
  padding:0;
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
      noPadding,
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
        <div
          style={{
            paddingLeft: noPadding ? 0 : '24px',
            paddingRight: noPadding ? 0 : '24px',
            height: '100%',
            minHeight: '48px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            // lineHeight: '46px',
          }}
        >
          {children}
        </div>
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
  onClickHandler: PropTypes.func, // what is this ?
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
  selectable: PropTypes.bool,
  allRowsSelected: PropTypes.bool,
  multiSelectable: PropTypes.bool,
  onRowSelection: PropTypes.func,
};

TableHeaderColumn.defaultProps = {
  children: null,
  /**
   * The css class name of the root element.
   */
  className: '',
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: 0,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: false,
  onClick: () => { },
  onClickHandler: () => { }, // what is this ?
  /**
   * Override the inline-styles of the root element.
   */
  style: {},
  selectable: false,
  allRowsSelected: false,
  multiSelectable: false,
  onRowSelection: () => { },
};

export default TableHeaderColumn;
