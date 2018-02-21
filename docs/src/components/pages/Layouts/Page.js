import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';

import ExampleContentWithExtra from './ExampleContentWithExtra';
import RAWExampleContentWithExtra from '!raw-loader!./ExampleContentWithExtra';

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
