import React from 'react';
import { Button } from 'uxi/Button';
import { Loader } from 'uxi/Indicator';
import Ul from './Ul';

const ExampleSimpleWithLoaderIcon = () => (
  <Ul>
    <Button icon={<Loader />} disabled text="reconnecting" />
    <Button icon={<Loader />} type="primary" text="Submitting" />
  </Ul>
);

export default ExampleSimpleWithLoaderIcon;
