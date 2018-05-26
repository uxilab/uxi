import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  margin: ${({ theme: { spacing } }) => spacing.m} 0px;
  color: ${({ theme: { fontColors }}) => fontColors.body };
`;

export default P;
