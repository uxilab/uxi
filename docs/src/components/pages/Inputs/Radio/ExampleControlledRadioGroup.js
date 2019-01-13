import React, { Component } from 'react';
import { RadioGroup, Radio } from 'uxi/Input';
import Button from 'uxi/Button';

class ExampleControlledRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ value: !(this.state.value) });
  }
  render() {
    const { value } = this.state;
    return (
      <div style={{ padding: '16px' }}>
        <RadioGroup value={value.toString()} name="my-radio-group">
          <Radio value="true" label="Yes" />
          <Radio value="false" label="No" />
        </RadioGroup>
        <Button onClick={this.handleChange} >Toggle</Button>
      </div>
    );
  }
}

export default ExampleControlledRadioGroup;
