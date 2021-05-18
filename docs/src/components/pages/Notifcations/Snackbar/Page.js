import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../../CodeExample';

import SnackbarExample from './SnackbarExample';
import RAWSnackbarExample from '!raw-loader!./SnackbarExample';
import RAWMDSnackbarExample from '!raw-loader!./SnackbarExample.md';

const SnackbarPage = () => (
  <div>
    <H1>SnackbarPage</H1>
    <ul>
      <li>
        <CodeExample
          code={RAWSnackbarExample}
          component
          title="Snackbar"
          description={RAWMDSnackbarExample}
          hasPadding
        >
          <SnackbarExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default SnackbarPage;
