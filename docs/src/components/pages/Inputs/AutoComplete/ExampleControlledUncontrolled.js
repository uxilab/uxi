import React, { Component } from 'react';
import { AutoComplete } from 'uxi/Input';
import Button from 'uxi/Button';
// import wrapInClientFormHOC from 'uxi/internal/wrapInClientFormHOC';
import medium from './medium-8000-array';
import { TextField } from '../../../../../../src/Input';

// const AutoCompleteClientFormWrapper = wrapInClientFormHOC(AutoComplete);

const bigList = medium.map(x => ({
  ...x,
  postFix: <span>{x.company}</span>,
}));

class ExampleControlledUncontrolled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Mir',
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
          value={value}
          filterOn={'name'}
          onChange={({ value, originalValue }) => {
            console.log('value', value);
            this.setState({ value });
          }}
          items={bigList}
        />
        <br />
        <p>Edit the value from the outside from this textfield:</p>
        <TextField
          placeholder={'Edit value from outside the comp'}
          onChange={(ev, value) => this.setState({ value })}
        />
        <br />
        <Button onClick={() => console.log(medium)} text="log list to console" />
      </div>
    );
  }
}


export default ExampleControlledUncontrolled;
