import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimpleRadio from './ExampleSimpleRadio';
import RAWExampleSimpleRadio from '!raw-loader!./ExampleSimpleRadio';

import ExampleSimpleRadioGroup from './ExampleSimpleRadioGroup';
import RAWExampleSimpleRadioGroup from '!raw-loader!./ExampleSimpleRadioGroup';

import ExampleControlledRadioGroup from './ExampleControlledRadioGroup';
import RAWExampleControlledRadioGroup from '!raw-loader!./ExampleControlledRadioGroup';

import ExampleDefaultValueRadioGroup from './ExampleDefaultValueRadioGroup';
import RAWExampleDefaultValueRadioGroup from '!raw-loader!./ExampleDefaultValueRadioGroup';

const ButtonPage = () => (
  <ul>
    <li>
      <CodeExample code={RAWExampleSimpleRadio} component description="simple radio">
        <ExampleSimpleRadio />
      </CodeExample>
    </li>
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
