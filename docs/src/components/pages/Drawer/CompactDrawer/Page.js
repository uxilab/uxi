import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';

import Example from './Example';
import RAWExample from '!raw-loader!./Example';
import RAWMDExample from '!raw-loader!./Example.md';


const Page = () => (
  <div>
    <ul>
      <H1>Compact Drawer</H1>
      <li>
        <CodeExample
          code={RAWExample}
          component
          title="Compact Drawer"
          description={RAWMDExample}
        >
          <Example />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default Page;
