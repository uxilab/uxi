import React from 'react';
import { FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Add, Merge, Download, Followentities, Delete, Options } from 'uxi/Icons';

const ExampleSimpleFlat = () => (
  <List>
    <FlatButton icon={<Add />} />
    <FlatButton icon={<Options />} />
    <FlatButton icon={<Download />} type="info" />
    <FlatButton icon={<Followentities />} type="primary" />
    <FlatButton icon={<Delete />} type="error" />
    <FlatButton icon={<Delete />} />
    <FlatButton icon={<Delete />} disabled />
    <FlatButton icon={<Delete />} text="Delete" />
    <FlatButton icon={<Delete />} disabled text="Delete" />
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
