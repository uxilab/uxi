import React, { Component } from 'react';
import { SelectInput } from 'uxi/Input'
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import styled from 'styled-components';
import ListWithNavigation from './ListWithNavigation';
import LookUp from 'uxi/internal/Lookup';

const InputUI = styled.input`
 
`;

const createOnTheFlyValue = (value) => {
  if(!value) {
    return [];
  }

  if(value.length < 3) {
    return [];
  }

  return [
    { 
      name: `${value} - a`,
      pic: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
    {
      name: `${value} - b`,
      pic: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
    {
      name: `${value} - c`,
      pic: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
  ];
}

class SelectPerf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: "",
      options: [
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
      ],
    }
  }


  render() {
    const { selectedValue, options } = this.state;
    const optionsToUse = createOnTheFlyValue(selectedValue).concat(options);

    return (
      <div style={{paddingTop: '300px', width: '500px', height:'100%', minHeight:'200px', paddingLeft:'300px'}}>

        <div>Selected Value: {this.state.selectedValue} </div>

       <LookUp
          isFullWidth
          main={
            <InputUI
              style={{width: '100%'}}
              value={this.state.selectedValue}
              onChange={(e) => {
                this.setState({
                  selectedValue: e.target.value,
                })
              }}
            />
          }
        >
          <ListWithNavigation onChange={(e, value) => {
              this.setState({
                selectedValue: value,
              })
            }}>
            {
              optionsToUse.filter(function (o) {
                if(selectedValue.length < 3) {
                  return false;
                }
                return (o.name.toLowerCase().indexOf(selectedValue.toLowerCase()) > -1);
              }).map(({ name, pic }) => (
                <Flex value={name}>
                  <AvatarWithName src={pic} name={name} />
                </Flex>
              ))
            }
            </ListWithNavigation>
        </LookUp>
      </div>
    )
  }
}

export default SelectPerf;
