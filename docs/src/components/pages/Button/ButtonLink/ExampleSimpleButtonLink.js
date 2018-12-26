import React from 'react';
import { ButtonLink } from 'uxi/Button';
import { Delete, Pencil, Merge, Play } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleSimpleButtonLink = () => (
  <List>
    <ButtonLink icon={<Delete />} onClick={() => { alert('test'); }} message="Delete" />
    <br />
    <ButtonLink icon={<Pencil />} onClick={() => { alert('test'); }} text="Edit" />
    <br />
    <ButtonLink iconAfter icon={<Play />} onClick={() => { alert('test'); }} text="play" />
    <br />
    <ButtonLink icon={<Merge />} onClick={() => { alert('test'); }}>
      Merge
    </ButtonLink>
    <br />
  </List>
);

export default ExampleSimpleButtonLink;
