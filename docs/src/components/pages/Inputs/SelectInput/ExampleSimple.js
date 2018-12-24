import React, { Component } from 'react';
import { SelectInput } from 'uxi/Input'
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';

const options = [
  {
    name: 'Ava',
    pic: 'https://randomuser.me/api/portraits/women/82.jpg',
  }, {
    name: 'Regina',
    pic: 'https://randomuser.me/api/portraits/women/37.jpg'
  }, {
    name: 'rem',
    pic: 'https://randomuser.me/api/portraits/men/3.jpg'
  }, {
    name: 'Britany',
    pic: 'https://randomuser.me/api/portraits/women/76.jpg'
  }
]

class ExampleSimple extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: null,
    }
  }

  render() {
    return (
      <div>
        <SelectInput
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
        </SelectInput>
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
      </div>
    )
  }
}

export default ExampleSimple;
