import React from 'react';
import CodeExample from '../../CodeExample';
import ExampleSimpleRadioGroup from './ExampleSimpleRadioGroup';
import RAWExampleSimpleRadioGroup from '!file-loader!isomorphic-loader!./ExampleSimpleRadioGroup.js'

import ExampleControlledRadioGroup from './ExampleControlledRadioGroup';
import RAWExampleControlledRadioGroup from '!file-loader!isomorphic-loader!./ExampleControlledRadioGroup.js'

import ExampleDefaultValueRadioGroup from './ExampleDefaultValueRadioGroup';
import RAWExampleDefaultValueRadioGroup from '!file-loader!isomorphic-loader!./ExampleDefaultValueRadioGroup.js'

const ButtonPage = () => (
  <ul>
    <li>
      <CodeExample code={RAWExampleSimpleRadioGroup} component description="Radio Group with no `value` and no `defaultValue`">
        <ExampleSimpleRadioGroup />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleDefaultValueRadioGroup} component description="Radio Group with `defaultValue` set">
        <ExampleDefaultValueRadioGroup />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleControlledRadioGroup} component description="Controlled Radio Group">
        <ExampleControlledRadioGroup />
      </CodeExample>
    </li>
  </ul>
);

export default ButtonPage;
