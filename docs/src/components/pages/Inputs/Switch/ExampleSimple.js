import React from 'react';
import { Checkbox } from 'uxi/Input';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>Checkbox :</h3>
      <Checkbox />
    </li>
    <li>
      <h3>Checkbox checked :</h3>
      <Checkbox checked />
    </li>
    <li>
      <h3>Checkbox disabled</h3>
      <Checkbox disabled />
    </li>
    <li>
      <h3>Checkbox disabled nd checked</h3>
      <Checkbox checked disabled />
    </li>
  </ul>
);

export default ExampleSimple;
