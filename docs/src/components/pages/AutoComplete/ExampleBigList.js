import React, { Component } from 'react';
import AutoComplete from 'uxi/AutoComplete';
import Button from 'uxi/Button';
//import big from './bigArray';
/*
const bigList = big.map(x => ({
  ...x,
  postFix: <span>{x.company}</span>
}))*/

class ExampleBigList extends Component {
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
          <br />
          {`selected value: "${value}"`}
        </div>
        <AutoComplete
          filterOn={'name'}
          onChange={({ value, originalValue }) => {
            console.log('originalValue', originalValue);
            this.setState({ value });
          }}
          items={[]}
        />
        <Button onClick={() => console.log([])} text="log list to console"/>
      </div>
    );
  }
}


export default ExampleBigList;
