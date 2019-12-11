import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import RAWAutoComplete from '!raw-loader!uxi/Input/AutoComplete/AutoComplete';
import CodeExample from '../../../CodeExample';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleMediumList from './ExampleMediumList';
import RAWExampleMediumList from '!raw-loader!./ExampleMediumList';

import ExampleLongValues from './ExampleLongValues';
import RAWExampleLongValues from '!raw-loader!./ExampleLongValues';

import ExampleControlledUncontrolled from './ExampleControlledUncontrolled';
import RAWExampleControlledUncontrolled from '!raw-loader!./ExampleControlledUncontrolled';

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
          code={RAWAutoComplete}
          title="<AutoComplete />"
          description={componentInfoToMD(RAWAutoComplete)}
          hasPadding
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleMediumList}
          component
          title="Autocomplete"
          hasPadding
        >
          <ExampleMediumList />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleLongValues}
          component
          title="long values"
          hasPadding
          description="using `strict` filtering"
        >
          <ExampleLongValues />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWExampleControlledUncontrolled}
          component
          title="Controlled/Uncontrolled"
          hasPadding
          description="input behaviour"
        >
          <ExampleControlledUncontrolled />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default AutoCompletePage;
