import React from 'react';
import { OutlineButton, FlatButton, Button, UnstyledButton } from 'uxi/Button';
import UnstyledButtonBeta from 'uxi/Button/UnstyledButton1';
import { Delete, Pencil, Merge, Start } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleUnstyledButton = () => (
  <List style={{ background: 'blue' }}>
    <br />
    <OutlineButton icon={<Delete />} onClick={() => { alert('test'); }} message="Delete" />
    <br />
    <FlatButton icon={<Delete />} onClick={() => { alert('test'); }} message="Delete" />
    <br />
    <Button icon={<Delete />} onClick={() => { alert('test'); }} message="Delete" />
    <br />
    <UnstyledButtonBeta icon={<Delete />} onClick={() => { alert('test'); }} text="Delete" />
    <br />
    <UnstyledButton icon={<Delete />} onClick={() => { alert('test'); }} message="Delete">Delete</UnstyledButton>>
  </List>
);

export default ExampleUnstyledButton;
