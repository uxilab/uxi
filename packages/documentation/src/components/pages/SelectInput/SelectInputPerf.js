import React, { Component } from 'react';
import { SelectInput } from 'uxi/Input'
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import styled from 'styled-components';
import AutoComplete from './AutoComplete';
import MainSearch from './MainSearch';

const createOnTheFlyValue = (value) => {
  if(!value) {
    return [];
  }

  if(value.length < 3) {
    return [];
  }

  return [
    { 
      Name: `${value} - a`,
      label: 'All'
    },
    {
      Name: `${value} - b`,
      label: 'Org'
    },
    {
      Name: `${value} - c`,
      label: 'Person'
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
          Name: 'Ava',
          label: 'all'
        }, {
          Name: 'Regina',
          label: 'all'
        }, {
          Name: 'Rem',
          label: 'all'
        }, {
          Name: 'Britany',
          label: 'all'
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
        <div style={{background: 'red'}}>

          <MainSearch
            onClick={() => {}}
            onEntityPoolChange={() => {}}
            onSuggestionChange={(e, value) => {
              this.setState({
                selectedValue: value,
              })
            }}
            suggestions={optionsToUse.filter(function (o) {
              if(selectedValue.length < 3) {
                return false;
              }
              return (o.Name.toLowerCase().indexOf(selectedValue.toLowerCase()) > -1);
            })}
          />


        </div>
          
         {/* <AutoComplete
            isFullWidth
            style={{ background: 'red'}}
            onChange={(e, value) => {
              this.setState({
                selectedValue: value,
              })
            }}
          >
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
        </AutoComplete> */}

      </div>
    )
  }
}

export default SelectPerf;
