import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';

import ExampleAppLayout from './ExampleAppLayout';
import RAWExampleAppLayout from '!raw-loader!./ExampleAppLayout';

import ExampleContentWithExtra from './ExampleContentWithExtra';
import RAWExampleContentWithExtra from '!raw-loader!./ExampleContentWithExtra';

import ExampleSimpleGrid from './ExampleSimpleGrid';
import RAWExampleSimpleGrid from '!raw-loader!./ExampleSimpleGrid';

import ExampleGrid from './ExampleGrid';
import RAWExampleGrid from '!raw-loader!./ExampleGrid';

const Layouts = () => (
  <div>
    <H1>Layouts </H1>
    <CodeExample
      code={RAWExampleContentWithExtra}
      component
      title="ContentWithExtra"
      hasPadding
    >
      <ExampleContentWithExtra />
    </CodeExample>

    <br />

    <CodeExample
      code={RAWExampleAppLayout}
      component
      title="AppLayout"
      hasPadding
    >
      <ExampleAppLayout />
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
