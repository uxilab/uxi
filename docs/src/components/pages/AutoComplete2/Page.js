import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import Example from './Example';
import RAWExample from '!raw-loader!./Example';

const AutoCompletePage = () => (
  <div style={{ padding: '16px' }} >
    <Title text="AutoComplete" />
    <P>
      AutoComplete filter and sort a list of items based on user input.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWExample}
          component
          title="AutoComplete"
          hasPadding
        >
          <Example />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default AutoCompletePage;
