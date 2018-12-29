import React from 'react';
// import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';
// import RAWButtonLink from '!raw-loader!uxi/Button/ButtonLink';
// import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleUnstyledButton from './ExampleUnstyledButton';
import RAWExampleUnstyledButton from '!raw-loader!./ExampleUnstyledButton';

const ButtonPage = () => (
  <div>
    <Title text="ExampleUnstyledButton" />
    <ul>
      <li>
        <CodeExample
          code={RAWExampleUnstyledButton}
          component
          title="ExampleUnstyledButton"
          hasPadding
        >
          <ExampleUnstyledButton />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
