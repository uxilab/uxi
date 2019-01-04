import React, { Component } from 'react';
import { Select } from 'uxi/Input';
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
      selectedValue1: null,
    };
  }

  render() {
    return (
      <div>
        <Select
          onChange={(event, value) => this.setState({ selectedValue: value })}
          isFullWidth
        >
          <div value={null}>None</div>
          {
            options.map(({ name, pic }) => (
              <div value={name}>
                <AvatarWithName src={pic} name={name} />
              </div>
            ))
          }
        </Select>
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
        <br /><br /><br /><br />
        <div style={{ maxWidth: '80%' }}>
          <Select
            onChange={(event, value) => this.setState({ selectedValue1: value })}
            isFullWidth
          >
            <div value={null}>None</div>
            {
              options.map(({ name, pic }) => (
                <div value={name}>
                  <AvatarWithName src={pic} name={name} />
                </div>
              ))
            }
          </Select>
        </div>
        <br />
        <div>Selected Value: {this.state.selectedValue1} </div>
      </div>
    );
  }
}

export default ExampleSimpleWithWidth;
