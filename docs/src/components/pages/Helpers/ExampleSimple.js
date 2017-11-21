import React from 'react';
import { PreventExit } from '../../../../../src/Helpers';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3> PreventExit :</h3>
    </li>
    <li>
      <PreventExit message="you'll loose your change, are yout sure ?" />
    </li>
  </ul>
);

export default ExampleSimple;
