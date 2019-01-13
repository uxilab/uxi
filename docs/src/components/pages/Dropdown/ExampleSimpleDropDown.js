import React, { Component } from 'react';
import SimpleDropDown from 'uxi/internal/SimpleDropDown';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import Button from 'uxi/Button';

const items = [
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

class ExampleSimpleDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Flex>
          <SimpleDropDown
            content={'MORE'}
            subContent={items.map(x => <AvatarWithName src={x.pic} name={x.name} />)}
          />
        </Flex>
        <br />
        <Flex>
          <SimpleDropDown
            inline={false}
            content={'MORE'}
            subContent={items.map(x => <AvatarWithName src={x.pic} name={x.name} />)}
          />
        </Flex>
        <Flex>
          <SimpleDropDown
            closeOnClickOutside={false}
            content={'MORE'}
            subContent={items.map(x => <AvatarWithName src={x.pic} name={x.name} />)}
          />
        </Flex>
      </div>
    );
  }
}

export default ExampleSimpleDropDown;
