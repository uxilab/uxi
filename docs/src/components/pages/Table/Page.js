import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimpleTable from './ExampleSimpleTable';
import RAWExampleSimpleTable from '!raw-loader!./ExampleSimpleTable';

import ExampleSelectableTable from './ExampleSelectableTable';
import RAWExampleSelectableTable from '!raw-loader!./ExampleSelectableTable';

const TablePage = () => (
  <div>
    <CodeExample code={RAWExampleSelectableTable} component description="Selectable table">
      <ExampleSelectableTable />
    </CodeExample>
    <br />
    <CodeExample code={RAWExampleSimpleTable} component description="Simple table">
      <ExampleSimpleTable />
    </CodeExample>
  </div>
);

export default TablePage;
