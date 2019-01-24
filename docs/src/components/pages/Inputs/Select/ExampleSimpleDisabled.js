import React, { Component } from 'react';
import { Select } from 'uxi/Input';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import { Button } from 'uxi/Button';
import options from './data';


class ExampleSimple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null,
      disabled: false,
    };
  }

  render() {
    return (
      <div>
        <Select
          disabled={this.state.disabled}
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
        <br />
        <Button
          text={this.state.disabled
            ? 'enable'
            : 'disable'
          }
          onClick={() => { this.setState({ disabled: !this.state.disabled }); }}
        />
      </div>
    );
  }
}

export default ExampleSimple;
