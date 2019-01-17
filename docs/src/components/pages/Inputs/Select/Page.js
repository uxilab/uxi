import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import RAWSelect from '!raw-loader!uxi/Input/Select/Select';
import CodeExample from '../../../CodeExample';

import Playground from './Playground';
import RAWPlayground from '!raw-loader!./Playground';

import ExampleSelectWithFiltering from './ExampleSelectWithFiltering';
import RAWExampleSelectWithFiltering from '!raw-loader!./ExampleSelectWithFiltering';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';

import ExampleSimpleWithWidth from './ExampleSimpleWithWidth';
import RAWExampleSimpleWithWidth from '!raw-loader!./ExampleSimpleWithWidth';

import ExampleSimpleFullWidth from './ExampleSimpleFullWidth';
import RAWExampleSimpleFullWidth from '!raw-loader!./ExampleSimpleFullWidth';

import ExampleSimpleControlled from './ExampleSimpleControlled';
import RAWExampleSimpleControlled from '!raw-loader!./ExampleSimpleControlled';

import ExampleManagedControlled from './ExampleManagedControlled';
import RAWExampleManagedControlled from '!raw-loader!./ExampleManagedControlled';

import ExampleSimpleUncontrolled from './ExampleSimpleUncontrolled';
import RAWExampleSimpleUncontrolled from '!raw-loader!./ExampleSimpleUncontrolled';
import { componentInfoToMD } from '../../../componentInfoToMD';


const SelectInputPage = () => (
  <div>
    <Title text="SelectInput" />
    <P>
      {'Custom Select Input allowing anything to be used as <option>'}
      <br />
      <strong>{'IMPORTANT!'}</strong>
      {'You have to pass a `mainScrollingElementSelector` props if window.document is not the main scrolling element'}
      <br />
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWSelect}
          component
          title="simple SelectInput Playground"
          description={componentInfoToMD(RAWSelect)}
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleSelectWithFiltering}
          component
          title="SelectWithFiltering (WIP)"
          hasPadding
        >
          <ExampleSelectWithFiltering />
        </CodeExample>
      </li>
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
          code={RAWExampleSelectWithFiltering}
          component
          title="SelectWithFiltering (WIP)"
          hasPadding
        >
          <ExampleSelectWithFiltering />
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
      <li>
        <CodeExample
          code={RAWExampleSimpleControlled}
          component
          title="Controlled SelectInput (half managed - button)"
          hasPadding
        >
          <ExampleSimpleControlled />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleManagedControlled}
          component
          title="Controlled SelectInput (fully managed)"
          hasPadding
        >
          <ExampleManagedControlled />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleUncontrolled}
          component
          title="Uncontrolled SelectInput with defaultValue"
          hasPadding
        >
          <ExampleSimpleUncontrolled />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default SelectInputPage;
