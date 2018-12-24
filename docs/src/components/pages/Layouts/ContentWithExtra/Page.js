import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';
import RAWContentWithExtra from '!raw-loader!uxi/Layout/ContentWithExtra';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleContentWithExtra from './ExampleContentWithExtra';
import RAWExampleContentWithExtra from '!raw-loader!./ExampleContentWithExtra';


const Layouts = () => (
  <div>
    <H1>ContentWithExtra </H1>
      <CodeExample
        code={RAWContentWithExtra}
        component
        title="ContentWithExtra"
        description={componentInfoToMD(RAWContentWithExtra)}
        hasPadding
      />

      <br />

      <CodeExample
      code={RAWExampleContentWithExtra}
      component
      title="ContentWithExtra"
      hasPadding
    >
      <ExampleContentWithExtra />
    </CodeExample>
  </div>
);

export default Layouts;
