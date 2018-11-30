import React from 'react';
import { Tree } from 'uxi/Input';
const ExampleSimple = () => {
  return (
    <div>
      <Tree node={{
        Id: 1,
        title: 'name',
        Name: 'name',
        childNodes: [
          { title: 'children 1', Id: 2 },
          { title: 'children 1', Id: 3 },
        ]
      }} />
    </div>
  )
};

export default ExampleSimple;
