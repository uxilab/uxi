import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';
import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';

import ExampleButtonLinks from './ExampleButtonLinks';
import RAWExampleButtonLinks from '!raw-loader!./ExampleButtonLinks';

import ExampleSimpleSemantic from './ExampleSimpleSemantic';
import RAWExampleSimpleSemantic from '!raw-loader!./ExampleSimpleSemantic';

import ExampleSimpleWithIcon from './ExampleSimpleWithIcon';
import RAWExampleSimpleWithIcon from '!raw-loader!./ExampleSimpleWithIcon';

import ExampleSimpleWithLoaderIcon from './ExampleSimpleWithLoaderIcon';
import RAWExampleSimpleWithLoaderIcon from '!raw-loader!./ExampleSimpleWithLoaderIcon';

import ExampleButtonPlayGround from './ExampleButtonPlayGround';
import RAWExampleButtonPlayGround from '!raw-loader!./ExampleButtonPlayGround';


const ButtonPage = () => (
  <div>
    <Title text="Button" />
    <P>
      Button are used to emphasizes important functions on your page.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWExampleButtonPlayGround}
          component
          title="Playground"
          hasPadding
        >
          <ExampleButtonPlayGround />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleButtonLinks}
          component
          title="Button's shaped link"
          hasPadding
        >
          <ExampleButtonLinks />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleFlat}
          component
          title="FlatButton"
          hasPadding
        >
          <ExampleSimpleFlat />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleSemantic}
          component
          title="Button using semantic colors"
          hasPadding
        >
          <ExampleSimpleSemantic />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleWithIcon}
          component
          title="Button with icon"
          hasPadding
        >
          <ExampleSimpleWithIcon />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleWithLoaderIcon}
          component
          title="Button with animated svg icon"
          hasPadding
        >
          <ExampleSimpleWithLoaderIcon />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
