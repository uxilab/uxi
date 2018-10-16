import React from 'react';
import { Grid, Flex } from 'uxi/Layout';

const ExampleSimpleGrid = () => (
  <div>
    <Grid
      gap={16}
      itemWidth={90}
      itemHeight={180}
    >
      {[...Array(21)].map((_, i) => (
        <Flex style={{ background: '#cecece' }} >
          <h3>{i}</h3>
        </Flex>
      ))}
    </Grid>

    <br />
    <br />

    <Grid
      gap={16}
      itemWidth={200}
      itemHeight={140}
    >
      {[...Array(21)].map((_, i) => (
        <div style={{ background: '#cecece' }} >
          <h3>{i}</h3>
        </div>
      ))}
    </Grid>
  </div>
);

export default ExampleSimpleGrid;
