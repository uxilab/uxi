import React from 'react';
import {
  Organization,
} from 'uxi/Icons';
import {
  Spacer
} from 'uxi/Base';
import {
  H4
} from 'uxi/Classic';

const ColorSimple = () => (
  <Spacer padding="m">
    <H4>Custom Size</H4>
    <Organization size="32" />
    <H4>Custom Colors</H4>
    <Organization color="blue" />
    <H4>Custom Hover Colors</H4>
    <Organization hoverColor="red" />
    <H4>Custom Style</H4>
    <Organization
      style={{
        padding: '16px',
        borderRadius: '50%',
        border: '1px solid grey'
      }}
    />
  </Spacer>
);

export default ColorSimple;
