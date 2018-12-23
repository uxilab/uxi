import React from 'react';
import { H1 } from 'uxi/classic';
import CodeExample from '../../../CodeExample';

import ExampleTextField from './ExampleTextField';
import RAWExampleTextField from '!raw-loader!./ExampleTextField';

const TextFieldPage = () => (
  <ul>
    <H1>TextField</H1>
    <li>
      <CodeExample
        code={RAWExampleTextField}
        component
        title="TextField"
        description="TextField can take a `type` (email, url - defaults to text)"
      >
        <ExampleTextField />
      </CodeExample>
    </li>
  </ul>
);

export default TextFieldPage;
