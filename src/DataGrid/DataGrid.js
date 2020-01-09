import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
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

  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedEntities: [],
      allChecked: false,
    };

    this.isSelectionControlled = props.selectedEntities !== undefined;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      selectedEntities,
      allChecked,
    } = this.state;

    const {
      data,
      properties,
      selectable,
      // selectedIndexes: selectedIndexesProp,
      selectedEntities: selectedEntitiesProp,
    } = this.props;

    if (!isEqual(nextProps.selectedEntities, selectedEntitiesProp)) {
      return true;
    } else if (nextState.selectedEntities.length !== selectedEntities.length) {
      return true;
    } else if (nextProps.selectable !== selectable) {
      return true;
    } else if (nextState.allChecked !== allChecked) {
      return true;
    } else if (nextProps.data.length !== data.length) {
      return true;
    } else if (!isEqual(nextProps.properties, properties)) {
      return true;
    } else if (!isEqual(nextProps.data, data)) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    if (!isEqual(this.state.selectedEntities, this.props.selectedEntities)) {
      if (this.isSelectionControlled) {
        this.setState({
          selectedEntities: this.props.selectedEntities,
        });
      }
    }
  }

  onChange(e, indexes, values) {
    const { onChange } = this.props;
    if (this.isSelectionControlled) {
      // noop
      // actully, let's cheat
      this.setState({
        selectedEntities: values,
      });
    } else {
      this.setState({
        selectedEntities: values,
      });
    }

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
    const {
      selectedEntities,
      hideBatchActionContent,
    } = this.state;

    if (hideBatchActionContent) {
      return null;
    }

    if (selectedEntities.length === 0) {
      return <div />;
    }

    const listStyle = {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      marginLeft: '56px',
      lineHeight: '48px',
      height: '48px',
      display: 'flex',
      justifyContent: 'stretch',
      borderBottom: '1px solid rgb(224,224,224)',
      background: 'white',
    };

    return (
      <List style={listStyle}>
        <span key="selected" >
          {selectedEntities.length} selected
        </span>
        {actions.map((action, i) => (
          <ButtonLink
            key={(action.label || i)}
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
      stickyHeader,
      hideBatchActionContent,

      selected: selectedProp, // using prop via entity[propertyKey],
      selectedEntities: selectedEntitiesProp,
    } = this.props;

    // let's keep hacking around GFD
    let selected = selectedProp;
    if (selectedEntitiesProp && selected === undefined) {
      selected = data.reduce((acc, { entityId }, i) =>
        (selectedEntitiesProp.indexOf(entityId) > -1 ? [...acc, i] : acc)
        , []
      );
    }

    const { getTypeDefinition } = this.context;
    const headers = toHeaderDefinition(data, properties);
    const viewModel = toViewModel(
      data,
      properties,
      propertyKey,
      getTypeDefinition,
    );
    const { selectedEntities: selectedEntitiesState, allChecked } = this.state;

    const selectedEntities = this.isSelectionControlled
      ? selectedEntitiesProp
      : selectedEntitiesState;

    let hideHeader = false;

    if (hideBatchActionContent !== true
      && batchActions
      && batchActions.length > 0
      && selectedEntities
      && selectedEntities.length > 0
    ) {
      hideHeader = true;
    }

    const header = createDataGridHeader(headers, fixedHeight, hideHeader, stickyHeader);
    const body = createDataGridBody(viewModel, false, actions);
    const batchActionsContent = this.createBatchActions(batchActions || []);

    const content = (
      <div style={{ position: 'relative' }}>
        {batchActionsContent}
        <Table
          ref={(tableRef) => { this.tableRef = tableRef; }}
          onChange={this.onChange.bind(this)}
          multiSelectable={multiSelectable} // WTFF!!
          selectable={selectable} // WTFF!!
          selected={selected}
          selectedEntities={selectedEntities}
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
      stickyHeader,
      multiSelectable,
      () => {
        this.checkAll();
      },
      allChecked
    );

    return (
      <div style={{ position: 'relative' }}>
        {batchActionsContent}
        <Table >
          {headerWithCheckbox}
        </Table>
        <div style={{ height: `${fixedHeight}px`, overflowY: 'scroll' }}>
          <Table
            ref={(tableRef) => { this.tableRef = tableRef; }}
            allRowsSelected={allChecked}
            onChange={this.onChange.bind(this)}
            selectable={selectable}
            multiSelectable={multiSelectable}
            selected={selected}
            selectedEntities={selectedEntities}
          >
            {body}
          </Table>
        </div>
      </div>
    );
  }
}

export default DataGrid;
