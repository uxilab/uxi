import React from 'react';
import styled from 'styled-components';
import { Button, FlatButton } from '../../../../../src/Button';
import { Merge } from '../../../../../src/Icons';
import Loader from '../../../../../src/Indicator/Loader';

const Li = styled.li`
  padding: 8px
`;

const ExampleSimple = () => (
  <ul>
    <Li>
      <FlatButton text="Test" />
    </Li>
    <Li>
      <FlatButton type="primary" text="Test" />
    </Li>
    <Li>
      <Button text="Test" />
    </Li>
    <Li>
      <Button icon={<Merge />} text="Test" />
    </Li>
    <Li>
      <Button icon={<Loader />} text="Test" />
    </Li>
    <Li>
      <Button type="primary" icon={<Loader />} text="Test" />
    </Li>
    <Li>
      <Button type="primary" text="Test" />
    </Li>
    <Li>
      <Button type="primary" icon={<Merge />} text="Test" />
    </Li>
    <Li>
      <Button type="secondary" text="Test" />
    </Li>
    <Li>
      <Button type="error" text="Test" />
    </Li>
    <Li>
      <Button isFullWidth type="primary" text="Install" />
    </Li>
    <Li>
      <Button isFullWidth type="primary" text="Install" onClick={() => { window.alert('hi from onclick'); }} click={() => { window.alert('hi from click'); }} />
    </Li>
    <Li>
      <Button icon={<Merge />} isFullWidth type="primary" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <Button type="error" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <Button type="success" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <Button icon={<Merge />} type="warning" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <Button icon={<Merge size="14" />} type="error" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <Button icon={<Merge size="18" />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <Button iconPosition="after" icon={<Merge />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <h3>disabled</h3>
      <Button disabled iconPosition="after" icon={<Merge />} type="success" text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <h3>info</h3>
      <Button iconPosition="after" icon={<Merge />} type="info" text="ima button" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <h3>disabled</h3>
      <Button disabled text="Install" click={() => { window.alert('hi'); }} />
    </Li>
    <Li>
      <h3>Button of type subit in a form</h3>
      <form onSubmit={() => { window.alert('form submitted'); }}>
        <Button icon={<Merge />} type="submit" text="submit" click={() => { window.alert('hi'); }} />
      </form>
    </Li>
  </ul>
);

export default ExampleSimple;
