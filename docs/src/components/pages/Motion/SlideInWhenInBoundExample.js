import React from 'react';
import { SlideInWhenInBound } from 'uxi/Motion';
import { routes } from '../../../ComponentShell';

const SlideInWhenInBoundExample = () => (
  <div>
    {
      routes && routes.map((route, i) => {
        return (
          <SlideInWhenInBound anchor={i % 2 === 0 ? 'right' : 'left' }>
            <div style={{ border: '1px solid #bababa', marginBottom: '16px', padding: '32px' }}>
              <h1 style={{ marginBottom: '90px' }}>{route.label}</h1>
              <h4> a route </h4>
            </div>
          </SlideInWhenInBound>
        )
      })
    }
  </div>
);

export default SlideInWhenInBoundExample;
