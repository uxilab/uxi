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
    <h4>Known Issues </h4>
    <ul>
      <li>
        the triangle in ie/Edge browsers (clip-path) might overflow over the content of the PopOver
        if there is not enough padding at the top of the container
      </li>
    </ul>
    <br />
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
