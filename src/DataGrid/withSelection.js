import React, { Component } from 'react';

const getValuesAndRows = (props) => {
  const { children } = props;

  const availableIndexes = [];
  const availableRowsValues = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      return;
    }

    const { componentName } = child.type;

    if (componentName === 'TableBody') { // TODO: Add Scenario for TableView, TileView,....
      React.Children.forEach(child.props.children, (row, idx) => {
        if (row) {
          // By default we take the 'value' props from the Children Component to use as the value.
          const { props: { value, locked } } = row;
          if (locked !== true) {
            availableRowsValues.push(value);
            availableIndexes.push(idx);
          }
        }
      });
    }
  });

  return {
    availableIndexes,
    availableRowsValues,
  };
};

export const withSelection = Comp => class WithSelection extends Component {
  constructor(props) {
    super(props);
    this.onActivateRow = this.onActivateRow.bind(this);
    this.onRowSelection = this.onRowSelection.bind(this);
    this.state = {
      allRowsSelected: props.allRowsSelected,
      selectedRows: [],
      selectedRowsValues: props.initialSelected || [],
      availableIndexes: [], // internal
      availableRowsValues: [], // internal
      activeRow: null,
    };
    this.currentRowID = 0;
  }

  componentWillMount() {
    const initialState = getValuesAndRows(this.props);
    const { selectedRowsValues } = this.state;
    const selectedRows = [];
    initialState.availableRowsValues.forEach((v, index) => {
      const isSelected = selectedRowsValues.find(selectedValue => v === selectedValue);
      if (isSelected) {
        selectedRows.push(index);
      }
    });

    this.setState(Object.assign({}, initialState, {
      selectedRows,
    }));
  }

  componentWillReceiveProps(nextProps) {
    const { availableRowsValues, selectedRowsValues, availableIndexes, allRowsSelected } = this.state;
    const newValues = getValuesAndRows(nextProps);
    const newSelectedIndex = [];
    const newSelectedValues = [];

    if (availableRowsValues.length !== newValues.availableRowsValues.length) {
      newValues.availableRowsValues.forEach((newValue, index) => {
        const isPresent = selectedRowsValues.find(oldValue => oldValue === newValue);
        if (isPresent) {
          newSelectedIndex.push(index);
          newSelectedValues.push(newValue);
        }
      });

      // we need to update the Index if there are deletion or addition
      // to do that, we assign a uniqueID list which can indicate weather the row was existing or now

      // selectedRows <=== should be updated with new INDEX
      // selectedRowsVAlues should not change

      this.setState(Object.assign({}, newValues, { selectedRows: newSelectedIndex, selectedRowsValues: newSelectedValues }));
    }
    if (allRowsSelected !== nextProps.allRowsSelected) {
      if (nextProps.allRowsSelected) {
        this.setState(Object.assign({}, this.state, { allRowsSelected: true, selectedRows: availableIndexes, selectedRowsValues: availableRowsValues }));
        if (nextProps.onChange) {
          nextProps.onChange(
            null,
            availableIndexes,
            availableRowsValues,
            availableIndexes,
            availableRowsValues);
        }
      } else {
        this.setState(Object.assign({}, this.state, { allRowsSelected: false, selectedRows: [], selectedRowsValues: [] }));
        if (nextProps.onChange) {
          nextProps.onChange(
            null,
            [],
            [],
            availableIndexes,
            availableRowsValues);
        }
      }
    }
  }

  /**
   *
   * @param {*} event The synthetic event triggred by React
   * @param {*} rowIndex The index of the row that triggered the Active
   */
  onActivateRow(event, rowIndex) {
    const { activeRow } = this.state;
    if (rowIndex === activeRow) {
      this.setState({ activeRow: null });
    } else {
      this.setState({ activeRow: rowIndex });
    }
  }


  /**
   * @param {*} rowIndex The index of the row
   */
  onRowSelection = (rowIndex) => {
    const { onChange, multiSelectable, selectable } = this.props;
    const { availableIndexes, availableRowsValues, selectedRows } = this.state;
    let mitigatedSelectedRows = [...selectedRows];

    // If the rowIndex is the special case 'check all', we select all availableRows (not locked).
    if (rowIndex === 'all') {
      mitigatedSelectedRows = [...this.state.availableIndexes];
    } else if (rowIndex === 'none') {
      // If the rowIndex is the special case 'none', unselect all rows.
      mitigatedSelectedRows = [];
    } else {
      if (mitigatedSelectedRows.length === 0) { // eslint-disable-line no-lonely-if
        mitigatedSelectedRows.push(rowIndex);
      } else if (mitigatedSelectedRows.length > 0) {
        // If it is a multi-select, we allow muliple values
        if (multiSelectable) {
          const idx = mitigatedSelectedRows.indexOf(rowIndex);

          if (idx > -1) {
            mitigatedSelectedRows.splice(idx, 1);
          } else {
            mitigatedSelectedRows.splice(idx, 0, rowIndex);
          }
        } else if (selectable && !multiSelectable) {
          // If no multi-select, we toggle if already present.
          const idx = mitigatedSelectedRows.indexOf(rowIndex);
          if (idx > -1) { // single select, is already in, remove it
            mitigatedSelectedRows = [];
          } else { // add
            mitigatedSelectedRows = [rowIndex];
          }
        }
      }
    }
    // make values, yeah this idirty
    const selectedRowsValues = this.getValueForRows(mitigatedSelectedRows);

    this.setState({ selectedRows: mitigatedSelectedRows, selectedRowsValues });

    if (onChange) {
      onChange(
        event,
        mitigatedSelectedRows,
        selectedRowsValues,
        availableIndexes,
        availableRowsValues,
      );
    }
  };

  onSelectAll = () => {
    if (this.onRowSelection) {
      if (this.state.availableIndexes.length === this.state.selectedRows.length) {
        this.onRowSelection('none');
      } else {
        this.onRowSelection('all');
      }
    }
  };

  getValueForRows(rows = []) {
    const { availableIndexes, availableRowsValues } = this.state;
    return rows.map((row) => {
      const indexInValues = availableIndexes.indexOf(row);
      return availableRowsValues[indexInValues];
    });
  }

  isRowSelected(rowIndex) {
    if (this.state.selectedRows.indexOf(rowIndex) > -1) {
      return true;
    }
    return false;
  }

  render() {
    const allRowsSelected = this.state.availableIndexes.length === this.state.selectedRows.length;

    return (
      <Comp
        {...this.props}
        allRowsSelected={allRowsSelected}
        isRowSelected={rowIndex => this.isRowSelected(rowIndex)}
        onSelectAll={() => { this.onSelectAll(); }}
        onRowSelection={this.onRowSelection}
        onActivateRow={this.onActivateRow}
        activeRow={this.state.activeRow}
      />
    );
  }
};

export default {
  withSelection,
};
