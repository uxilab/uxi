import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from '../Table';
import {
  toHeaderDefinition,
  toViewModel,
} from './grid/viewModel';
import {
  createDataGridHeader,
  createDataGridBody,
} from './grid/factory';
import { ButtonLink } from '../Button';
import { List } from '../List';

/**
 *
 * Data grid is much more complex than a Table.
 * The Data Grid is a really complex component which
 * plays with the idea of showing a List of Entities
 * The Data Grid is complex and should not be missMatched with the Table
 * The Table is used for simpler usecases whereas the
 * Data Grid is more close to an XLS like component.
 * Under the hood, the Data Grid is using the Table.
 *
 * Data GRID can be extends - as we work by Entity,
 * we can create custom cell or column defition to show extra content.
 * Data GRID APIS:
 *
 * data <= the data
 * actions = [], a list of actions with an Icon, a name,
 * a promoted (boolean to mention must be visible) and an action
 * batchActions = [], a list of actions with an Icon, a name and an action,
 * sortingKyes=[], a list of Keys that needs to be sorted
 * selectable
 * activable
 * multiSelectable
 * noDataText,
 * fixedHeight => setup the correct overflow
 * tileConfig: {
 * }
 * detailViewConfig: {
 * }
 * iconViewConfig: {
 *
 * },
 * tableConfig: {
 *   fixedHeader,
 *   columnConfig: {
 *   },
 *   resizable,
 *   extraColumnConfig: {
 *     candidate: [],
 *     extraColumns: [
 *       colimnConfig,
 *     ]
 *   }
 * }
 */

/**
  *    var gridOptions = {
        columnDefs: columnDefs,
        rowSelection: 'multiple',
        enableColResize: true,
        enableSorting: true,
        enableFilter: true,
        enableRangeSelection: true,
        suppressRowClickSelection: true,
        animateRows: true,
        onModelUpdated: modelUpdated,
        debug: true
    };
  */


class DataGrid extends Component {
  static componentName = 'DataGrid';
  static contextTypes = {
    getTypeDefinition: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedEntities: [],
      allChecked: false,
    };
  }

  onChange(e, indexes, values) {
    const { onChange } = this.props;
    this.setState({
      selectedEntities: values,
    });
    if (onChange) {
      onChange(e, indexes, values);
    }
  }

  clearSelectedEntities() {
    this.setState({
      selectedEntities: [],
    });

    if (this.tableRef) { // if not new table
      this.tableRef.clearSelection();
    }
  }

  checkAll() {
    this.setState({
      allChecked: !this.state.allChecked,
    });
  }

  createBatchActions(actions) {
    const { selectedEntities } = this.state;

    if (selectedEntities.length === 0) {
      return <div />;
    }

    const listStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      paddingLeft: '82px',
      lineHeight: '48px',
      height: '48px',
      display: 'flex',
      justifyContent: 'stretch',
      borderBottom: '1px solid rgb(224,224,224)',
    };

    return (
      <List style={listStyle}>
        <span>
          {selectedEntities.length} selected
        </span>
        {actions.map(action => (
          <ButtonLink
            text={action.label}
            icon={action.icon}
            onClick={(e) => {
              action.onClick(e, selectedEntities, this.clearSelectedEntities);
              if (action.clearSelection) {
                this.clearSelectedEntities();
              }
            }}
          />
        ))}
      </List>
    );
  }

  render() {
    const {
      data,
      propertyKey,
      properties,
      selectable,
      fixedHeight,
      multiSelectable,
      batchActions,
      actions,
    } = this.props;
    const { getTypeDefinition } = this.context;
    const headers = toHeaderDefinition(data, properties);
    const viewModel = toViewModel(
      data,
      properties,
      propertyKey,
      getTypeDefinition,
    );
    const { selectedEntities, allChecked } = this.state;

    let hideHeader = false;

    if (batchActions
      && batchActions.length > 0
      && selectedEntities
      && selectedEntities.length > 0
    ) {
      hideHeader = true;
    }

    const header = createDataGridHeader(headers, fixedHeight, hideHeader);
    const body = createDataGridBody(viewModel, false, actions);
    const batchActionsContent = this.createBatchActions(batchActions || []);

    const content = (
      <div style={{ position: 'relative' }}>
        {batchActionsContent}
        <Table
          ref={(tableRef) => { this.tableRef = tableRef; }}
          onChange={this.onChange.bind(this)}
          multiSelectable={selectable}
          selectable={selectable}
        >
          {header}
          {body}
        </Table>
      </div>
    );

    if (!fixedHeight) {
      return content;
    }

    const headerWithCheckbox = createDataGridHeader(
      headers,
      fixedHeight,
      hideHeader,
      multiSelectable,
      () => {
        this.checkAll();
      }
    );

    return (
      <div style={{ position: 'relative' }}>
        {batchActionsContent}
        <Table>
          {headerWithCheckbox}
        </Table>
        <div style={{ height: `${fixedHeight}px`, overflowY: 'scroll' }}>
          <Table
            ref={(tableRef) => { this.tableRef = tableRef; }}
            allRowsSelected={allChecked}
            onChange={this.onChange.bind(this)}
            selectable={selectable}
            multiSelectable={multiSelectable}
          >
            {body}
          </Table>
        </div>
      </div>
    );
  }
}

export default DataGrid;
