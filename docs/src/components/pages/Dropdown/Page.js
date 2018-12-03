import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleOpenControlled from './ExampleOpenControlled';
import RAWExampleOpenControlled from '!raw-loader!./ExampleOpenControlled';

import ExampleOpenUncontrolled from './ExampleOpenUncontrolled';
import RAWExampleOpenUncontrolled from '!raw-loader!./ExampleOpenUncontrolled';

import ExampleSimpleDropDown from './ExampleSimpleDropDown';
import RAWExampleSimpleDropDown from '!raw-loader!./ExampleSimpleDropDown';

const DropdownPage = () => (
  <div>
    <ul>
      <li>
        <CodeExample
          code={RAWExampleSimpleDropDown}
          component
          title="SimpleDropDown"
          hasPadding
        >
          <ExampleSimpleDropDown />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleOpenControlled}
          component
          title="open Controlled dropdown"
          hasPadding
        >
          <ExampleOpenControlled />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleOpenUncontrolled}
          component
          title="open Uncontrolled dropdown"
          hasPadding
        >
          <ExampleOpenUncontrolled />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default DropdownPage;
