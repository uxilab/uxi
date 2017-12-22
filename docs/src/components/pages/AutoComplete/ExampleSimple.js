import React, { Component } from 'react';
import AutoComplete from 'uxi/AutoComplete';

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
        onChange={
          (value)=> {
            this.setState({value});
          }}
        items={[{name:'tetet'}, {name:'oekfoekfeokf'}]}
      />
    </div>
    );
  }
}


export default ExampleSimple;
