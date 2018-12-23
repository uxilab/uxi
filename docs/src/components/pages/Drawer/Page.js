import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';

import Example from './Example';
import RAWExample from '!raw-loader!./Example';
import RAWMDExample from '!raw-loader!./Example.md';

import ExampleWithPanel from './ExampleWithPanel';
import RAWExampleWithPanel from '!raw-loader!./ExampleWithPanel';
import RAWMDExampleWithPanel from '!raw-loader!./ExampleWithPanel.md';

import ExampleWithAlert from './ExampleWithAlert';
import RAWExampleWithAlert from '!raw-loader!./ExampleWithAlert';
import RAWMDExampleWithAlert from '!raw-loader!./ExampleWithAlert.md';

const Page = () => (
  <div>
    <ul>
      <H1>Drawer</H1>
      <li>
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
