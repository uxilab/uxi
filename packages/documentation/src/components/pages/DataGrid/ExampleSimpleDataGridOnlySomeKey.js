import React from 'react';
import DataGrid from 'uxi/DataGrid';

const ExampleSimpleDataGridOnlySomeKey = () => {
  const data = [
      { id: 1, make: "Toyota", model: "Celica", price: 35000, quantity: 232, },
      { id: 2, make: "Ford", model: "Mondeo", price: 32000, quantity: 392, },
      { id: 3, make: "Porsche", model: "Boxter", price: 72000, quantity: 939, }
  ];

  return (
      <DataGrid
        data={data}
        propertyKey='id'
        properties={['make', 'model', 'price' , 'quantity']}
      />
  );
};

export default ExampleSimpleDataGridOnlySomeKey;
