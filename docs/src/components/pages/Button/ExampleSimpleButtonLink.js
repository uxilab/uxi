import React from 'react';
import { ButtonLink } from 'uxi/Button';
import { Delete, Pencil } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleSimpleFlat = () => (
    <List>
      <ButtonLink icon={<Delete />} onClick={() => {alert('test')}} text="Delete" />
      <ButtonLink icon={<Pencil />} onClick={() => {alert('test')}} text="Edit" />
      <ButtonLink icon={<Pencil />} onClick={() => {alert('test')}} text="Send" />
    </List>
);

export default ExampleSimpleFlat;
