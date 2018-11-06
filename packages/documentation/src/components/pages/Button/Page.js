import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { Switch } from 'uxi/Input';
import CodeExample from '../../CodeExample';

import ExampleButtonWithLoadingState from './ExampleButtonWithLoadingState';
import RAWExampleButtonWithLoadingState from '!raw-loader!./ExampleButtonWithLoadingState';

import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';

import ExampleButtonLinks from './ExampleButtonLinks';
import RAWExampleButtonLinks from '!raw-loader!./ExampleButtonLinks';

import ExampleSimpleSemantic from './ExampleSimpleSemantic';
import RAWExampleSimpleSemantic from '!raw-loader!./ExampleSimpleSemantic';

import ExampleSimpleSemanticDisabled from './ExampleSimpleSemanticDisabled';
import RAWExampleSimpleSemanticDisabled from '!raw-loader!./ExampleSimpleSemanticDisabled';

import ExampleSimpleWithIcon from './ExampleSimpleWithIcon';
import RAWExampleSimpleWithIcon from '!raw-loader!./ExampleSimpleWithIcon';

import ExampleSimpleWithLoaderIcon from './ExampleSimpleWithLoaderIcon';
import RAWExampleSimpleWithLoaderIcon from '!raw-loader!./ExampleSimpleWithLoaderIcon';

import ExampleButtonPlayGround from './ExampleButtonPlayGround';
import RAWExampleButtonPlayGround from '!raw-loader!./ExampleButtonPlayGround';

import ExampleSimpleButtonLink from './ExampleSimpleButtonLink';
import RAWExampleSimpleButtonLink from '!raw-loader!./ExampleSimpleButtonLink';

const ButtonPage = () => (
  <div>
    <Title text="Button" />
    <P>
      Button are used to emphasizes important functions on your page.
    </P>
    <Switch name="foobar6" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>Notifications</div>} />

    <ul>
      <li>
        <CodeExample
          code={RAWExampleButtonWithLoadingState}
          component
          title="Playground"
          hasPadding
        >
          <ExampleButtonWithLoadingState />
        </CodeExample>
      </li>
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
          code={RAWExampleSimpleSemanticDisabled}
          component
          title="Disabled Button using semantic colors"
          hasPadding
        >
          <ExampleSimpleSemanticDisabled />
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
      <li>
        <CodeExample
          code={RAWExampleSimpleButtonLink}
          component
          title="Button Link"
          hasPadding
        >
          <ExampleSimpleButtonLink />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
