import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';
import RAWAppLayout from '!raw-loader!uxi/Layout/AppLayout';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleAppLayout from './ExampleAppLayout';
import RAWExampleAppLayout from '!raw-loader!./ExampleAppLayout';


const Layouts = () => (
  <div>
    <H1>App Layouts </H1>
    <CodeExample
      code={RAWAppLayout}
      component
      title="AppLayout"
      description={componentInfoToMD(RAWAppLayout)}
      hasPadding
    />

    <br />

    <CodeExample
      code={RAWExampleAppLayout}
      component
      title="AppLayout"
      hasPadding
    >
      <ExampleAppLayout />
    </CodeExample>
  </div>
);

export default Layouts;
