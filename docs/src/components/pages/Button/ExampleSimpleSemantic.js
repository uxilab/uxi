import React from 'react';
import { Button } from 'uxi/Button';
import { Done } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleSimpleSemantic = () => (
  <List>
    <Button type="error" text="error" />
    <Button type="primary" text="primary" />
    <Button type="secondary" text="secondary" />
    <Button type="warning" text="warning" />
    <Button type="info" text="info" />
    <Button type="success" text="success" />
    <Button text="success" link="http://google.com" icon={<Done />}/>
  </List>
);

export default ExampleSimpleSemantic;
