import React from 'react';
import RAWwithConfirmDialog from '!raw-loader!uxi/Dialog/withConfirmDialog';
import { P, H1, H3 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';
import { componentInfoToMD } from '../../../componentInfoToMD';

import Example from './Example';
import RAWExample from '!raw-loader!./Example';
import RAWMDExample from '!raw-loader!./Example.md';


import ExampleButtonWithConfirm from './ExampleButtonWithConfirm';
import RAWExampleButtonWithConfirm from '!raw-loader!./ExampleButtonWithConfirm';
import RAWMDExampleButtonWithConfirm from '!raw-loader!./ExampleButtonWithConfirm.md';


import ExampleCheckboxWithConfirm from './ExampleCheckboxWithConfirm';
import RAWExampleCheckboxWithConfirm from '!raw-loader!./ExampleCheckboxWithConfirm';
import RAWMDExampleCheckboxWithConfirm from '!raw-loader!./ExampleCheckboxWithConfirm.md';


const WithConfirmDialogPage = () => (
  <div>
    <H1>withConfirmDialog</H1>
    <ul>
      <li>
        <CodeExample
          code={RAWwithConfirmDialog}
          component
          title="withConfirmDialog"
          description={componentInfoToMD(RAWwithConfirmDialog)}
          hasPadding
        />
      </li>
    </ul>
    <H3>withConfirmDialog example</H3>
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
      <li>
        <CodeExample
          code={RAWExampleCheckboxWithConfirm}
          component
          title="ButtonWithConfirm"
          description={RAWMDExampleCheckboxWithConfirm}
          hasPadding
        >
          <ExampleCheckboxWithConfirm />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default WithConfirmDialogPage;
