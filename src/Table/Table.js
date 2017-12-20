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

    let childCount = 0;
    const availableRows = [];
    React.Children.forEach(this.props.children, (child) => {
      if (!React.isValidElement(child)) return;

      const { componentName } = child.type;
      if (componentName === 'TableBody') {
        childCount = React.Children.count(child.props.children);
        React.Children.forEach(child.props.children, (row, idx) => availableRows.push(idx));
      }
    });

    this.setState({
      availableRows,
      allRowsSelected,
      rowsLength: childCount,
    });
  }

  onRowSelection = (rowNumber) => {
    const { selectedRows, allRowsSelected } = this.state;

    if (rowNumber === 'all') {
      if (allRowsSelected) this.setState({ allRowsSelected: true });
      this.setState({
        selectedRows: [...this.state.availableRows],
      });
    } else if (rowNumber === 'none') {
      if (allRowsSelected) {
        this.setState({
          selectedRows: [],
        });
      }
    } else {
      if (selectedRows.length === 0) { // eslint-disable-line no-lonely-if
        selectedRows.push(rowNumber);
        this.setState({ selectedRows });
      } else if (selectedRows.length > 0) {
        const idx = selectedRows.indexOf(rowNumber);

        if (idx > -1) {
          selectedRows.splice(idx, 1);
        } else {
          selectedRows.splice(idx, 0, rowNumber);
        }

        this.setState({
          selectedRows: selectedRows.sort(ascendingSort),
        });
      }
    }
  };

  onSelectAll = () => {
    this.setState({ allRowsSelected: !this.state.allRowsSelected });
    if (this.onRowSelection) {
      if (!this.state.allRowsSelected) {
        this.onRowSelection('all');
      } else {
        this.onRowSelection('none');
      }
    }
  };

  createTableBody(base) {
    const { selectedRows } = this.state;
    return React.cloneElement(
      base,
      {
        allRowsSelected: this.state.rowsLength === selectedRows.length,
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
        // enableSelectAll: /* base.props.enableSelectAll && */ this.props.selectable && this.props.multiSelectable,
        selectable: this.props.selectable,
        multiSelectable: this.props.multiSelectable,
        onSelectAll: this.onSelectAll.bind(this),
        selectAllSelected: this.state.allRowsSelected,
        condensed: this.props.condensed,
        noBorder: this.props.noBorder,
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
