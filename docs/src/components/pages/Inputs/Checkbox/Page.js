import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';
import RAWCheckbox from '!raw-loader!uxi/Input/Checkbox';
import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleCheckbox from './ExampleCheckbox';
import RAWExampleCheckbox from '!raw-loader!./ExampleCheckbox';

const CheckboxPage = () => (
  <ul>
    <H1>Checkbox</H1>
    <li>
      <CodeExample
        code={RAWCheckbox}
        component
        title="Checkbox API"
        description={componentInfoToMD(RAWCheckbox)}
      />
    </li>
    <li>
      <CodeExample
        code={RAWExampleCheckbox}
        component
        title="Checkbox"
        description="controlled or uncontrolled"
      >
        <ExampleCheckbox />
      </CodeExample>
    </li>
  </ul>
);

export default CheckboxPage;
