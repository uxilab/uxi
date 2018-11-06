import React from 'react';
import { ButtonLink } from 'uxi/Button';
import { Delete, Pencil, Merge } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleSimpleFlat = () => (
  <List>
    <ButtonLink icon={<Delete />} onClick={() => { alert('test'); }} message="Delete" />
    <ButtonLink icon={<Pencil />} onClick={() => { alert('test'); }} text="Edit" />
    <ButtonLink icon={<Pencil />} onClick={() => { alert('test'); }} text="Send" />
    <ButtonLink icon={<Merge />} onClick={() => { alert('test'); }}>
      Merge
    </ButtonLink>
  </List>
);

export default ExampleSimpleFlat;
