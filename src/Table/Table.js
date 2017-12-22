// multiSelectable
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import TableStyle from './Table.style';
import tooltipStyles from './tooltipStyles';

function ascendingSort(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

class Table extends Component {
  state = {
    allRowsSelected: false,
    selectedRows: [],
    rowsLength: 0,
    availableRows: [],
  };

  componentWillMount() {
    let allRowsSelected = this.state.allRowsSelected;
    if (this.props.allRowsSelected) {
      allRowsSelected = this.props.allRowsSelected;
    }

    const availableRows = [];
    React.Children.forEach(this.props.children, (child) => {
      if (!React.isValidElement(child)) return;

      const { componentName } = child.type;
      if (componentName === 'TableBody') {
        React.Children.forEach(child.props.children, (row, idx) => availableRows.push(idx));
      }
    });

    this.setState({
      availableRows,
      allRowsSelected,
    });
  }

  onRowSelection = (rowNumber) => {
    const { availableRows } = this.state;
    let { selectedRows } = this.state;
    const { onChange } = this.props;
    if (rowNumber === 'all') {
      selectedRows = [...this.state.availableRows];
    } else if (rowNumber === 'none') {
      selectedRows = [];
    } else {
      if (selectedRows.length === 0) { // eslint-disable-line no-lonely-if
        selectedRows.push(rowNumber);
      } else if (selectedRows.length > 0) {
        const idx = selectedRows.indexOf(rowNumber);

        if (idx > -1) {
          selectedRows.splice(idx, 1);
        } else {
          selectedRows.splice(idx, 0, rowNumber);
        }
      }
    }
    this.setState({ selectedRows });
    if (onChange) { onChange(event, selectedRows, availableRows); }
  };

  onSelectAll = () => {
    if (this.onRowSelection) {
      if (this.state.availableRows.length === this.state.selectedRows.length) {
        this.onRowSelection('none');
      } else {
        this.onRowSelection('all');
      }
    }
  };

  createTableBody(base) {
    const { selectedRows } = this.state;
    return React.cloneElement(
      base,
      {
        allRowsSelected: this.state.availableRows.length === selectedRows.length,
        selectedRows: this.state.selectedRows,
        multiSelectable: this.props.multiSelectable,
        onRowSelection: this.onRowSelection,
        onSelectAll: this.onSelectAll,
        selectable: this.props.selectable,
        condensed: this.props.condensed,
        noBorder: this.props.noBorder,
        style: Object.assign({ height: this.props.height }, (base.props.style || {})),
      },
    );
  }

  createTableHeader(base) {
    return React.cloneElement(
      base,
      {
        selectable: this.props.selectable,
        multiSelectable: this.props.multiSelectable,
        onSelectAll: this.onSelectAll.bind(this),
        condensed: this.props.condensed,
        noBorder: this.props.noBorder,
        availableRows: this.state.availableRows,
        selectedRows: this.state.selectedRows,
      },
    );
  }

  createTableFooter(base) {
    return base;
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
        tFoot = this.createTableFooter(child);
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
};

Table.defaultProps = {
  multiSelectable: false,
  allRowsSelected: false,
  selectable: false,
};

export default radium(Table);
