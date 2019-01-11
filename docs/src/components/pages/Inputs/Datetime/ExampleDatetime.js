import React from 'react';
import { DateInput, TimeInput } from 'uxi/Input';

const ExampleDatetime = () => (
  <div style={{ padding: '16px' }}>
    <ul>
      <li>
        <h3>DateInput (defaultValue type Date) :</h3>
        <DateInput defaultValue={Date.now() - 10e9} />
      </li>
      <li>
        <h3>DateInput (defaultValue type Date (string)) :</h3>
        <DateInput defaultValue={`${Date.now() - 10e7}`} />
      </li>
      <li>
        <h3>DateInput (defaultValue type string) :</h3>
        <DateInput defaultValue={`${new Date().toISOString()}`} />
      </li>
      <li>
        <h3>DateInput (no default) :</h3>
        <DateInput />
      </li>
      <li>
        <h3>TimeInput (defaultValue type Date) :</h3>
        <TimeInput defaultValue={Date.now() - 10e9} />
      </li>
    </ul>
  </div>
);

export default ExampleDatetime;
