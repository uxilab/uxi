import React from 'react';
import { Checkbox } from '../../../../../src/Input';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>Checkbox :</h3>
      <Checkbox />
    </li>
    <li>
      <h3>Checkbox disabled</h3>
      <Checkbox disabled />
    </li>
  </ul>
);

export default ExampleSimple;
