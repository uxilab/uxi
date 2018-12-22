import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';

import ExampleContentWithExtra from './ExampleContentWithExtra';
import RAWExampleContentWithExtra from '!raw-loader!./ExampleContentWithExtra';

import ExampleSimpleGrid from './ExampleSimpleGrid';
import RAWExampleSimpleGrid from '!raw-loader!./ExampleSimpleGrid';

import ExampleGrid from './ExampleGrid';
import RAWExampleGrid from '!raw-loader!./ExampleGrid';

const Layouts = () => (
  <div>
    <br />

   {/*  <CodeExample
      code={RAWExampleGrid}
      component
      title="Grid"
      hasPadding
    >
      <ExampleGrid />
    </CodeExample> */}

    <br />
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

    <br />

    <CodeExample
      code={RAWExampleSimpleGrid}
      component
      title="SimpleGrid"
      hasPadding
    >
      <ExampleSimpleGrid />
    </CodeExample>
  </div>
);

export default Layouts;
