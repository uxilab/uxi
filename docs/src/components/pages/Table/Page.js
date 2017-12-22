import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimpleTable from './ExampleSimpleTable';
import RAWExampleSimpleTable from '!raw-loader!./ExampleSimpleTable';

const TablePage = () => (
  <div>
    <CodeExample code={RAWExampleSimpleTable} component description="FlatButton">
      <ExampleSimpleTable />
    </CodeExample>
  </div>
);

export default TablePage;
