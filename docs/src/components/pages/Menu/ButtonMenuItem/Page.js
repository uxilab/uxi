import React from 'react';
import RAWButtonMenuItem from '!raw-loader!uxi/Menu/ButtonMenu/ButtonMenuItem';
import CodeExample from '../../../CodeExample';
import { H3 } from 'uxi/Classic';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';
import RAWMDExampleSimple from '!raw-loader!./ExampleSimple.md';


const ButtonMenuItemPage = () => (
  <div>
    <H3>ButtonMenu</H3>
    <ul>
      <li>
        <CodeExample
          code={RAWButtonMenuItem}
          component
          title="ButtonMenuItem"
          description={componentInfoToMD(RAWButtonMenuItem)}
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimple}
          component
          title="ButtonMenuItem"
          description={RAWMDExampleSimple}
        >
          <ExampleSimple />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonMenuItemPage;
