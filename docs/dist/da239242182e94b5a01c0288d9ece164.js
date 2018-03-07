import React from 'react';
import { RadioGroup, Radio } from 'uxi/Input';

const ExampleSimpleRadioGroup = () => (
  <div>
    <RadioGroup
      name="isPayingCustomer"
      onChange={(event, val) => {  }}
    >
      <Radio value="true" label="Yes" />
      <br />
      <Radio value="false" label="No" />
    </RadioGroup>
  </div>
);

export default ExampleSimpleRadioGroup;
