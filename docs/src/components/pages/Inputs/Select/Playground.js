import React, { Component } from 'react';
import WithBoundingRect from 'uxi/internal/WithBoundingRect';
import DropDown2 from 'uxi/internal/DropDown2';
import DropDown from 'uxi/internal/DropDownWithClickOutside';
import FixedDropDown from 'uxi/internal/FixedDropDownWithClickOutside';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import { Options } from 'uxi/Icons';
import Button, { FlatButton } from 'uxi/Button';

const options = [
  {
    name: 'Ava',
    pic: 'https://randomuser.me/api/portraits/women/82.jpg',
  }, {
    name: 'Regina',
    pic: 'https://randomuser.me/api/portraits/women/37.jpg',
  }, {
    name: 'rem',
    pic: 'https://randomuser.me/api/portraits/men/3.jpg',
  }, {
    name: 'Britany',
    pic: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
];


class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
    };
  }

  render() {
    const Show = ({ rect, children, scrollOffset }) => (
      <pre>
        {JSON.stringify(rect, 2, 2)}
        <hr />
        {JSON.stringify(scrollOffset, 2, 2)}
        <hr />
        {children}
      </pre>
    );

    return (
      <div style={{ width: '100%' }}>
        <Flex style={{ height: '80px', border: '1px solid grey' }}>
          <DropDown2
            trigger={
              <FlatButton icon={<Options />} />
            }
          >
            <div style={{ background: 'white', width: '300px', padding: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </DropDown2>
        </Flex>
        <br />
        <br />
        {/*       <Flex style={{ height: '200px', border: '1px solid grey', overflow: 'hidden' }}>
          <FixedDropDown
            mainScrollingElementSelector=".uxi_ComponentShell_scrolling-element"
            trigger={
              <FlatButton icon={<Options />} />
            }
          >
            <div style={{ background: 'white', width: '240px', padding: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </FixedDropDown>
        </Flex> */}
        <br />
        <br />
        <br />

        <Flex style={{ height: '200px', border: '1px solid grey' }}>
          <DropDown
            trigger={
              <FlatButton icon={<Options />} />
            }
            inline
          >
            <div style={{ background: 'white', width: '300px', padding: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Button text="Hello" />
            </div>
          </DropDown>
        </Flex>

      </div>
    );
  }
}

export default Playground;
