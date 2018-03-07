import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';
import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!file-loader!isomorphic-loader!./ExampleSimpleFlat.js'

import ExampleButtonLinks from './ExampleButtonLinks';
import RAWExampleButtonLinks from '!file-loader!isomorphic-loader!./ExampleButtonLinks.js'

import ExampleSimpleSemantic from './ExampleSimpleSemantic';
import RAWExampleSimpleSemantic from '!file-loader!isomorphic-loader!./ExampleSimpleSemantic.js'

import ExampleSimpleSemanticDisabled from './ExampleSimpleSemanticDisabled';
import RAWExampleSimpleSemanticDisabled from '!file-loader!isomorphic-loader!./ExampleSimpleSemanticDisabled.js'

import ExampleSimpleWithIcon from './ExampleSimpleWithIcon';
import RAWExampleSimpleWithIcon from '!file-loader!isomorphic-loader!./ExampleSimpleWithIcon.js'

import ExampleSimpleWithLoaderIcon from './ExampleSimpleWithLoaderIcon';
import RAWExampleSimpleWithLoaderIcon from '!file-loader!isomorphic-loader!./ExampleSimpleWithLoaderIcon.js'

import ExampleButtonPlayGround from './ExampleButtonPlayGround';
import RAWExampleButtonPlayGround from '!file-loader!isomorphic-loader!./ExampleButtonPlayGround.js'

import ExampleSimpleButtonLink from './ExampleSimpleButtonLink';
import RAWExampleSimpleButtonLink from '!file-loader!isomorphic-loader!./ExampleSimpleButtonLink.js'

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
