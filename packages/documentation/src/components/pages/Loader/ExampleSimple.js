import React from 'react';
import { Loader, MiniLoader } from '../../../../../src/Motion';
import { Button } from '../../../../../src/Button';

const ExampleSimple = () => (
  <ul>
    <li>
      <Loader />
    </li>
    <li>
      <MiniLoader />
    </li>
    <li>
      <MiniLoader size={24} />
    </li>
    <li>
      <MiniLoader size={88} />
    </li>
    <li>
      <MiniLoader size={140} />
    </li>
    <li>
      <h3>MiniLoader with button</h3>
    </li>
    <li>
      <MiniLoader /> <Button> YO </Button>
    </li>
  </ul>
);

export default ExampleSimple;
