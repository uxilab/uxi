import React, { Component } from 'react';
import AutoComplete from 'uxi/AutoComplete';
import big from './bigArray';
import small from './small';

const bigList = big.map(x => ({
  ...x,
  postFix: <span>{x.company}</span>
}))

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
        onChange={ (value)=> { this.setState({value}) }}
        items={bigList}
      />
    </div>
    );
  }
}


export default ExampleSimple;
