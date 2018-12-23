import React from 'react';
import { H1 } from 'uxi/classic';
import CodeExample from '../../../CodeExample';

import ExampleRange from './ExampleRange';
import RAWExampleRange from '!raw-loader!./ExampleRange';

const Page = () => (
  <ul>
    <H1>Range</H1>
    <li>
      <CodeExample
        code={RAWExampleRange}
        component
        title="Range"
        description="-"
      >
        <ExampleRange />
      </CodeExample>
    </li>
  </ul>
);

export default Page;
