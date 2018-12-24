import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';

import ExampleDatetime from './ExampleDatetime';
import RAWExampleDatetime from '!raw-loader!./ExampleDatetime';

const Page = () => (
  <ul>
    <H1>Datetime</H1>
    <li>
      <CodeExample
        code={RAWExampleDatetime}
        component
        title="Datetime"
        description="-"
      >
        <ExampleDatetime />
      </CodeExample>
    </li>
  </ul>
);

export default Page;
