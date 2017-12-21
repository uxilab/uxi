import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../../src/Button';
import { Upload, Issue } from '../../../../../src/Icons';

const Li = styled.li`
  display: inline;
  padding: 0 8px 0 0;
`;

const ExampleSimpleWithLoaderIcon = () => (
  <ul>
    <Li>
      <Button icon={<Issue />} type="error" text="reconnect" />
    </Li>
    <Li>
      <Button icon={<Upload />} type="primary" text="Upload" />
    </Li>
  </ul>
);

export default ExampleSimpleWithLoaderIcon;
