// multiSelectable
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import TableStyle from './Table.style';
import tooltipStyles from './tooltipStyles';

class Table extends Component {
  state = {
    allRowsSelected: false,
  };

  componentWillMount() {
    if (this.props.allRowsSelected) {
      this.setState({ allRowsSelected: true });
    }
  }

  onRowSelection = (selectedRows) => {
    if (this.state.allRowsSelected) this.setState({ allRowsSelected: false });
    if (this.props.onRowSelection) this.props.onRowSelection(selectedRows);
  };

  onSelectAll = () => {
    // if (this.props.onRowSelection) {
    //   if (!this.state.allRowsSelected) {
    //     this.props.onRowSelection('all');
    //   } else {
    //     this.props.onRowSelection('none');
    //   }
    // }

    this.setState({ allRowsSelected: !this.state.allRowsSelected });
  };

  createTableBody(base) {
    return React.cloneElement(
      base,
      {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable,
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
      },
    );
  }

  createTableFooter(base) {
    return base;
  }


  render() {
    const { children } = this.props;

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
        console.log('cluedin-ui: Children of the Table component must be TableBody or TableHeader or TableFooter. Nothing is rendered.');
      }
    });

    return (
      <div style={TableStyle.container}>
        <style dangerouslySetInnerHTML={{ __html: tooltipStyles }} />
        <table style={TableStyle.table}>
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
