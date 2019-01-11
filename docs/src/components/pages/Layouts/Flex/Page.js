import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';
import RAWFlex from '!raw-loader!uxi/Layout/Flex';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleFlex from './ExampleFlex';
import RAWExampleFlex from '!raw-loader!./ExampleFlex';


const FlexPage = () => (
  <div>
    <H1>Layouts </H1>
    <CodeExample
      code={RAWFlex}
      component
      title="Flex"
      description={componentInfoToMD(RAWFlex)}
      hasPadding
    />

    <CodeExample
      code={RAWExampleFlex}
      component
      title="Flex"
      hasPadding
    >
      <ExampleFlex />
    </CodeExample>
  </div>
);

export default FlexPage;
