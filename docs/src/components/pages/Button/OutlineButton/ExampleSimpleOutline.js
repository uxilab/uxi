import React from 'react';
import { OutlineButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Merge } from 'uxi/Icons';

const ExampleSimpleOutline = () => (
  <List>
    <OutlineButton text="send" />
    <OutlineButton type="primary" text="SUBMIT" />
    <OutlineButton disabled link="https://www.google.com" type="info" text="DISABLED LINK" />
    <OutlineButton iconPosition="after" icon={<Merge />} disabled type="primary" text="DISABLED" />
    <OutlineButton type="warning" text="IGNORE" />
    <OutlineButton link="https://www.google.com" type="info" text="GO BACK" />
    <OutlineButton icon={<Merge />} disabled type="primary" text="DISABLED" />
    <OutlineButton iconPosition="after" icon={<Merge />} type="primary" text="zerfaergf" />
    <OutlineButton disabled type="primary" text="DISABLED" />
    <OutlineButton iconPosition="after" icon={<Merge />} text="ezrg" />
  </List>
);

export default ExampleSimpleOutline;
