import React from 'react';
import DataGrid from 'uxi/DataGrid';
import TypeProvider from 'uxi/Business/TypeProvider';
import { ProgressBar } from 'uxi/Indicator';

const RenderBoolean = ({ value }) => {
  if (value) {
    return (
      <div>True</div>
    );
  }

  return (
    <div>False</div>
  );
};

const QuantityViewer = ({ value }) => (
  <ProgressBar min={0} max={10} value={value} />
);

const CarFullName = ({ entity }) => (
  <div>{entity.make} {entity.model}</div>
);

const ReviewScore = ({ value }) => {
  return (
    <div>
      Score: {value.test}
    </div>
  )
};

const ExampleSimpleDataGridComputedProperty = () => {
  const data = [
    { id: 1, make: 'Toyota', model: 'Celica', price: 35000, isSold: true, options: { test: '2' } },
    { id: 2, make: 'Ford', model: 'Mondeo', price: 32000, isSold: true, options: { test: '2' } },
    { id: 3, make: 'Porsche', model: 'Boxter', price: 72000, isSold: false, options: { test: '2' } },
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
          'price',
          {
            property: 'isSold',
            displayName: 'Sold',
          },
          {
            property: 'options',
            displayName: 'Review Score',
            Component: ReviewScore,
          }
        ]}
        data={data}
      />
    </TypeProvider>
  );
};

export default ExampleSimpleDataGridComputedProperty;
