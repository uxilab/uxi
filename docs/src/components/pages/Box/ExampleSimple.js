import React from 'react';
import { CollapsibleBox, CollapsibleBox2, BoxItem, BoxItem2 } from '../../../../../src/Box';

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

    <br />

    <CollapsibleBox2 title="Example">
      <BoxItem2 padding="S">
        TOTO!
      </BoxItem2>
      <BoxItem2 padding="S">
        TOTO!
      </BoxItem2>
      <BoxItem2 padding="S">
        TOTO!
      </BoxItem2>
      <BoxItem2 padding="S">
        TOTO!
      </BoxItem2>
      <BoxItem2 padding="S" isLast>
        TOTO!
      </BoxItem2>
    </CollapsibleBox2>
  </div>
);

export default ExampleSimple;
