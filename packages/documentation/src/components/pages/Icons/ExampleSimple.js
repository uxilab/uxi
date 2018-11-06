import React from 'react';
import {
  Organization,
} from 'uxi/Icons';

const ExampleSimple = () => (
  <div>
    <Organization />
    <br />
    <Organization color="blue" />
    <br />
    <Organization hoverColor="red" />
    <br />
    <Organization
      style={{ padding: '16px', borderRadius: '50%', border: '1px solid grey' }}
    />
    <br />
    hover me :
    <br />
    <Organization onMouseEnter={() => alert('mouse entered')} />
    <br />
    <Organization onMouseLeave={() => alert('mouse leaved')} />
  </div>
);

export default ExampleSimple;
