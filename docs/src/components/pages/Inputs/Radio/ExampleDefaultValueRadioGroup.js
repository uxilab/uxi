import React from 'react';
import { RadioGroup, Radio } from 'uxi/Input';

const ExampleDefaultValueRadioGroup = () => (
  <div style={{ padding: '16px' }}>
    <RadioGroup
      defaultValue="true"
      name="isPayingCustomer"
      onChange={(event, val) => { }}
    >
      <Radio value="true" label="Yes" />
      <br />
      <Radio value="false" label="No" />
    </RadioGroup>
  </div>
);

export default ExampleDefaultValueRadioGroup;
