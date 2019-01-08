import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';

import ExampleMediumList from './ExampleMediumList';
import RAWExampleMediumList from '!raw-loader!./ExampleMediumList';

import ExampleBigList from './ExampleBigList';
import RAWExampleBigList from '!raw-loader!./ExampleBigList';

import ExampleLongValues from './ExampleLongValues';
import RAWExampleLongValues from '!raw-loader!./ExampleLongValues';

const AutoCompletePage = () => (
  <div style={{ padding: '16px' }} >
    <Title text="AutoComplete" />
    <P>
      AutoComplete filter and sort a list of items based on user input.
      AutoComplete takes a collection of items (which doesn't change during the lifecycle of the compo)
      and help the user filter throught the available choices, by filtering by keyword.
      The Autocomplete has a loose or strict way of matching (pass a boolean 'strict' props, default to loose).

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
      {/*   <li>
        <CodeExample
          code={RAWExampleBigList}
          component
          title="AutoComplete (length = ~9000)"
          hasPadding
        >
          <ExampleBigList />
        </CodeExample>
      </li> */}
      <li>
        <CodeExample
          code={RAWExampleLongValues}
          component
          title="AutoComplete with long values (layout and search perf)"
          hasPadding
        >
          <ExampleLongValues />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default AutoCompletePage;
