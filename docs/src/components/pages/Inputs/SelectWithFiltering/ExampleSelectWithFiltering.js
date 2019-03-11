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
      selectedValue1: null,
      selectedValue2: null,
      selectedValue3: null,
      selectedValue4: 'rem',
      selectedValue5: 'Ava',
    };
  }

  render() {
    return (
      <div>
        <p>
          You will want the use the isFullWidth and wrap it yourself, otherwise some border issue might appear.
        </p>
        <SelectWithFiltering
          onChange={(event, value) => this.setState({ selectedValue: value })}
        >
          <Flex key="none" value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name} key={name} >
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>
        <br />
        <br />
        <br />
        <div style={{ width: '80%' }} >
          <SelectWithFiltering
            isFullWidth
            placeholder={'search people'}
            onChange={(event, value) => this.setState({ selectedValue1: value })}
          >
            <Flex key="none" value={'none'}>None</Flex>
            {
              options.map(({ name, pic }) => (
                <Flex value={name} key={name} >
                  <AvatarWithName src={pic} name={name} />
                </Flex>
              ))
            }
          </SelectWithFiltering>
        </div>
        <br />
        <div>Selected Value: {this.state.selectedValue1} </div>
        <br />
        <br />
        <br />
        <SelectWithFiltering
          style={{ width: '268px' }}
          placeholder={'search people'}
          onChange={(event, value) => this.setState({ selectedValue2: value })}
        >
          <Flex key="none" value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name} key={name} >
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <br />
        <br />
        <br />
        if fixed width, at least 280px of width to be safe:
        <br />
        <SelectWithFiltering
          style={{ width: '280px' }}
          placeholder={'search people'}
          onChange={(event, value) => this.setState({ selectedValue3: value })}
        >
          <Flex key="none" value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name} key={name} >
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <div>Selected Value: {this.state.selectedValue3} </div>

        <br />
        <br />
        <br />
        <br />
        controlled (unmanaged)
        <br />
        <SelectWithFiltering
          value={'rem'}
          isFullWidth
          placeholder={'search people'}
          onChange={(event, value) => {
            console.log('onChange', event, value);
            // this.setState({ selectedValue4: value })
          }}
        >
          <Flex key="none" value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name} key={name} >
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <br />
        <br />
        <br />
        <br />
        controlled (managed)
        <br />
        <SelectWithFiltering
          value={this.state.selectedValue4}
          isFullWidth
          placeholder={'search people'}
          onChange={(event, value) => {
            console.log('onChange', event, value);
            this.setState({ selectedValue4: value });
          }}
        >
          <Flex key="none" value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name} key={name} >
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <div>Selected Value: {this.state.selectedValue4} </div>
        <br />
        <br />
        <br />
        <br />
        default Value
        <br />
        <SelectWithFiltering
          isFullWidth
          defaultValue={this.state.selectedValue5}
          placeholder={'search people'}
          onChange={(event, value) => this.setState({ selectedValue5: value })}
        >
          <Flex key="none" value={'none'}>None</Flex>
          {
            options.map(({ name, pic }) => (
              <Flex value={name} key={name} >
                <AvatarWithName src={pic} name={name} />
              </Flex>
            ))
          }
        </SelectWithFiltering>
        <br />
        <div>Selected Value: {this.state.selectedValue5} </div>
      </div>
    );
  }
}

export default ExampleSimple;
