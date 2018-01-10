import React from 'react';
import CodeExample from '../../CodeExample';
import ExampleSimpleHeadings from './ExampleSimpleHeadings';
import RAWExampleSimpleHeadings from '!raw-loader!./ExampleSimpleHeadings';

import ExampleSimpleP from './ExampleSimpleP';
import RAWExampleSimpleP from '!raw-loader!./ExampleSimpleP';


const ClassicPage = () => (
  <ul>
    <li>
      <CodeExample code={RAWExampleSimpleP} component description="Paragraph">
        <ExampleSimpleP />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleSimpleHeadings} component description="Headings">
        <ExampleSimpleHeadings />
      </CodeExample>
    </li>
  </ul>
);

export default ClassicPage;
