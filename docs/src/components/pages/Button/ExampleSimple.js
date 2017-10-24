import React from 'react';
import Button from 'uxi/Button';

const ExampleSimple = () => (
  <div>
    <p>
      <Button text="Test" />
    </p>
    <p>
      <Button type="primary" text="Test" />
    </p>
    <p>
      <Button type="secondary" text="Test" />
    </p>
    <p>
      <Button isFullWidth type="primary" text="Install" />
    </p>
  </div>
);

export default ExampleSimple;
