import React, { Component } from 'react';
import BETAAutoComplete from 'uxi/Input/BETAAutoComplete';
import Button from 'uxi/Button';

const DecoratedInput = props => (
  <div>
    {props.test}
    <input type="test" {...props} />
  </div>
);

class ExampleBigList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      values: [
        {
          name: 'Volvo',
        },
        {
          name: 'Audi',
        },
        {
          name: 'BMW',
        },
        {
          name: 'FORD',
        },
        {
          name: 'Tesla',
        },
      ],
    };
  }

  render() {
    const { values, selectedValue } = this.state;

    return (
      <div>
        <span>current value: {selectedValue}</span>
        <BETAAutoComplete
          value={selectedValue}
          onChange={(e, value) => {
            this.setState({ selectedValue: value });
          }}
        >
          {
            values.map(car => (
              <div value={car.name}>{car.name}</div>
            ))
          }
        </BETAAutoComplete>

        <br />
        <br />
        <BETAAutoComplete
          Input={DecoratedInput}
          test="test"
          value={selectedValue}
          onChange={(e, value) => {
            this.setState({ selectedValue: value });
          }}
        >
          {
            values.map(car => (
              <div value={car.name}>{car.name}</div>
            ))
          }
        </BETAAutoComplete>
      </div>
    );
  }
}


export default ExampleBigList;
