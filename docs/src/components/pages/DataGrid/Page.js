import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import ExampleSimpleDataGrid from './ExampleSimpleDataGrid';
import RAWExampleSimpleDataGrid from '!raw-loader!./ExampleSimpleDataGrid'; 

import ExampleSimpleDataGridOnlySomeKey from './ExampleSimpleDataGridOnlySomeKey';
import RAWExampleSimpleDataGridOnlySomeKey from '!raw-loader!./ExampleSimpleDataGridOnlySomeKey';

import ExampleSimpleDataGridWithCustomType from './ExampleSimpleDataGridWithCustomType';
import RAWExampleSimpleDataGridWithCustomType from '!raw-loader!./ExampleSimpleDataGridWithCustomType';

import ExampleSimpleDataGridComputedProperty from './ExampleSimpleDataGridComputedProperty';
import RAWExampleSimpleDataGridComputedProperty from '!raw-loader!./ExampleSimpleDataGridComputedProperty';

const TablePage = () => (
  <div>
    <Title text="DataGrid - Premium Component" />
    <P>
      The DataGrid is a key component to render a list of Entity. The grid is really Entity oriented and not, as you can find with many grids, Tabular oriented.
      Instead of passing column or cell definitions, you work towards your Entity. This is making the grid more extensible and re-usable. Refer to Entity and Metadata guidelines to know more.
    </P>
    <CodeExample
      code={RAWExampleSimpleDataGrid}
      title="Simple Data Grid"
      description="Pass the data, DataGrid does the rest"
    >
      <ExampleSimpleDataGrid />
    </CodeExample>

    <CodeExample
      code={RAWExampleSimpleDataGridOnlySomeKey}
      title="Data Grid, only show what you need"
    >
      <ExampleSimpleDataGridOnlySomeKey />
    </CodeExample>

    <CodeExample
      code={RAWExampleSimpleDataGridWithCustomType}
      title="Data Grid with custom type renderer"
    >
      
    </CodeExample>

    <ExampleSimpleDataGridWithCustomType />

    <CodeExample
      code={RAWExampleSimpleDataGridComputedProperty}
      title="Data Grid with custom computed Property"
    >
      <ExampleSimpleDataGridComputedProperty />
    </CodeExample>
  </div>
);

export default TablePage;

/**
 * 
 * 
 * const person = {
  firstName: "Denis",
  lastName: 'Florkin',
  jobTitle: 'F-E dev',
};

const FullNameRenderer = ({ person }) => {
  return (
    <div>
      {person.firstName} {person.lastName}
    </div>
  );
};

UX - Entreprise Modular System
AKA : Business Entity UX Driven
_____________________________________

UX Guideliens :

- Dashboard Multiple Widget

- List 1 Entity Type 
- Detail 1 Entity Type
- Quickview 1 Entity Type



class PersonMetaData extends MetaData {
  static pathname: '/person',
  static properties: [
    {
      name: 'Full name',
      isComputed: true,
      Component: FullNameRenderer,
      edit: {
        type: 'password',
        validation: {//do validation}
      }
    },
    {
      name:'jobTitle',
      display: 'Job Title',
    },
  ],
  static grid = {
    
  };
  staic quickView = {

  };
  static filtering = {

  };
  static relationship = [
    {
      relation: 'oneToMany',
      entity: 'product',

    }
  ]
}

 */
