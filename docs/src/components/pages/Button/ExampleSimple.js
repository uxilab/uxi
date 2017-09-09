import React from 'react';
import Button from 'uxi/Button';

const ExampleSimple = () => (
  <div>
    <Button icon={<KeyArrowUp />} iconPosition="after" click={() => {
      alert('test')
    }} message="Test"/>
  </div>
);

export default ExampleSimple;
