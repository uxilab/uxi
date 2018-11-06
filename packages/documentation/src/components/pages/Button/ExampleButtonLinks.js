import React from 'react';
import { Button } from 'uxi/Button';
import { List } from 'uxi/List';

const ExampleSimpleFlat = () => (
  <List>
    <Button link="http://google.com" text="send" />
    <Button link="http://google.com" type="primary" text="SUBMIT" />
    <Button link="http://google.com" type="warning" text="IGNORE" />
    <Button link="http://google.com" link="https://www.google.com" type="info" text="GO BACK" />
    <Button
      type="primary"
      link="http://google.com"
      click={() => { }}
      message="Add Configuration"
    />
  </List>
);

export default ExampleSimpleFlat;
