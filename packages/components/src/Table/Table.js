import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableWrapperUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableUI = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  table-layout: fixed;
  border: none;
`;

class Table extends Component {
  static componentName = 'Table';
  createTableBody(base) {
    return React.cloneElement(
      base,
      {
        activeRow: this.props.activeRow,
        multiSelectable: this.props.multiSelectable,
        onRowSelection: this.props.onRowSelection,
        onActivateRow: this.props.onActivateRow,
        selectable: this.props.selectable,
        condensed: this.props.condensed,
        noBorder: this.props.noBorder,
        isRowSelected: this.props.isRowSelected,
        activable: this.props.activable,
        getID: this.props.getID,
        sperateRows: this.props.sperateRows,
        style: Object.assign({ height: this.props.height }, (base.props.style || {})),
      },
    );
  }

  createTableHeader(base) {
    return React.cloneElement(
      base,
      {
        allRowsSelected: this.props.allRowsSelected,
        selectable: this.props.selectable,
        multiSelectable: this.props.multiSelectable,
        onSelectAll: this.props.onSelectAll,
        condensed: this.props.condensed,
        noBorder: this.props.noBorder,
      },
    );
  }

  render() {
    const { children, style } = this.props;

    let tBody;
    let tHead;
    let tFoot;

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      const { componentName } = child.type;
      if (componentName === 'TableBody') {
        tBody = this.createTableBody(child);
      } else if (componentName === 'TableHeader') {
        tHead = this.createTableHeader(child);
      } else if (componentName === 'TableFooter') {
        tFoot = child;
      } else {
        console.warn('cluedin-ui: Children of the Table component must be TableBody or TableHeader or TableFooter. Nothing is rendered.');
      }
    });

    return (
      <TableWrapperUI>
        <TableUI style={style}>
          {tHead}
          {tBody}
          {tFoot}
        </TableUI>
      </TableWrapperUI>
    );
  }
}

Table.propTypes = {
  children: PropTypes.node,
  multiSelectable: PropTypes.bool,
  allRowsSelected: PropTypes.bool,
  onRowSelection: PropTypes.func,
  selectable: PropTypes.bool,
  height: PropTypes.string,
  sperateRows: PropTypes.bool,
};

Table.defaultProps = {
  children: null,
  multiSelectable: false,
  allRowsSelected: false,
  onRowSelection: () => { },
  selectable: false,
  height: '',
  sperateRows: false,
};

export default Table;
