import React, { Component } from 'react';
import DropDown from 'uxi/internal/DropDown';
import { AvatarWithName } from 'uxi/Img';
import { Flex } from 'uxi/Layout';
import Button from 'uxi/Button';

const items = [
  {
    name: 'Ava',
    pic: 'https://randomuser.me/api/portraits/women/82.jpg',
  }, {
    name: 'Regina',
    pic: 'https://randomuser.me/api/portraits/women/37.jpg',
  }, {
    name: 'rem',
    pic: 'https://randomuser.me/api/portraits/men/3.jpg',
  }, {
    name: 'Britany',
    pic: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
];

const test = Array.from(Array(1).keys());

class ControlledDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <div >
        <DropDown
          isOpen={this.state.isOpen}
          items={items.map(({ name, pic }) => (
            <div value={name}>
              <AvatarWithName src={pic} name={name} />
            </div>
          ))}
          main={<div>Select</div>}
        />
         <Button
            text="open"
            onClick={() => this.setState({ isOpen: true })}
            style={{ margin: '0 8px' }}
          />
          <Button
            text="close"
            onClick={() => this.setState({ isOpen: false })}
            style={{ margin: '0 8px' }}
          />
      </div>
    )
  }
}
class DropdownPerf extends Component {
  render() {
    return (
      <Flex style={{marginTop: '500px', flexDirection:'column', height:'2000px'}}>
        <h1>@@@@@!!!!T!</h1>
      
        <ControlledDropdown />
              {
                test.map((e, i) => {
                  return (
                    <div>
                      {i}
                        <DropDown
                        
                        items={items.map(({ name, pic }) => (
                          <div value={name}>
                            <AvatarWithName src={pic} name={name} />
                          </div>
                        ))}
                        main={<div>Select</div>}
                    />
                    </div>
                  );
                })
              }
      </Flex>
    );
  }
}

export default DropdownPerf;
