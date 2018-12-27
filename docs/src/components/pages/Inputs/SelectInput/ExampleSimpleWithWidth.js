import React, { Component } from 'react';
import { SelectInput } from 'uxi/Input';
import { AvatarWithName } from 'uxi/Img';

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

class ExampleSimpleWithWidth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
    };
  }

  render() {
    return (
      <div>
        <SelectInput
          onChange={(event, value) => this.setState({ selectedValue: value })}
          style={{ width: '250px' }}
        >
          <div value={null}>None</div>
          {
            options.map(({ name, pic }) => (
              <div value={name}>
                <AvatarWithName src={pic} name={name} />
              </div>
            ))
          }
        </SelectInput>
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
      </div>
    );
  }
}

export default ExampleSimpleWithWidth;
