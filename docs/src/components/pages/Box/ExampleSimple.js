import React from 'react';
import { CollapsibleBox, BoxItem } from '../../../../../src/Box';

const ExampleSimple = () => (
  <div>
    <CollapsibleBox title="Example">
      <BoxItem padding="S">
        TOTO!
      </BoxItem>
      <BoxItem padding="S">
        TOTO!
      </BoxItem>
      <BoxItem padding="S">
        TOTO!
      </BoxItem>
      <BoxItem padding="S">
        TOTO!
      </BoxItem>
      <BoxItem padding="S" isLast>
        TOTO!
      </BoxItem>
    </CollapsibleBox>
  </div>
);

export default ExampleSimple;
