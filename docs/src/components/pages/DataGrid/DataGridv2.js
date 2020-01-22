import React, { useState } from 'react';
import DataGrid from 'uxi/DataGridv2';


export const WithState = ({ children, defaultState, ...props }) => {
  const [state, setState] = useState(defaultState);
  return children(state, setState);
};


const ExampleSimpleDataGrid = () => (
  <WithState
    defaultState={{
      selected: ['bar', 'vrn'],
      sortDirections: [{ property: 'name' }, { property: 'firstName', sortDirection: 'ASC' }],
    }}
  >
    {
      (state, setState) => (
        <DataGrid
          resizable
          propertyKey="name"
          onSelectionChange={(isSelected, entityId, selected) => {
            console.log('isSelected, entityId, selected', isSelected, entityId, selected);
            setState({ ...state, selected });
          }}
          onSelectAllChange={selectAllChecked => console.log('selectAllChecked', selectAllChecked)}
          selected={state.selected}
          selectable
          model={[
            { property: 'firstName', displayName: 'First name' },
            { property: 'name', displayName: 'Name' },
            {
              property: 'age',
              displayName: 'Age',
              menuDescriptor: [{
                label: 'foo',
                // icon: <Circle />,
                onClick: () => { console.Log('clicked'); },
                // children: ,
                // type: ,
                // Link: ,
                // to: ,
                // href: ,
                // target: ,
                // isFullWidth: ,
              }],
            },
          ]}
          data={[
            { age: 123, firstName: 'foo', name: 'bar' },
            { age: 123, firstName: 'baz', name: 'foo' },
            { age: 123, firstName: 'fuz', name: 'fob' },
            { age: 123, firstName: 'voo', name: 'mar' },
            { age: 123, firstName: 'bop', name: 'vrn' },
          ]}
          sortDirections={state.sortDirections}
          defaultSortDirections={undefined}
          sortable
          onSortChange={(property, sortDirection, newSortDirections) => {
            console.log('mdx: newSortDirections', newSortDirections);
            setState({ ...state, sortDirections: newSortDirections });
          }}
        />
      )
    }
  </WithState>
);

export default ExampleSimpleDataGrid;
