import React from 'react';
import { H1 } from 'uxi/classic';
import CodeExample from '../../../CodeExample';

import ExampleFileInput from './ExampleFileInput';
import RAWExampleFileInput from '!raw-loader!./ExampleFileInput';

const FileInputPage = () => (
  <ul>
    <H1>File Input</H1>
    <li>
      <CodeExample
        code={RAWExampleFileInput}
        component
        title="File Input"
        description="simple file input button, click or drag and drop"
      >
        <ExampleFileInput />
      </CodeExample>
    </li>
  </ul>
);

export default FileInputPage;
