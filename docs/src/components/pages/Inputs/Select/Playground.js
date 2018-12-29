import React, { Component } from 'react';
import WithBoundingRect from 'uxi/internal/WithBoundingRect';
import DropDown2 from 'uxi/internal/DropDown2';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import { Options } from 'uxi/Icons';
import { FlatButton } from 'uxi/Button';

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
      <div style={{ width: '100%', height: '300px' }}>
        <Flex>
          <DropDown2
            trigger={
              <FlatButton icon={<Options />} />
            }
          >
            <div style={{ background: 'white' }}>
              <p style={{ maxWidth: '140px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </DropDown2>
        </Flex>
      </div>
    );
  }
}

export default Playground;
