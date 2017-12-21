import React from 'react';
import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';
import ExampleSimple from './ExampleSimple';
import CodeExample from '../../CodeExample';
// import Playground from 'component-playground';
// import Code from './Code';
// import RAWCode from '!raw-loader!./Code.js';

const ButtonPage = () => (
  <div style={{ maxWidth: '600px' }}>
    <CodeExample code={RAWExampleSimpleFlat} component description="Buttons">
      <ExampleSimpleFlat />
    </CodeExample>
    <ExampleSimple />
  </div>
);

export default ButtonPage;
