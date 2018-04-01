import React from 'react';
import { SlideUpInWhenInBound } from 'uxi/Motion';
import { routes } from '../../../AppShell';

const SlideUpInWhenInBoundExample = () => (
  <div>
    {
      routes.map(route => {
        return (
          <SlideUpInWhenInBound>
            <div style={{ border: '1px solid #bababa', marginBottom: '16px', padding: '32px' }}>
              <h1 style={{ marginBottom: '90px' }}>{route.label}</h1>
              <h4> a route </h4>
            </div>
          </SlideUpInWhenInBound>
        )
      })
    }
  </div>
);

export default SlideUpInWhenInBoundExample;
