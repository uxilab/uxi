import React from 'react';
import { Button } from 'uxi/Button';
import { Done } from 'uxi/Icons';
import { List } from 'uxi/List';

const ExampleSimpleSemanticDisabled = () => (
  <List>
    <Button disabled type="error" text="error" />
    <Button disabled type="primary" text="primary" />
    <Button disabled type="secondary" text="secondary" />
    <Button disabled type="warning" text="warning" />
    <Button disabled type="info" text="info" />
    <Button disabled type="success" text="success" />
    <Button disabled text="success" link="http://google.com" icon={<Done />} />

    <Button disabled icon={<Done />} type="error" text="error" iconPosition="after" />
    <Button disabled icon={<Done />} type="primary" text="primary" iconPosition="after" />
    <Button disabled icon={<Done />} type="secondary" text="secondary" iconPosition="after" />
    <Button disabled icon={<Done />} type="warning" text="warning" iconPosition="after" />
    <Button disabled icon={<Done />} type="info" text="info" />
    <Button disabled icon={<Done />} type="success" text="success" />
    <Button disabled icon={<Done />} text="success" link="http://google.com" icon={<Done />} />
  </List>
);

export default ExampleSimpleSemanticDisabled;
