import React from 'react';
import { Button } from 'uxi/Button';
import Ul from './Ul';

const ExampleSimpleSemantic = () => (
  <Ul>
    <Button type="error" text="error" />
    <Button type="primary" text="primary" />
    <Button type="secondary" text="secondary" />
    <Button type="warning" text="warning" />
    <Button type="info" text="info" />
    <Button type="success" text="success" />
  </Ul>
);

export default ExampleSimpleSemantic;
