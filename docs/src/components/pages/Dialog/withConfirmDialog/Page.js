import React from 'react';
import { P, H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';

import Example from './Example';
import RAWExample from '!raw-loader!./Example';
import RAWMDExample from '!raw-loader!./Example.md';


import ExampleButtonWithConfirm from './ExampleButtonWithConfirm';
import RAWExampleButtonWithConfirm from '!raw-loader!./ExampleButtonWithConfirm';
import RAWMDExampleButtonWithConfirm from '!raw-loader!./ExampleButtonWithConfirm.md';


const WithConfirmDialogPage = () => (
  <div>
    <H1>withConfirmDialog</H1>
    <ul>
      <li>
        <CodeExample
          code={RAWExample}
          component
          title="withConfirmDialog HOC"
          description={RAWMDExample}
          hasPadding
        >
          <Example />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleButtonWithConfirm}
          component
          title="ButtonWithConfirm"
          description={RAWMDExampleButtonWithConfirm}
          hasPadding
        >
          <ExampleButtonWithConfirm />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default WithConfirmDialogPage;