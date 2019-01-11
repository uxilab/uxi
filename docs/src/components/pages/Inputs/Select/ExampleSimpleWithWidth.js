import React, { Component } from 'react';
import { Select } from 'uxi/Input';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import options from './data';


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
        <Select
          onChange={(event, value) => this.setState({ selectedValue: value })}
          style={{ width: '250px' }}
        >
          <Flex value={null}>None</Flex>
          {
            options.map(({ name, pic }, i) => (
              <div value={name} key={`${name}-${i}`}>
                <AvatarWithName src={pic} name={name} />
              </div>
            ))
          }
        </Select>
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
      </div>
    );
  }
}

export default ExampleSimpleWithWidth;
