import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimpleTable from './ExampleSimpleTable';
import RAWExampleSimpleTable from '!raw-loader!./ExampleSimpleTable';

import ExampleSelectableTable from './ExampleSelectableTable';
import RAWExampleSelectableTable from '!raw-loader!./ExampleSelectableTable';

import ExampleSelectableTableValues from './ExampleSelectableTableValues';
import RAWExampleSelectableTableValues from '!raw-loader!./ExampleSelectableTableValues';

const TablePage = () => (
  <div>
    <CodeExample code={RAWExampleSelectableTableValues} component description="Selectable table with custom values instead of rowIndexes">
      <ExampleSelectableTableValues />
    </CodeExample>
    <br />
    <CodeExample code={RAWExampleSelectableTable} component description="Selectable + actionnable table">
      <ExampleSelectableTable />
    </CodeExample>
    <br />
    <CodeExample code={RAWExampleSimpleTable} component description="Simple table with click handlers">
      <ExampleSimpleTable />
    </CodeExample>
  </div>
);

export default TablePage;
