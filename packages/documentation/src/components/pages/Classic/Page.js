import React from 'react';
import CodeExample from '../../CodeExample';
import ExampleSimpleHeadings from './ExampleSimpleHeadings';
import RAWExampleSimpleHeadings from '!raw-loader!./ExampleSimpleHeadings';

import ExampleSimpleP from './ExampleSimpleP';
import RAWExampleSimpleP from '!raw-loader!./ExampleSimpleP';


const ClassicPage = () => (
  <ul>
    <li>
      <CodeExample
        title="Paragraph"
        code={RAWExampleSimpleP}
        component
        hasPadding
      >
        <ExampleSimpleP />
      </CodeExample>
    </li>
    <li>
      <CodeExample
        title="Headings"
        code={RAWExampleSimpleHeadings}
        component
        hasPadding
      >
        <ExampleSimpleHeadings />
      </CodeExample>
    </li>
  </ul>
);

export default ClassicPage;
