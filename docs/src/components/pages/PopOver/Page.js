import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';

import ExampleSimplePopOver from './ExampleSimplePopOver';
import RAWExampleSimplePopOver from '!raw-loader!./ExampleSimplePopOver';

import ExamplePopOverAndPanel from './ExamplePopOverAndPanel';
import RAWExamplePopOverAndPanel from '!raw-loader!./ExamplePopOverAndPanel';

const PopOverPage = () => (
  <div>
    <Title text="PopOver" />
    <P>
      PopOver are cool.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWExampleSimplePopOver}
          component
          title="Simple PopOver"
          hasPadding
        >
          <ExampleSimplePopOver />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExamplePopOverAndPanel}
          component
          title="Simple PopOver"
          hasPadding
        >
          <ExamplePopOverAndPanel />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default PopOverPage;
