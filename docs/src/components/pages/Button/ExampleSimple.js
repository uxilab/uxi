import React from 'react';
import Button from '../../../../../src/Button/Button';

const ExampleSimple = () => (
  <div>
    <div>
      <Button text="Test" />
    </div>
    <div>
      <Button type="primary" text="Test" />
    </div>
    <div>
      <Button type="secondary" text="Test" />
    </div>
    <div>
      <Button isFullWidth type="primary" text="Install" />
    </div>
  </div>
);

export default ExampleSimple;
