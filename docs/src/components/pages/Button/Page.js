import React from 'react';
import CodeExample from '../../CodeExample';
import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';

import ExampleSimpleSemantic from './ExampleSimpleSemantic';
import RAWExampleSimpleSemantic from '!raw-loader!./ExampleSimpleSemantic';

import ExampleSimpleWithIcon from './ExampleSimpleWithIcon';
import RAWExampleSimpleWithIcon from '!raw-loader!./ExampleSimpleWithIcon';

import ExampleSimpleWithLoaderIcon from './ExampleSimpleWithLoaderIcon';
import RAWExampleSimpleWithLoaderIcon from '!raw-loader!./ExampleSimpleWithLoaderIcon';


const ButtonPage = () => (
  <ul style={{ maxWidth: '700px', margin: '0 auto' }}>
    <li>
      <CodeExample code={RAWExampleSimpleFlat} component description="FlatButton">
        <ExampleSimpleFlat />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleSimpleSemantic} component description="Button using semantic colors">
        <ExampleSimpleSemantic />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleSimpleWithIcon} component description="Button with icon">
        <ExampleSimpleWithIcon />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleSimpleWithLoaderIcon} component description="Button with animated svg icon">
        <ExampleSimpleWithLoaderIcon />
      </CodeExample>
    </li>
  </ul>
);

export default ButtonPage;
