import React from 'react';
import Img from 'uxi/Img';

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
      <Img style={{ width: '48px', height: '48px' }} alt={'title'} src={'https://react.semantic-ui.com/logo.png'} />
    </li>
    <li>
      <Img size="64" alt={'title'} src={'https://react.semantic-ui.com/logo.png'} />
    </li>
  </ul>
);

export default ExampleSimple;
