import React from 'react';
import { Button, FlatButton } from '../../../../../src/Button';
import { Merge } from '../../../../../src/Icons';

const ExampleSimple = () => (
  <ul>
    <li>
      <FlatButton text="Test" />
    </li>
    <li>
      <FlatButton type="primary" text="Test" />
    </li>
  </ul>
);

export default ExampleSimple;
