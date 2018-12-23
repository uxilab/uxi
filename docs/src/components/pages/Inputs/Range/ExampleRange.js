import React from 'react';
import { RangeInput } from 'uxi/Input';

const ExampleRange = () => (
  <div style={{ padding: '16px' }}>
    <ul>
      <li>
        <h3>RangeInput</h3>
        <RangeInput defaultValue={12} min={0} max={20} onChange={(e, val) => console.log(val)} />
        <br />
        <RangeInput defaultValue={50} onChange={(e, val) => console.log(val)} />
      </li>
    </ul>
  </div>
);

export default ExampleRange;
