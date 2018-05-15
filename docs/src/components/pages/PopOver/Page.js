import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';

import ExampleSimplePopOver from './ExampleSimplePopOver';
import RAWExampleSimplePopOver from '!raw-loader!./ExampleSimplePopOver';

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
    </ul>
  </div>
);

export default PopOverPage;
