import React from 'react';
import DataGrid from 'uxi/DataGrid';
import {
  Keepintheloop,
} from 'uxi/Icons';

const ExampleSimpleDataGrid = () => {
  const data = [
      { id: 1, make: "Toyota", model: "Celica", price: 35000 },
      { id: 2, make: "Ford", model: "Mondeo", price: 32000 },
      { id: 3, make: "Porsche", model: "Boxter", price: 72000 }
  ];

  return (
      <DataGrid
        data={data}
        actions={[
          {
            displayName: 'Keep in he loop',
            key: 'Keep in the loop',
            icon: <Keepintheloop />,
            onClick: (e, value) => { alert(JSON.stringify(data)); },
            isPromoted: true,
          },
        ]}
      />
  );
};

export default ExampleSimpleDataGrid;
