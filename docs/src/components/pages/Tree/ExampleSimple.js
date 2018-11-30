import React from 'react';
import { Tree } from 'uxi/Input';

const TreeData = {
  Id: 1,
  title: 'name',
  Name: 'name',
  childNodes: [
    {
      title: 'children 1',
      Id: 2,
      isChecked: true,
    },
    {
      title: 'children 1',
      Id: 3,
      childNodes: [
        {
          title: 'children 4',
          Id: 4,
          isChecked: true,
        },
        {
          title: 'children 5',
          Id: 5,
        },
      ]
    },
  ]
}

const ExampleSimple = () => {
  return (
    <div>
      <Tree
        onSelect={(n) => {
          
        }}
        defaultNode={TreeData}
      />
    </div>
  )
};

export default ExampleSimple;
