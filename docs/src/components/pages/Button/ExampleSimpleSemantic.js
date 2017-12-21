import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../src/Button';
import { Upload } from '../../../../../src/Icons';

const Li = styled.li`
  display: inline;
  padding: 0 8px 0 0;
`;

const ExampleSimpleSemantic = () => (
  <ul>
    <Li>
      <Button text="default" iconPosition="after" />
    </Li>
    <Li>
      <Button type="error" text="error" />
    </Li>
    <Li>
      <Button type="primary" text="primary" />
    </Li>
    <Li>
      <Button type="secondary" text="secondary" />
    </Li>
    <Li>
      <Button type="warning" text="warning" iconPosition="after" />
    </Li>
    <Li>
      <Button type="info" text="info" iconPosition="after" />
    </Li>
  </ul>
);

export default ExampleSimpleSemantic;
