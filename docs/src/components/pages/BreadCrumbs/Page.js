import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleBreadCrumbsSimple from './ExampleBreadCrumbsSimple';
import RAWExampleBreadCrumbsSimple from '!file-loader!isomorphic-loader!./ExampleBreadCrumbsSimple.js'

import ExampleBreadCrumbs from './ExampleBreadCrumbs';
import RAWExampleBreadCrumbs from '!file-loader!isomorphic-loader!./ExampleBreadCrumbs.js'

const BreadCrumbsPage = () => (
  <ul>
    <li>
      <CodeExample code={RAWExampleBreadCrumbsSimple} component description="BreadCrumbs">
        <ExampleBreadCrumbsSimple />
      </CodeExample>
    </li>
    <li>
      <CodeExample code={RAWExampleBreadCrumbs} component description="BreadCrumbs">
        <ExampleBreadCrumbs />
      </CodeExample>
    </li>
  </ul>
);

export default BreadCrumbsPage;
