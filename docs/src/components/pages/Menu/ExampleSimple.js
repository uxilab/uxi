import React from 'react';
import HorizontalMenu from 'uxi/Menu/HorizontalMenu';
import VerticalMenu from 'uxi/Menu/VerticalMenu';

const ExampleSimple = () => (
  <div>
    <h3>Horizontal menu:</h3>
    <HorizontalMenu>
      <ul>
        <li>stuff goes here</li>
        <li>and here</li>
        <li>or here</li>
      </ul>
    </HorizontalMenu>

    <h3>VerticalMenu menu:</h3>
    <VerticalMenu>
      <ul>
        <li>stuff goes here</li>
        <li>and here</li>
        <li>or here</li>
      </ul>
    </VerticalMenu>
  </div>
);

export default ExampleSimple;
