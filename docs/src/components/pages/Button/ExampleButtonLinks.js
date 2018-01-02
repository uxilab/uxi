import React from 'react';
import { Button } from 'uxi/Button';
import Ul from './Ul';

const ExampleSimpleFlat = () => (
  <Ul>
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
  </Ul>
);

export default ExampleSimpleFlat;
