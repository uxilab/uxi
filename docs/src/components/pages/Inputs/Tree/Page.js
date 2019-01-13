import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import RAWTree from '!raw-loader!uxi/Input/Tree';
import CodeExample from '../../../CodeExample';
import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';
import ExampleEmptyTree from './ExampleEmptyTree';
import RAWExampleEmptyTree from '!raw-loader!./ExampleEmptyTree';
import { componentInfoToMD } from '../../../componentInfoToMD';

const TreePage = () => (
  <div>
    <Title text="Tree Component (WIP)" />
    <P>
      The tree component helps you selecting values in a tree structure like folders and files.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWTree}
          description={componentInfoToMD(RAWTree)}
          title="<Tree />"
          hasPadding
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleEmptyTree}
          component
          title="Empty tree"
          hasPadding
        >
          <ExampleEmptyTree />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimple}
          component
          title="Simple tree"
          hasPadding
        >
          <ExampleSimple />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default TreePage;
