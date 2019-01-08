// SelectWithFiltering

import React, { Component } from 'react';
import { SelectWithFiltering } from 'uxi/Input';
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
        <SelectWithFiltering
          onChange={(event, value) => this.setState({ selectedValue: value })}
          mainScrollingElementSelector=".uxi_ComponentShell_scrolling-element"
        >
          <Flex value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name}>
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
      </div>
    );
  }
}

export default ExampleSimple;
