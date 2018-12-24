import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { Switch } from 'uxi/Input';
import CodeExample from '../../../CodeExample';
import RAWButton from '!raw-loader!uxi/Button/Button';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleSimpleFlat from './ExampleSimpleFlat';
import RAWExampleSimpleFlat from '!raw-loader!./ExampleSimpleFlat';

const ButtonPage = () => (
  <div>
    <Title text="FlatButton" />
    <ul>

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
    </ul>
  </div>
);

export default ButtonPage;
