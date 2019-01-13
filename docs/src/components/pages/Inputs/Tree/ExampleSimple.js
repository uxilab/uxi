import React from 'react';
import { Tree } from 'uxi/Input';

const TreeData = {
  id: 1,
  title: 'name',
  Name: 'name',
  childNodes: [
    {
      title: 'children 1',
      id: 2,
      isChecked: true,
    },
    {
      title: 'children 1',
      id: 3,
      childNodes: [
        {
          title: 'children 4',
          id: 4,
          isChecked: true,
        },
        {
          title: 'children 5',
          id: 5,
          childNodes: [
            {
              title: 'children 6',
              id: 6,
              isChecked: true,
            },
          ],
        },
      ],
    },
  ],
};

const ExampleSimple = () => (
  <div>
    <Tree
      onChange={(n, ids) => {
        alert(JSON.stringify(ids));
      }}
      rootNode={TreeData}
    />
  </div>
);

export default ExampleSimple;
