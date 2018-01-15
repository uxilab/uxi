import React, { Component } from 'react';
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
import PropTypes from 'prop-types';

/**
 *
 * Data grid is much more complex than a Table.
 * The Data Grid is a really complex component which plays with the idea of showing a List of Entities
 * The Data Grid is complex and should not be missMatched with the Table
 * The Table is used for simpler usecases whereas the Data Grid is more close to an XLS like component.
 * Under the hood, the Data Grid is using the Table.
 *
 * Data GRID can be extends - as we work by Entity, we can create custom cell or column defition to show extra content.
 * Data GRID APIS:
 *
 * data <= the data
 * actions = [], a list of actions with an Icon, a name, a promoted (boolean to mention must be visible) and an action
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
  static contextTypes = {
    getTypeDefinition: PropTypes.func,
  };

  render() {
    const {
      data,
      propertyKey,
      properties,
      selectable,
      fixedHeight,
    } = this.props;
    const { getTypeDefinition } = this.context;
    const headers = toHeaderDefinition(data, properties);
    const viewModel = toViewModel(
      data,
      properties,
      propertyKey,
      getTypeDefinition,
    );

    const content = (
      <Table selectable={selectable}>
        {createDataGridHeader(headers, fixedHeight)}
        {createDataGridBody(viewModel)}
      </Table>
    );

    if (!fixedHeight) {
      return content;
    }

    return (
      <div style={{ height: `${fixedHeight}px`, position: 'relative', overflowY: 'scroll' }}>
        {content}
      </div>
    );
  }
}

export default DataGrid;
