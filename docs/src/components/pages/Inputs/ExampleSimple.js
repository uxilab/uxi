import React from 'react';
import { TextField } from '../../../../../src/Input';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>Email :</h3>
      <TextField type="email" />
    </li>
    <li>
      <h3>Email :</h3>
      <TextField type="file" />
    </li>
  </ul>
);

export default ExampleSimple;
