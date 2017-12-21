import React from 'react';
import { Button, FlatButton } from '../../../../../src/Button';
import { Merge } from '../../../../../src/Icons';

const ExampleSimple = () => (
  <ul>
    <li>
      <Button text="Test" />
    </li>
    <li>
      <Button icon={<Merge />} text="Test" />
    </li>
    <li>
      <Button type="primary" text="Test" />
    </li>
    <li>
      <Button type="primary" icon={<Merge />} text="Test" />
    </li>
    <li>
      <Button type="secondary" text="Test" />
    </li>
    <li>
      <Button type="error" text="Test" />
    </li>
    <li>
      <Button isFullWidth type="primary" text="Install" />
    </li>
    <li>
      <Button isFullWidth type="primary" text="Install" onClick={() => { window.alert('hi from onclick'); }} click={() => { window.alert('hi from click'); }} />
    </li>
    <li>
      <Button icon={<Merge />} isFullWidth type="primary" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <Button type="error" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <Button type="success" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <Button icon={<Merge />} type="warning" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <Button icon={<Merge size="14" />} type="error" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <Button icon={<Merge size="18" />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <Button iconPosition="after" icon={<Merge />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <h3>disabled</h3>
      <Button disabled iconPosition="after" icon={<Merge />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <h3>info</h3>
      <Button iconPosition="after" icon={<Merge />} type="info" text="ima button" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <h3>disabled</h3>
      <Button disabled text="Install" click={() => { window.alert('hi'); }} />
    </li>
    <li>
      <h3>Button of type subit in a form</h3>
      <form onSubmit={() => { window.alert('form submitted'); }}>
        <Button icon={<Merge />} type="submit" text="submit" click={() => { window.alert('hi'); }} />
      </form>
    </li>
  </ul>
);

export default ExampleSimple;
