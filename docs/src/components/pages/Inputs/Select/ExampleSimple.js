import React, { Component } from 'react';
import { Select } from 'uxi/Input';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import options from './data';


class ExampleSimple extends Component {
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
          mainScrollingElementSelector=".uxi_ComponentShell_scrolling-element"
        >
          <Flex value={null}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name}>
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

export default ExampleSimple;
