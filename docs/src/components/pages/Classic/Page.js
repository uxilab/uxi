import React from 'react';
import CodeExample from '../../CodeExample';
import ExampleSimpleHeadings from './ExampleSimpleHeadings';
import RAWExampleSimpleHeadings from '!file-loader!isomorphic-loader!./ExampleSimpleHeadings.js'

import ExampleSimpleP from './ExampleSimpleP';
import RAWExampleSimpleP from '!file-loader!isomorphic-loader!./ExampleSimpleP.js'


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
