import React, { Component } from 'react';
import AutoComplete from 'uxi/AutoComplete';
import big from './bigArray.json';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div>
      {value}
      <AutoComplete
        filterOn={'name'}
        onChange={
          (value)=> {
            this.setState({value});
          }}
        items={big}
      />
    </div>
    );
  }
}


export default ExampleSimple;
