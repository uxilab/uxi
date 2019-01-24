import React, { Component } from 'react';
import styled from 'styled-components';
import { TextEllipsis } from '../../Text';
import {
  Arrowdown,
  Sortingup,
  Sortingdown,
  Nosorting,
} from '../../Icons';
import {
  TableHeaderColumn,
} from '../../Table';

import {
  Separator,
  ButtonMenuItem,
  ButtonMenu,
} from '../../Menu';
import { UnstyledButton } from '../../Button';


const FlexExtended = styled.div`
  flex-grow: 99;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div:first-child,
  & > div:first-child > div:first-child,
  & > div:first-child > div:first-child > *:first-child {
    width : 100%;
    height: 100%;
    /* min-height: 48px; */
    box-sizing: border-box;
  }
`;

const Flex2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: rgb(158, 158, 158);
  text-transform: uppercase;
  font-weight: normal;
  font-size: ${({ condensed }) => (condensed ? '12px' : '13px')};
`;
/*
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
 */

class DataGridSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  /*
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
 */
  render() {
    const {
      title,
      /* , key, style */
      condensed,
      /* noPadding */
      dataKey,
      extraMenuItems,
      menuItems,
    } = this.props;
    // const { show } = this.state;
    // const mergedStyle = show ? Object.assign({}, popOver, { display: 'block' }) : popOver;
    // const styleForButton = show ? headerWithSort : headerWithSortNotSelected;

    const defaultSortingMenu = [
      {
        onClick: () => {},
        displayName: 'Sort ascending',
        icon: <Sortingup size={16} />,
      }, {
        onClick: () => {},
        displayName: 'Sort descending',
        icon: <Sortingdown size={16} />,
      }, {
        onClick: () => {},
        displayName: 'no sorting',
        icon: <Nosorting size={16} />,
      }];

    let finalMenu = defaultSortingMenu;

    if (extraMenuItems && extraMenuItems.length) {
      finalMenu.push(<Separator />);
      finalMenu = finalMenu.concat(extraMenuItems);
    }

    if (menuItems && menuItems.length) {
      finalMenu = menuItems;
    }

    return (
      <TableHeaderColumn /* style={style} */noPadding key={dataKey} >
        <FlexExtended
          style={{ }}
        >
          <ButtonMenu
            style={{ width: '100%', minHeight: '48px', boxSizing: 'border-box' }}
            isFullWidth
            anchor="right"
            button={(
              <UnstyledButton
                isFullWidth
                style={{
                  height: '47.99px', // IE is the best
                  minHeight: '48px',
                  boxSizing: 'border-box',
                  // paddingLeft: noPadding ? 0 : '24px',
                  // paddingRight: noPadding ? 0 : '8px',
                }}
              >
                <Flex2
                  condensed={condensed}
                >
                  <TextEllipsis
                    style={{
                      paddingLeft: '24px',
                      paddingRight: '6px',
                      width: '100%',
                      textAlign: 'left',
                    }}
                  >
                    {title}
                  </TextEllipsis>
                  <Arrowdown
                    style={{
                      marginLeft: 'auto',
                      marginRight: '6px',
                      transition: 'none',
                    }}
                    size={12}
                  />
                </Flex2>
              </UnstyledButton>
            )}
          >
            {finalMenu.map(menuItem => (
              React.isValidElement(menuItem)
                ? menuItem
                : <ButtonMenuItem
                  icon={menuItem.icon}
                  onClick={menuItem.onClick}
                >
                  {menuItem.displayName}
                </ButtonMenuItem>
            ))}

          </ButtonMenu>
        </FlexExtended>
      </TableHeaderColumn>
    );
    /*
    return (
      <TableHeaderColumn style={style}>
        <div
          className="sortingGrid"
          style={{
            position: 'relative',
            cursor: 'pointer',
            marginLeft: '-24px',
            marginRight: '-4px',
            paddingLeft: '24px',
            paddingRight: '4px',
            ...styleForButton
          }}
        >
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
              {show
                ? <Trianglearrowup style={{ transition: 'none' }} size={12} />
                : <Trianglearrow style={{ transition: 'none' }} size={12} />
              }
            </div>
          </div>
          <div style={mergedStyle} ref={(ref) => { this.node = ref; }}>
            <div
              style={{
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
    */
  }
}

export default DataGridSorting;
