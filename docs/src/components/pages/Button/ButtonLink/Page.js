import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { Switch } from 'uxi/Input';
import CodeExample from '../../../CodeExample';
import RAWButtonLink from '!raw-loader!uxi/Button/ButtonLink';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleSimpleButtonLink from './ExampleSimpleButtonLink';
import RAWExampleSimpleButtonLink from '!raw-loader!./ExampleSimpleButtonLink';

const ButtonPage = () => (
  <div>
    <Title text="ButtonLink" />
    <ul>
      <li>
        <CodeExample
          code={RAWButtonLink}
          component
          title="ButtonLink"
          description={componentInfoToMD(RAWButtonLink)}
          hasPadding
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimpleButtonLink}
          component
          title="ButtonLink"
          hasPadding
        >
          <ExampleSimpleButtonLink />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
