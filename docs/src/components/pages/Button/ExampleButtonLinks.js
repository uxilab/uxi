import React from 'react';
import { Button } from 'uxi/Button';
import { List } from 'uxi/List';

const ExampleSimpleFlat = () => (
  <List>
    <Button link="#" text="send" />
    <Button link="#" type="primary" text="SUBMIT" />
    <Button link="#" type="warning" text="IGNORE" />
    <Button link="#" type="info" text="GO BACK" />
    <Button
      type="primary"
      link="#"
      click={() => { }}
      message="Add Configuration"
    />
  </List>
);

export default ExampleSimpleFlat;
