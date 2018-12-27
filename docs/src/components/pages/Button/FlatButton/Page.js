import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { Switch } from 'uxi/Input';
import CodeExample from '../../../CodeExample';
import RAWFlatButton from '!raw-loader!uxi/Button/FlatButton';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';

import ExampleSimpleSemantic from './ExampleSimpleSemantic';
import RAWExampleSimpleSemantic from '!raw-loader!./ExampleSimpleSemantic';

import ExampleButtonLinks from './ExampleButtonLinks';
import RAWExampleButtonLinks from '!raw-loader!./ExampleButtonLinks';

const ButtonPage = () => (
  <div>
    <Title text="FlatButton" />
    <ul>
      <li>
        <CodeExample
          code={RAWFlatButton}
          component
          title="FlatButton"
          description={componentInfoToMD(RAWFlatButton)}
          hasPadding
        />
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
          title="FlatButton using semantic colors"
          hasPadding
        >
          <ExampleSimpleSemantic />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleButtonLinks}
          component
          title="FlatButton (link)"
          hasPadding
        >
          <ExampleButtonLinks />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
