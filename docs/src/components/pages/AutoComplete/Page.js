import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';
import ExampleMediumList from './ExampleMediumList';
import RAWExampleMediumList from '!raw-loader!./ExampleMediumList';

const AutoCompletePage = () => (
  <div>
    <Title text="AutoComplete" />
    <P>
      AutoComplete filter and sort a list of items based on user input.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWExampleMediumList}
          component
          title="AutoComplete (length = 4500)"
          hasPadding
        >
          <ExampleMediumList />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default AutoCompletePage;
