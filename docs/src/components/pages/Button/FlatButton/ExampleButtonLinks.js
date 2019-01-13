import React from 'react';
import { FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';

const ExampleSimpleFlat = () => (
  <List>
    <FlatButton link="#" text="send" />
    <FlatButton link="#" type="primary" text="SUBMIT" />
    <FlatButton link="#" type="warning" text="IGNORE" />
    <FlatButton link="#" type="info" text="GO BACK" />
    <FlatButton
      type="primary"
      link="http://google.com"
      click={() => { }}
      message="Add Configuration"
    />
  </List>
);

export default ExampleSimpleFlat;
