import React, { Component } from 'react';
import { Select } from 'uxi/Input';
import { AvatarWithName } from 'uxi/Img';
import Button from 'uxi/Button';
import options from './data';


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
        <Select
          onChange={(event, value) => {
            console.log('contorled behaviour ignoring change', value);
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
        </Select>
        <br />
        <Button
          text="Set to 'Ava'"
          onClick={() => this.setState({ selectedValue: 'Ava' })}
          style={{ margin: '0 8px' }}
        />
        <Button
          text="Set to 'Regina'"
          onClick={() => this.setState({ selectedValue: 'Regina' })}
          style={{ margin: '0 8px' }}
        />
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
        <br />
      </div>
    );
  }
}

export default ExampleSimpleControlled;
