import React, { Component } from 'react';
import { AutoComplete } from 'uxi/Input';
import Button from 'uxi/Button';
import medium from './medium-8000-array';


const bigList = medium.map(x => ({
  ...x,
  postFix: x.company,
}));

class ExampleMediumList extends Component {
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
          items={bigList}
        />
        <Button onClick={() => console.log(medium)} text="log list to console" />
      </div>
    );
  }
}


export default ExampleMediumList;
