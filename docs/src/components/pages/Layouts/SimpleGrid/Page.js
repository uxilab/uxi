import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';
import RAWSimpleGrid from '!raw-loader!uxi/Layout/SimpleGrid';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleSimpleGrid from './ExampleSimpleGrid';
import RAWExampleSimpleGrid from '!raw-loader!./ExampleSimpleGrid';


const Layouts = () => (
  <div>
    <H1>Layouts </H1>
    <CodeExample
      code={RAWSimpleGrid}
      component
      title="SimpleGrid"
      hasPadding
    >
    </CodeExample>


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
