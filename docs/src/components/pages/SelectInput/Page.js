import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';

import ExampleSimpleWithWidth from './ExampleSimpleWithWidth';
import RAWExampleSimpleWithWidth from '!raw-loader!./ExampleSimpleWithWidth';


import ExampleSimpleFullWidth from './ExampleSimpleFullWidth';
import RAWExampleSimpleFullWidth from '!raw-loader!./ExampleSimpleFullWidth';


const SelectInputPage = () => (
  <div>
    <Title text="SelectInput" />
    <P>
      {'Custom Select Input allowing anything to be used as <option>'}
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWExampleSimple}
          component
          title="simple SelectInput"
          hasPadding
        >
          <ExampleSimple />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleWithWidth}
          component
          title="simple SelectInput with specified width"
          hasPadding
        >
          <ExampleSimpleWithWidth />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleFullWidth}
          component
          title="simple SelectInput fullWidth"
          hasPadding
        >
          <ExampleSimpleFullWidth />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default SelectInputPage;
