import React from 'react';
import DataGrid from 'uxi/DataGrid';
import TypeProvider from 'uxi/Business/TypeProvider';
import { ProgressBar } from 'uxi/Indicator';
import { Delete, Pencil } from 'uxi/Icons';

const RenderBoolean = ({ value }) => {
  if(value) {
    return (
      <div>True</div>
    );
  }

  return (
    <div>False</div>
  );
};

const QuantityViewer = ({ value }) => {
  return (
    <ProgressBar min={0} max={10} value={value} />
  );
};

const ExampleSimpleDataGridWithCustomType = () => {
  const data = [
      { id: 1, make: "Toyota", model: "Celica", price: 35000, isSold: true, quantity: 0 },
      { id: 2, make: "Ford", model: "Mondeo", price: 32000, isSold: true,  quantity: 2 },
      { id: 3, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 4, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 5, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 6, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 7, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 8, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 9, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 10, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 11, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 12, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 13, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 14, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 15, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 16, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 17, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 18, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 19, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 20, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 21, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 22, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 23, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },
      { id: 24, make: "Porsche", model: "Boxter", price: 72000, isSold: false,  quantity: 9 },

  ];
  const types = [{
    type: 'boolean',
    Component: RenderBoolean,
  }];

  const deleteSelection = (e, selection) => {
    alert(JSON.stringify(selection));
  };

  return (
    <TypeProvider types={types}>
      <DataGrid
        selectable
        multiSelectable
        propertyKey='id'
        batchActions={[
          {
            icon: <Delete />,
            label: 'Delete',
            onClick: deleteSelection,
          },
          {
            icon: <Pencil />,
            label: 'Edit',
            onClick: deleteSelection,
          }
        ]}
        actions={[
          {
            icon: <Pencil />,
            label: 'Edit',
            onClick: deleteSelection,
          }
        ]}
        ]}
        properties={[
          'make',
          'model',
          'price' ,
          {
            property: 'isSold',
            displayName: 'Sold',
            isSortable: true,
          },
          {
            property: 'quantity',
            displayName: 'stock',
            Component: QuantityViewer,
          }
        ]}
        data={data}
      />
    </TypeProvider>
  );
};

export default ExampleSimpleDataGridWithCustomType;
