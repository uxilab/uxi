import React from 'react';
import Img from '../../../../../src/Img';
import js240 from './240js.png'

const ExampleSimple = () => (
  <ul>
    <li>
      <Img style={{ width: '200px' }} src="https://luna1.co/232620.png" />
    </li>
    <li>
      <Img style={{ width: '200px' }} src="https://tettra.co/wp-content/logos/asana.png" />
    </li>
    <li>
      <Img contain style={{ width: '160px' }} src="https://tettra.co/wp-content/logos/asana.png" />
    </li>
    <li>
      <Img contain style={{ width: '160px' }} src={js240} />
    </li>
  </ul>
);

export default ExampleSimple;
