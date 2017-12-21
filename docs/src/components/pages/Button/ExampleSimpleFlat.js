import React from 'react';
import { FlatButton } from 'uxi/Button';
import Ul from './Ul';

const ExampleSimpleFlat = () => (
  <Ul>
    <FlatButton text="send" />
    <FlatButton type="primary" text="SUBMIT" />
    <FlatButton type="warning" text="IGNORE" />
    <FlatButton link="https://www.google.com" type="info" text="GO BACK" />
  </Ul>
);

export default ExampleSimpleFlat;
