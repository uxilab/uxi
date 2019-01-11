import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';
import RAWDrawer from '!raw-loader!uxi/Drawer/Drawer';
import { componentInfoToMD } from '../../componentInfoToMD';

import Example from './Example';
import RAWExample from '!raw-loader!./Example';
import RAWMDExample from '!raw-loader!./Example.md';

import ExampleWithPanel from './ExampleWithPanel';
import RAWExampleWithPanel from '!raw-loader!./ExampleWithPanel';
import RAWMDExampleWithPanel from '!raw-loader!./ExampleWithPanel.md';

import ExampleWithPanelAndOffset from './ExampleWithPanelAndOffset';
import RAWExampleWithPanelAndOffset from '!raw-loader!./ExampleWithPanelAndOffset';
import RAWMDExampleWithPanelAndOffset from '!raw-loader!./ExampleWithPanelAndOffset.md';

import ExampleWithAlert from './ExampleWithAlert';
import RAWExampleWithAlert from '!raw-loader!./ExampleWithAlert';
import RAWMDExampleWithAlert from '!raw-loader!./ExampleWithAlert.md';

const Page = () => (
  <div>
    <ul>
      <li>
        <H1>Drawer</H1>
        <CodeExample
          code={RAWDrawer}
          component
          title="Drawer"
          description={componentInfoToMD(RAWDrawer)}
        />
      </li>
      <li>
        <H1>Drawer example</H1>
        <CodeExample
          code={RAWExample}
          component
          title="Drawer"
          description={RAWMDExample}
        >
          <Example />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleWithPanel}
          component
          title="Drawer with Panel"
          description={RAWMDExampleWithPanel}
        >
          <ExampleWithPanel />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleWithPanelAndOffset}
          component
          title="Drawer with Panel (offset)"
          description={RAWMDExampleWithPanelAndOffset}
        >
          <ExampleWithPanelAndOffset />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleWithAlert}
          component
          title="Drawer with Alert"
          description={RAWMDExampleWithAlert}
        >
          <ExampleWithAlert />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default Page;
