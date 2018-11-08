import React, { Component } from 'react';
import { SelectInput } from 'uxi/Input'
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import styled from 'styled-components';
import KeyNavigation from './KeyNavigation';
import LookUp from 'uxi/internal/Lookup';

const InputUI = styled.input`
 
`;

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

class SelectPerf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: "",
      options: options,
    }
  }


  render() {
    const { selectedValue } = this.state;

    return (
      <div style={{paddingTop: '300px', height:'100%', minHeight:'200px', paddingLeft:'300px'}}>
      
        <br />
        <div>Selected Value: {this.state.selectedValue} </div>


            {/* <KeyNavigation onChange={(value) => {
              alert(value);
              console.log(value);
            }}>
            {
              options.map(({ name, pic }) => (
                <Flex value={name}>
                  <AvatarWithName src={pic} name={name} />
                </Flex>
              ))
            }
            </KeyNavigation> */}

        <LookUp
          main={<InputUI
            value={this.state.selectedValue}
            onChange={(e) => {
              this.setState({
                selectedValue: e.target.value,
              })
            }}
          />}
        >
          <KeyNavigation onChange={(e) => {
              console.log(e);
              this.setState({
                selectedValue: e.target.value,
              })
            }}>
            {
              options.filter(function (o) {
                return (o.name.toLowerCase().indexOf(selectedValue.toLowerCase()) > -1);
              }).map(({ name, pic }) => (
                <Flex value={name}>
                  <AvatarWithName src={pic} name={name} />
                </Flex>
              ))
            }
            </KeyNavigation>
        </LookUp>
      </div>
    )
  }
}

export default SelectPerf;
