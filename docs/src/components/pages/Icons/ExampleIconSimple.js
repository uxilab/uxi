import React from 'react';
import {
  Organization,
} from 'uxi/Icons';

const ExampleIconSimple = () => (
  <div style={{ margin: '1.5em' }}>
    <Organization size="156" />
    <br />
    <Organization size="48" />
    <br />
    <Organization />
    <br />
    <Organization color="blue" hoverColor="green"/>
  </div>
);

export default ExampleIconSimple;
