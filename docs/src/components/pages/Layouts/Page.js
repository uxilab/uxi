import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!file-loader!isomorphic-loader!./ExampleSimple.js'

import ExampleContentWithExtra from './ExampleContentWithExtra';
import RAWExampleContentWithExtra from '!file-loader!isomorphic-loader!./ExampleContentWithExtra.js'

const Layouts = () => (
  <div>
    <CodeExample
      code={RAWExampleContentWithExtra}
      component
      title="Layout"
      hasPadding
    >
      <ExampleContentWithExtra />
    </CodeExample>
    <br />
    <CodeExample
      code={RAWExampleSimple}
      component
      title="Layout"
      hasPadding
    >
      <ExampleSimple />
    </CodeExample>
  </div>
);

export default Layouts;
