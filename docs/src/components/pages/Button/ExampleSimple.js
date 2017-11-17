import React from 'react';
import Button from '../../../../../src/Button/Button';
import { Merge } from '../../../../../src/Icons';

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
    <div>
      <Button type="danger" text="Install" click={() => { window.alert('hi'); }} />
    </div>
    <div>
      <Button type="success" text="Install" click={() => { window.alert('hi'); }} />
    </div>
    <div>
      <Button icon={<Merge />} type="warning" text="Install" click={() => { window.alert('hi'); }} />
    </div>
    <div>
      <Button icon={<Merge size="14" />} type="danger" text="Install" click={() => { window.alert('hi'); }} />
    </div>
    <div>
      <Button icon={<Merge size="18" />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </div>
    <div>
      <Button iconPosition="after" icon={<Merge />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </div>
  </div>
);

export default ExampleSimple;
