import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import DialogExample from './DialogExample';
import RAWDialogExample from '!raw-loader!./DialogExample';
import RAWMDDialogExample from '!raw-loader!./DialogExample.md';

import DialogFWExample from './DialogFWExample';
import RAWDialogFWExample from '!raw-loader!./DialogFWExample';
import RAWMDDialogFWExample from '!raw-loader!./DialogFWExample.md';

const DialogPage = () => (
  <div>
  <Title text="Panel" />
    <ul>
      <li>
        <CodeExample
          code={RAWDialogExample}
          component
          title="Dialog"
          description={RAWMDDialogExample}
          hasPadding
        >
          <DialogExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWDialogFWExample}
          component
          title="Dialog full width"
          description={RAWMDDialogFWExample}
          hasPadding
        >
          <DialogFWExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default DialogPage;
