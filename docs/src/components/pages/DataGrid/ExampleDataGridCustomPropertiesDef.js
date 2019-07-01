import React from 'react';
import DataGrid from 'uxi/DataGrid';
import {
  Process,
} from 'uxi/Icons';


const ExampleDataGridCustomPropertiesDef = () => {
  const data = [
    { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
  ];

  const properties = [{
    property: 'make',
    displayName: 'Brand',
    menuItems: [{
      onClick: () => {
        console.log('clicked');
      },
      icon: <Process size={16} />,
      label: 'only me',
      children: [{
        onClick: () => {
          console.log('clicked children');
        },
        // icon: <Process size={16} />,
        label: 'only me\'s children',
      }],
    }],
  }, {
    property: 'model',
    displayName: 'Model',
    extraMenuItems: [{
      onClick: () => {
        console.log('clicked');
      },
      icon: <Process size={16} />,
      label: 'user defined',
    }],
  }, {
    isSortable: true,
    property: 'price',
    displayName: 'Price',
  }];

  return (
    <DataGrid
      data={data}
      properties={properties}
      // actions={[
      //   {
      //     displayName: 'Keep in he loop',
      //     key: 'Keep in the loop',
      //     icon: <Keepintheloop />,
      //     onClick: (e, value) => {
      //       alert(JSON.stringify(value));
      //     },
      //     isPromoted: true,
      //   },
      // ]}
    />
  );
};

export default ExampleDataGridCustomPropertiesDef;
