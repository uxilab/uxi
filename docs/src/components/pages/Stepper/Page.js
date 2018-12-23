import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';

import StepperExample from './StepperExample';
import RAWStepperExample from '!raw-loader!./StepperExample';
import RAWMDStepperExample from '!raw-loader!./StepperExample.md';

const StepperPage = () => (
  <div>
  <H1>Panel</H1>
    <ul>
      <li>
        <CodeExample
          code={RAWStepperExample}
          component
          title="Stepper"
          description={RAWMDStepperExample}
          hasPadding
        >
          <StepperExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default StepperPage;
