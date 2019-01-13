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
          style={{ width: '300px' }}
          onChange={(event, value) => this.setState({ selectedValue: value })}
        >
          <Flex key="none" value={null}>None</Flex>
          {
            options.map(({ name, pic }, i) => (
              <Flex value={name} key={i}>
                <AvatarWithName src={pic} name={name} />
              </Flex>
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
