import React from 'react';
import { Loader, MiniLoader } from '../../../../../src/Motion';

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
  </ul>
);

export default ExampleSimple;
