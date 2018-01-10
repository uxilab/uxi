import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import ExampleSimpleTable from './ExampleSimpleTable';
import RAWExampleSimpleTable from '!raw-loader!./ExampleSimpleTable';

import ExampleSelectableTable from './ExampleSelectableTable';
import RAWExampleSelectableTable from '!raw-loader!./ExampleSelectableTable';

import ExampleSelectableTableValues from './ExampleSelectableTableValues';
import RAWExampleSelectableTableValues from '!raw-loader!./ExampleSelectableTableValues';

const TablePage = () => (
  <div>
    <Title text="Table" />
    <P>
      This is a simple table without interaction.
    </P>
    <CodeExample code={RAWExampleSimpleTable} component title="Simple table with click handlers">
      <ExampleSimpleTable />
    </CodeExample>
    <br />
    <CodeExample code={RAWExampleSelectableTableValues} component description="Selectable table with custom values instead of rowIndexes">
      <ExampleSelectableTableValues />
    </CodeExample>
    <br />
    <CodeExample code={RAWExampleSelectableTable} component description="Selectable + actionnable table">
      <ExampleSelectableTable />
    </CodeExample>
  </div>
);

export default TablePage;
