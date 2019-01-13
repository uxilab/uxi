import React from 'react';
import CodeExample from '../../../CodeExample';
import RAWButtonMenu from '!raw-loader!uxi/Menu/ButtonMenu/ButtonMenu';
import { componentInfoToMD } from '../../../componentInfoToMD';
import { H3 } from 'uxi/Classic';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';
import RAWMDExampleSimple from '!raw-loader!./ExampleSimple.md';

import ExampleAnchor from './ExampleAnchor';
import RAWExampleAnchor from '!raw-loader!./ExampleAnchor';

import ExampleAnchorBad from './ExampleAnchorBad';
import RAWExampleAnchorBad from '!raw-loader!./ExampleAnchorBad';

const ButtonMenuPage = () => (
  <div>
    <H3>ButtonMenu</H3>
    <ul>
      <li>
        <CodeExample
          code={RAWButtonMenu}
          // component
          title="<ButtonMenu></ButtonMenu>"
          description={componentInfoToMD(RAWButtonMenu)}
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimple}
          component
          title="ButtonMenu"
          description={RAWMDExampleSimple}
        >
          <ExampleSimple />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleAnchor}
          component
          title="ButtonMenu"
          description="with custom anchor position"
        >
          <ExampleAnchor />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleAnchorBad}
          component
          title="Carreful with anchor thought"
          description="with bad anchor management.  ButtonMenu doesn't know if its menu is visible in the viewport or not"
        >
          <ExampleAnchorBad />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonMenuPage;
