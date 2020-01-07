import React, { Component } from 'react';
import { Select } from 'uxi/Input';
import SelectM from 'uxi/Input/Select/SelectM';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import options from './data';


class ExampleSimpleWithWidth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      selectedValues: [],
    };
  }

  render() {
    return (
      <div>
        <div>
          <SelectM
            style={{ width: '300px' }}
            onChange={(event, value) => {
              console.log('event, value', event, value);
              this.setState({ selectedValues: value });
            }}
            multiple
          >
            <Flex key="none" value={null}>None</Flex>
            {
              options.map(({ name, pic }, i) => (
                <Flex value={name} key={i}>
                  <AvatarWithName src={pic} name={name} />
                </Flex>
              ))
            }
          </SelectM>
          <br />
          <div>Selected Values: {this.state.selectedValues.join(', ')} </div>
        </div>
        <br />
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
      </div>
    );
  }
}

export default ExampleSimpleWithWidth;
