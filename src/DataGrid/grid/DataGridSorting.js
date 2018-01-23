import React, { Component } from 'react';
import {
  Trianglearrow,
  Trianglearrowup,
  Sortingup,
  Sortingdown,
  Nosorting,
} from '../../Icons';
import {
  TableHeaderColumn,
} from '../../Table';

import {
  VerticalMenu,
  Separator,
} from '../../Menu';

import MenuItem from '../../Menu/MenuItem';

const popOver = {
  display: 'none',
  zIndex: 1,
  position: 'absolute',
  top: '46px',
  left: '-1px',
  right: '-1px',
  background: 'rgb(243, 243, 242)',
  cursor: 'normal',
  paddingTop: '2px',
  borderLeft: '1px solid #ccc',
  borderRight: '1px solid #ccc',
};


const headerWithSort = {
  background: '#f3f3f2',
  borderTop: '1px solid #ccc',
  borderLeft: '1px solid #ccc',
  borderRight: '1px solid #ccc',
  boxSizing: 'border-box',
};

const headerWithSortNotSelected = {
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  borderRight: '1px solid #fff',
  boxSizing: 'border-box',
};

class DataGridSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    document.addEventListener('click', this.clickHandlerForDom.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandlerForDom);
  }

  clickHandlerForDom(e) {
    const domNode = this.node;
    if (this.toggler.contains(e.target)) {
      return;
    }

    if (
      !domNode ||
      (domNode.contains && !domNode.contains(e.target))
    ) {
      this.setState({
        show: false,
      });
    }
  }

  toggle() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { title, key, style } = this.props;
    const { show } = this.state;
    const mergedStyle = show ? Object.assign({}, popOver, { display: 'block' }) : popOver;
    const styleForButton = show ? headerWithSort : headerWithSortNotSelected;
    return (
      <TableHeaderColumn style={style}>
        <div style={{ position: 'relative', cursor: 'pointer', marginLeft: '-24px', marginRight: '-4px', paddingLeft: '24px', paddingRight: '4px', ...styleForButton }}>
          <div
            role="button"
            ref={(ref) => { this.toggler = ref; }}
            onClick={this.toggle.bind(this)}
            style={{ display: 'flex', width: '100%' }}
          >
            <div style={{ flex: 1 }}>
              {title}
            </div>
            <div style={{ width: '30px' }}>
              {show ? <Trianglearrowup size={12} /> : <Trianglearrow size={12} />}
            </div>
          </div>
          <div style={mergedStyle} ref={(ref) => { this.node = ref; }}>
            <div style={{
              background: 'rgb(255, 255, 255)',
              borderBottom: '1px solid rgb(204, 204, 204)',
            }}
            >

              <VerticalMenu>
                <MenuItem icon={<Sortingup size={16} />}>Sort ascending</MenuItem>
                <MenuItem icon={<Sortingdown size={16} />}>Sort decending</MenuItem>
                <MenuItem icon={<Nosorting size={16} />}>No Sorting</MenuItem>
                <Separator />
                <div>Replace column with</div>
                <MenuItem>Just a number</MenuItem>
                <MenuItem>Some other field</MenuItem>
              </VerticalMenu>
            </div>
          </div>
        </div>
      </TableHeaderColumn>
    );
  }
}

export default DataGridSorting;
