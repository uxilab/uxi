import React from 'react';
import { Flex } from 'uxi/Layout';
import { FlatButton } from 'uxi/Button';

const ExampleFlex = () => (
  <div style={{ width: '40vw', height: '200px', border: '1px solid grey' }}>
    <Flex style={{ height: '100%' }}>
      <FlatButton type='error' > click me </FlatButton>
    </Flex>
  </div>
);

export default ExampleFlex;
