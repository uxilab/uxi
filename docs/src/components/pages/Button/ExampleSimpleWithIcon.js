import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../src/Button';
import { Upload, Merge, Issue } from '../../../../../src/Icons';

const Li = styled.li`
  display: inline;
  padding: 0 8px 0 0;
`;

const ExampleSimpleWithIcon = () => (
  <ul>
    <Li>
      <Button icon={<Issue />} type="error" text="reconnect" />
    </Li>
    <Li>
      <Button icon={<Upload />} type="primary" text="Upload" />
    </Li>
    <Li>
      <Button icon={<Upload />} type="secondary" text="Upload" iconPosition="after" />
    </Li>
    <Li>
      <Button icon={<Merge />} text="Merge" iconPosition="after" />
    </Li>
  </ul>
);

export default ExampleSimpleWithIcon;
