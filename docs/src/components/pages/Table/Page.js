import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import ExampleSimpleTable from './ExampleSimpleTable';
import RAWExampleSimpleTable from '!raw-loader!./ExampleSimpleTable';

import ExampleSimpleTableWithSpecialCell from './ExampleSimpleTableWithSpecialCell';
import RAWExampleSimpleTableWithSpecialCell from '!raw-loader!./ExampleSimpleTableWithSpecialCell';

import ExampleSimpleTableWithReadOnly from './ExampleSimpleTableWithReadOnly';
import RAWExampleSimpleTableWithReadOnly from '!raw-loader!./ExampleSimpleTableWithReadOnly';

import ExampleSimpleTableWithSeparateRow from './ExampleSimpleTableWithSeparateRow.js';
import RAWExampleSimpleTableWithSeparateRow from '!raw-loader!./ExampleSimpleTableWithSeparateRow.js';

import ExampleSelectableTable from './ExampleSelectableTable';
import RAWExampleSelectableTable from '!raw-loader!./ExampleSelectableTable';

import ExampleSelectableTableValues from './ExampleSelectableTableValues';
import RAWExampleSelectableTableValues from '!raw-loader!./ExampleSelectableTableValues';

import ExampleMuiltSelectableTableValues from './ExampleMuiltSelectableTableValues';
import RAWExampleMuiltSelectableTableValues from '!raw-loader!./ExampleMuiltSelectableTableValues';

import ExampleSelectableTableWithDelete from './ExampleSelectableTableWithDelete';
import RAWExampleSelectableTableWithDelete from '!raw-loader!./ExampleSelectableTableWithDelete';

const TablePage = () => (
  <div>
    <Title text="Table" />

    <CodeExample
      code={RAWExampleSimpleTable}
      title="Simple Table"
      description="Table can be used stand-alone or can be used using the DataGrid."
    >
      <ExampleSimpleTable />
    </CodeExample>

    <CodeExample
      code={RAWExampleSimpleTable}
      title="Simple Table with custom cell"
      description="A cell of the Table can technically contain any kind of Component, however, you should refer to the UX guidelines to avoid making the Table too cumbersome for your user."
    >
      <ExampleSimpleTableWithSpecialCell />
    </CodeExample>

    <CodeExample
      code={RAWExampleSimpleTable}
      title="Simple Table with a readOnly row"
      description="Table with a readonly row."
    >
      <ExampleSimpleTableWithReadOnly />
    </CodeExample>

    <CodeExample
      code={ExampleSelectableTableWithDelete}
      title="Table with separated rows if you need more constract"
    >
      <ExampleSimpleTableWithSeparateRow />
    </CodeExample>

    <CodeExample
      title="Table with selectable"
      description={
        'By default, the Table has all the visual elements for the selections, however, if you want to have a controlled Table, use the TableWithSelection component.'
      }
      code={RAWExampleSelectableTableValues}
    >
      <ExampleSelectableTableValues />
    </CodeExample>

    <CodeExample
      code={RAWExampleSelectableTableValues}
      title="Table with selectable and multiSelectable"
    >
      <ExampleMuiltSelectableTableValues />
    </CodeExample>

    <CodeExample
      code={RAWExampleSelectableTable}
      title="Table with selectable, multiSelectable, locked and readonly"
    >
      <ExampleSelectableTable />
    </CodeExample>

    <CodeExample
      code={RAWExampleSelectableTableWithDelete}
      title="Table with selectable and deletion"
    >
      <ExampleSelectableTableWithDelete />
    </CodeExample>
  </div>
);

export default TablePage;
