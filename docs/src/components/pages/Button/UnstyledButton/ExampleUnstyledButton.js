import React from 'react';
import { OutlineButton, FlatButton, Button, UnstyledButton } from 'uxi/Button';
import UnstyledButtonBeta from 'uxi/Button/UnstyledButton1';
import { Delete, Pencil, Merge, Start } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleUnstyledButton = () => (
  <div style={{ background: 'blue' }}>
    <br />
    <UnstyledButtonBeta iconAfter icon={<Delete />} onClick={() => { console.log('clicked'); }} text="Delete" />
    <br />
    <UnstyledButtonBeta icon={<Delete />} onClick={() => { console.log('clicked'); }} />
    <br />
    <UnstyledButtonBeta onClick={() => { console.log('clicked'); }} text="delete" />
    <br />
    <UnstyledButtonBeta onClick={() => { console.log('clicked'); }} >
      <div>Hi</div>
    </UnstyledButtonBeta>
    <br />
  </div>
);

export default ExampleUnstyledButton;
