import React from 'react';
import { FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';

const ExampleSimpleFlat = () => (
  <List>
    <FlatButton text="send" />
    <FlatButton type="primary" text="SUBMIT" />
    <FlatButton type="warning" text="IGNORE" />
    <FlatButton link="https://www.google.com" type="info" text="GO BACK" />
  </List>
);

export default ExampleSimpleFlat;
