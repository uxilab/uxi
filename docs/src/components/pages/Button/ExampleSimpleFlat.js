import React from 'react';
import styled from 'styled-components';
import { FlatButton } from '../../../../../src/Button';
import { Merge } from '../../../../../src/Icons';

const Li = styled.li`
  display: inline;
  padding: 0 8px 0 0;
`;

const ExampleSimpleFlat = () => (
  <ul>
    <Li>
      <FlatButton text="send" />
    </Li>
    <Li>
      <FlatButton type="primary" text="SUBMIT" />
    </Li>
    <Li>
      <FlatButton type="warning" text="IGNORE" />
    </Li>
  </ul>
);

export default ExampleSimpleFlat;
