import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { Switch } from 'uxi/Input';
import CodeExample from '../../CodeExample';
import RAWButton from '!raw-loader!uxi/Button/Button';
import { componentInfoToMD } from '../../componentInfoToMD';

import ExampleButtonWithLoadingState from './ExampleButtonWithLoadingState';
import RAWExampleButtonWithLoadingState from '!raw-loader!./ExampleButtonWithLoadingState';

import ExampleButtonWithConfirm from './ExampleButtonWithConfirm';
import RAWExampleButtonWithConfirm from '!raw-loader!./ExampleButtonWithConfirm';

// import ExampleSimpleFlat from './FlatButton/ExampleSimpleFlat';
// import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';

import ExampleButtonLinks from './ExampleButtonLinks';
import RAWExampleButtonLinks from '!raw-loader!./ExampleButtonLinks';

import ExampleSimpleSemantic from './ExampleSimpleSemantic';
import RAWExampleSimpleSemantic from '!raw-loader!./ExampleSimpleSemantic';

import ExampleSimpleSemanticDisabled from './ExampleSimpleSemanticDisabled';
import RAWExampleSimpleSemanticDisabled from '!raw-loader!./ExampleSimpleSemanticDisabled';

import ExampleSimpleWithIcon from './ExampleSimpleWithIcon';
import RAWExampleSimpleWithIcon from '!raw-loader!./ExampleSimpleWithIcon';
import RAWMDExampleSimpleWithIcon from '!raw-loader!./ExampleSimpleWithIcon.md';

import ExampleSimpleWithLoaderIcon from './ExampleSimpleWithLoaderIcon';
import RAWExampleSimpleWithLoaderIcon from '!raw-loader!./ExampleSimpleWithLoaderIcon';

// import ExampleButtonPlayGround from './ExampleButtonPlayGround';
// import RAWExampleButtonPlayGround from '!raw-loader!./ExampleButtonPlayGround';

// import ExampleSimpleButtonLink from './ButtonLink/ExampleSimpleButtonLink';
// import RAWExampleSimpleButtonLink from '!raw-loader!./ExampleSimpleButtonLink';

const ButtonPage = () => (
  <div>
    <Title text="Button" />
    <ul>
      <li>
        <CodeExample
          code={RAWButton}
          component
          title="Button"
          description={componentInfoToMD(RAWButton)}
          hasPadding
        />
      </li>
      </ul>
      <Title text="Button example" />
      <ul>
      <li>
        <CodeExample
          code={RAWExampleSimpleWithIcon}
          component
          title="Button with icon"
          description={RAWMDExampleSimpleWithIcon}
          hasPadding
        >
          <ExampleSimpleWithIcon />
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
      {/* <li>
        <CodeExample
          code={RAWExampleSimpleFlat}
          component
          title="FlatButton"
          hasPadding
        >
          <ExampleSimpleFlat />
        </CodeExample>
      </li> */}
        <li>
        <CodeExample
          code={RAWExampleButtonWithConfirm}
          component
          title="with confirm dialog"
          hasPadding
        >
          <ExampleButtonWithConfirm />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleButtonWithLoadingState}
          component
          title="Loading state"
          hasPadding
        >
          <ExampleButtonWithLoadingState />
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
