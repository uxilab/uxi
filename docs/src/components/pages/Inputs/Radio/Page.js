import React from 'react';
import { H1 } from 'uxi/classic';
import CodeExample from '../../../CodeExample';

import ExampleSimpleRadio from './ExampleSimpleRadio';
import RAWExampleSimpleRadio from '!raw-loader!./ExampleSimpleRadio';

import ExampleSimpleRadioGroup from './ExampleSimpleRadioGroup';
import RAWExampleSimpleRadioGroup from '!raw-loader!./ExampleSimpleRadioGroup';

import ExampleControlledRadioGroup from './ExampleControlledRadioGroup';
import RAWExampleControlledRadioGroup from '!raw-loader!./ExampleControlledRadioGroup';

import ExampleDefaultValueRadioGroup from './ExampleDefaultValueRadioGroup';
import RAWExampleDefaultValueRadioGroup from '!raw-loader!./ExampleDefaultValueRadioGroup';

const RadioPage = () => (
  <ul>
    <H1>Radio & RadioGroup</H1>
    <li>
      <CodeExample
        code={RAWExampleSimpleRadio}
        component
        title="Radio"
        description="simple radio, useless in itself"
      >
        <ExampleSimpleRadio />
      </CodeExample>
    </li>
    <li>
      <CodeExample
        code={RAWExampleSimpleRadioGroup}
        component
        title="Radio Group"
        description="with no `value` and no `defaultValue`"
      >
        <ExampleSimpleRadioGroup />
      </CodeExample>
    </li>
    <li>
      <CodeExample
        code={RAWExampleDefaultValueRadioGroup}
        component
        title="Radio Group"
        description="with `defaultValue` set"
      >
        <ExampleDefaultValueRadioGroup />
      </CodeExample>
    </li>
    <li>
      <CodeExample
        code={RAWExampleControlledRadioGroup}
        component
        title="Radio Group"
        description="Controlled"
      >
        <ExampleControlledRadioGroup />
      </CodeExample>
    </li>
  </ul>
);

export default RadioPage;
