import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!file-loader!isomorphic-loader!./ExampleSimple.js'

const ButtonPage = () => (
  <ul>
    <li>
      <CodeExample code={RAWExampleSimple} component description="dialog">
        <ExampleSimple />
      </CodeExample>
    </li>
  </ul>
);

export default ButtonPage;
