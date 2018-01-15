import React from 'react';
import DataGrid from 'uxi/DataGrid';

const ExampleSimpleDataGrid = () => {
  const data = [
      { id: 1, make: "Toyota", model: "Celica", price: 35000 },
      { id: 2, make: "Ford", model: "Mondeo", price: 32000 },
      { id: 3, make: "Porsche", model: "Boxter", price: 72000 }
  ];

  return (
      <DataGrid data={data} />
  );
};

export default ExampleSimpleDataGrid;
