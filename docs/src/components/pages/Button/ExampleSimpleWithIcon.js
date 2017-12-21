import React from 'react';
import { Button } from 'uxi/Button';
import { Upload, Merge, Issue } from 'uxi/Icons';
import Ul from './Ul';

const ExampleSimpleWithIcon = () => (
  <Ul>
    <Button icon={<Issue />} type="error" text="reconnect" />
    <Button icon={<Upload />} type="primary" text="Upload" />
    <Button icon={<Upload />} type="secondary" text="Upload" iconPosition="after" />
    <Button icon={<Merge />} text="Merge" iconPosition="after" />
  </Ul>
);

export default ExampleSimpleWithIcon;
