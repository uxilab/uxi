import React from 'react';
import { CollapsableBox, BoxItem } from 'uxi/Box';

const ExampleSimple = () => (
  <div>
    <CollapsableBox title="Example">
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
    </CollapsableBox>
  </div>
);

export default ExampleSimple;
