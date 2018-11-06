import React from 'react';
import { FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Merge } from 'uxi/Icons';

const ExampleSimpleFlat = () => (
  <List>
    <FlatButton text="send" />
    <FlatButton type="primary" text="SUBMIT" />
    <FlatButton type="warning" text="IGNORE" />
    <FlatButton link="https://www.google.com" type="info" text="GO BACK" />
    <FlatButton disabled link="https://www.google.com" type="info" text="DISABLED LINK" />
    <FlatButton disabled type="primary" text="DISABLED" />
    <FlatButton icon={<Merge />} disabled type="primary" text="DISABLED" />
    <FlatButton iconPosition="after" icon={<Merge />} disabled type="primary" text="DISABLED" />
    <FlatButton iconPosition="after" icon={<Merge />} type="primary" text="zerfaergf" />
    <FlatButton iconPosition="after" icon={<Merge />} text="ezrg" />
  </List>
);

export default ExampleSimpleFlat;
