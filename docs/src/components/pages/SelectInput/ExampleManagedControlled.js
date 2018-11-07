import React, { Component } from 'react';
import { SelectInput } from 'uxi/Input';
import { AvatarWithName } from 'uxi/Img';
import Button from 'uxi/Button';

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

class ExampleSimpleControlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 'Ava',
      values: options.map(({ name }) => name),
    };
  }

  render() {
    return (
      <div>
        <SelectInput
          onChange={(event, value) => {
            console.log('constorlled behaviour: manully updating state', value);
            this.setState({ selectedValue: value });
          }}
          value={this.state.selectedValue}
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
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
        <br />
      </div>
    );
  }
}

export default ExampleSimpleControlled;
