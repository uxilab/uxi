import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';
import ExampleEmptyTree from './ExampleEmptyTree';
import RAWExampleEmptyTree from '!raw-loader!./ExampleEmptyTree';
import CodeExample from '../../CodeExample';

const TreePage = () => (
  <div>
    <Title text="Tree Component" />
    <P>
      The tree component helps you selecting values in a tree structure like folders and files.
    </P>
    <ul>
      <CodeExample
        code={RAWExampleEmptyTree}
        component
        title="Empty tree"
        hasPadding
      >
        <ExampleEmptyTree />
      </CodeExample>
      <CodeExample
        code={RAWExampleSimple}
        component
        title="Simple tree"
        hasPadding
      >
        <ExampleSimple />
      </CodeExample>
    </ul>
  </div>
);

export default TreePage;
