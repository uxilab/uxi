import React, { Component } from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import TableStyle from './Table.style';
import tooltipStyles from './tooltipStyles';

class Table extends Component {
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
      <div style={TableStyle.container}>
        <style dangerouslySetInnerHTML={{ __html: tooltipStyles }} />
        <table style={{ ...TableStyle.table, ...style }}>
          {tHead}
          {tBody}
          {tFoot}
        </table>
      </div>
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
  multiSelectable: false,
  allRowsSelected: false,
  selectable: false,
};

export default radium(Table);
