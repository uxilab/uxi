import React from 'react';
import DataGrid from 'uxi/DataGrid';
import TypeProvider from 'uxi/Business/TypeProvider';
import { ProgressBar } from 'uxi/Indicator';

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

const CarFullName = ({ entity }) => {
  return (
    <div>{entity.make} {entity.model}</div>
  )
};

const ExampleSimpleDataGridComputedProperty = () => {
  const data = [
      { id: 1, make: "Toyota", model: "Celica", price: 35000, isSold: true },
      { id: 2, make: "Ford", model: "Mondeo", price: 32000, isSold: true },
      { id: 3, make: "Porsche", model: "Boxter", price: 72000, isSold: false }
  ];
  const types = [{
    type: 'boolean',
    Component: RenderBoolean,
  }];

  return (
    <TypeProvider types={types}>
      <DataGrid
        propertyKey='id'
        properties={[
          {
            isComputed: true,
            property: 'fullName',
            displayName: 'Car Model',
            Component: CarFullName,
          },
          'price' ,
          {
            property: 'isSold',
            displayName: 'Sold',
          },
        ]}
        data={data}
      />
    </TypeProvider>
  );
};

export default ExampleSimpleDataGridComputedProperty;
