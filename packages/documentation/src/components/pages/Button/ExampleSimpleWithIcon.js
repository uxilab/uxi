import React from 'react';
import { Button } from 'uxi/Button';
import { Upload, Merge, Issue } from 'uxi/Icons';
import { List } from 'uxi/List';


const ExampleSimpleWithIcon = () => (
  <List>
    <Button icon={<Issue />} type="error" text="reconnect" />
    <Button icon={<Upload />} type="primary" text="Upload" />
    <Button icon={<Upload />} type="secondary" text="Upload" iconPosition="after" />
    <Button icon={<Merge />} text="Merge" iconPosition="after" />
  </List>
);

export default ExampleSimpleWithIcon;
