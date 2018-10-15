import React from 'react';
import { SimpleGrid, Flex } from 'uxi/Layout';

const ExampleSimpleGrid = () => (
  <div>
    <SimpleGrid
      gap={16}
      itemWidth={90}
      itemHeight={180}
    >
      {[...Array(21)].map((_, i) => (
        <Flex style={{ background: '#cecece' }} >
          <h3>{i}</h3>
        </Flex>
      ))}
    </SimpleGrid>

    <br />
    <br />

    <SimpleGrid
      gap={16}
      itemWidth={200}
      itemHeight={140}
    >
      {[...Array(21)].map((_, i) => (
        <div style={{ background: '#cecece' }} >
          <h3>{i}</h3>
        </div>
      ))}
    </SimpleGrid>
  </div>
);

export default ExampleSimpleGrid;
