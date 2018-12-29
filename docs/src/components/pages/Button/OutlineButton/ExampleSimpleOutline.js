import React from 'react';
import { OutlineButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Merge, Filter, Markasunsensitive, Options } from 'uxi/Icons';

const ExampleSimpleOutline = () => (
  <List>
    <OutlineButton icon={<Filter />} type="info" />
    <OutlineButton icon={<Markasunsensitive />} type="warning" />
    <OutlineButton icon={<Options />} />
    <OutlineButton text="send" />
    <OutlineButton type="primary" text="SUBMIT" />
    <OutlineButton disabled link="#" type="info" text="DISABLED LINK" />
    <OutlineButton iconPosition="after" icon={<Merge />} disabled type="primary" text="DISABLED" />
    <OutlineButton type="warning" text="IGNORE" />
    <OutlineButton link="#" type="info" text="GO BACK" />
    <OutlineButton icon={<Merge />} disabled type="primary" text="DISABLED" />
    <OutlineButton iconPosition="after" icon={<Merge />} type="primary" text="zerfaergf" />
    <OutlineButton disabled type="primary" text="DISABLED" />
    <OutlineButton iconPosition="after" icon={<Merge />} text="ezrg" />
  </List>
);

export default ExampleSimpleOutline;
