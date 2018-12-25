import React from 'react';
import { P } from 'uxi/Classic';
import RAWDialog from '!raw-loader!uxi/Dialog/Dialog';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';
import { componentInfoToMD } from '../../componentInfoToMD';


import DialogExample from './DialogExample';
import RAWDialogExample from '!raw-loader!./DialogExample';
import RAWMDDialogExample from '!raw-loader!./DialogExample.md';

import DialogFWExample from './DialogFWExample';
import RAWDialogFWExample from '!raw-loader!./DialogFWExample';
import RAWMDDialogFWExample from '!raw-loader!./DialogFWExample.md';

import DialogFSExample from './DialogFSExample';
import RAWDialogFSExample from '!raw-loader!./DialogFSExample';
import RAWMDDialogFSExample from '!raw-loader!./DialogFSExample.md';

import DialogPanelExample from './DialogPanelExample';
import RAWDialogPanelExample from '!raw-loader!./DialogPanelExample';
import RAWMDDialogPanelExample from '!raw-loader!./DialogPanelExample.md';

import DialogPanelFSExample from './DialogPanelFSExample';
import RAWDialogPanelFSExample from '!raw-loader!./DialogPanelFSExample';
import RAWMDDialogPanelFSExample from '!raw-loader!./DialogPanelFSExample.md';

import DialogPanelOverflowExample from './DialogPanelOverflowExample';
import RAWDialogPanelOverflowExample from '!raw-loader!./DialogPanelOverflowExample';
import RAWMDDialogPanelOverflowExample from '!raw-loader!./DialogPanelOverflowExample.md';


const DialogPage = () => (
  <div>
    <Title text="Dialog" />
    <ul>
      <li>
         <CodeExample
          code={RAWDialog}
          component
          title="Dialog"
          description={componentInfoToMD(RAWDialog)}
          hasPadding
         />
       </li>
      <li><Title text="Dialog examples" /></li>
      <li>
        <CodeExample
          code={RAWDialogExample}
          component
          title="Dialog Example"
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
          title="Dialog example full width"
          description={RAWMDDialogFWExample}
          hasPadding
        >
          <DialogFWExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWDialogFSExample}
          component
          title="Dialog example full screen"
          description={RAWMDDialogFSExample}
          hasPadding
        >
          <DialogFSExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWDialogPanelExample}
          component
          title="Dialog example with Panel"
          description={RAWMDDialogPanelExample}
          hasPadding
        >
          <DialogPanelExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWDialogPanelFSExample}
          component
          title="Fullscreen Dialog with Panel and Table example"
          description={RAWMDDialogPanelFSExample}
          hasPadding
        >
          <DialogPanelFSExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWDialogPanelOverflowExample}
          component
          title="Fullscreen Dialog with Panel and AutoComplete overflowing example"
          description={RAWMDDialogPanelOverflowExample}
          hasPadding
        >
          <DialogPanelOverflowExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default DialogPage;
