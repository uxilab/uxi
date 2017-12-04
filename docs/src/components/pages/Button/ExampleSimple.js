import React from 'react';
import { Button, FlatButton } from '../../../../../src/Button';
import { Merge } from '../../../../../src/Icons';

const ExampleSimple = () => (
  <div>
    <div>
      <FlatButton text="Test" />
    </div>
    <div>
      <Button text="Test" />
    </div>
    <div>
      <Button type="primary" text="Test" />
    </div>
    <div>
      <Button type="primary" icon={<Merge />} text="Test" />
    </div>
    <div>
      <Button type="secondary" text="Test" />
    </div>
    <div>
      <Button type="danger" text="Test" />
    </div>
    <div>
      <Button isFullWidth type="primary" text="Install" />
    </div>
    <div>
      <Button isFullWidth type="primary" text="Install" onClick={() => { window.alert('hi from onclick'); }} click={() => { window.alert('hi from click'); }} />
    </div>
    <div>
      <Button icon={<Merge />} isFullWidth type="primary" text="Install" click={() => { window.alert('hi'); }} />
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
    <div>
      <h3>disabled</h3>
      <Button disabled iconPosition="after" icon={<Merge />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </div>
    <div>
      <h3>Button of type subit in a form</h3>
      <form onSubmit={() => { window.alert('form submitted'); }}>
        <Button icon={<Merge />} type="submit" text="submit" click={() => { window.alert('hi'); }} />
      </form>
    </div>
  </div>
);

export default ExampleSimple;
