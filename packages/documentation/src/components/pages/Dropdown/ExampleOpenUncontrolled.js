import React, { Component } from 'react';
import DropDown from 'uxi/internal/DropDown';
import { AvatarWithName } from 'uxi/Img';
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

class ExampleOpenUncontrolled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <DropDown
          items={items.map(({ name, pic }) => (
            <div value={name}>
              <AvatarWithName src={pic} name={name} />
            </div>
          ))}
          main={<div>Select</div>}
        />
      </div>
    );
  }
}

export default ExampleOpenUncontrolled;
