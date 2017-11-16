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
    <div>
      <Button isFullWidth type="primary" text="Install" onClick={() => { window.alert('hi from onclick'); }} click={() => { window.alert('hi from click'); }} />
    </div>
    <div>
      <Button isFullWidth type="primary" text="Install" click={() => { window.alert('hi'); }} />
    </div>
  </div>
);

export default ExampleSimple;
