import React from 'react';
import Spacer from 'uxi/Spacer';

const ExampleSimple = () => {
  return (
    <div>
    <Spacer padding="xl" style={{ background: 'green' }}>
      <Spacer padding="stack-m" style={{ background: 'red' }}>
        padding: stack-m
      </Spacer>
      <Spacer padding="stack-xl" style={{ background: 'blue' }}>
        padding: stack-xl
      </Spacer>
      <Spacer padding="s" style={{ background: 'black' }}>
        <Spacer margin="s" style={{ background: 'white' }}>
          nested spacer
        </Spacer>
      </Spacer>
    </Spacer>
    </div>
  )
};

export default ExampleSimple;
