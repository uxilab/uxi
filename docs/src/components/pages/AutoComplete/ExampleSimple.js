import React, { Component } from 'react';
import AutoComplete from 'uxi/AutoComplete';
import big from './bigArray';
import small from './small';
import medium from './medium-8000-array';

const bigList = medium.map(x => ({
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
      <div style={{ maxWidth: '500px', maring: '0 auto' }}>
        <div style={{ minHeight: '80px' }}>
          <h3>~8000 items array</h3>
          <br />
          {`selected value: "${value}"`}
        </div>
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
