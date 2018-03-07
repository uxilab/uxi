import React from 'react';
import { Button } from 'uxi/Button';
import { Loader } from 'uxi/Indicator';
import { List } from 'uxi/List';


const ExampleSimpleWithLoaderIcon = () => (
  <List>
    <Button icon={<Loader />} disabled text="reconnecting" />
    <Button icon={<Loader />} type="primary" text="Submitting" />
  </List>
);

export default ExampleSimpleWithLoaderIcon;
