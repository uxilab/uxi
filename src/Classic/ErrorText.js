import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.span`
  font-size: ${({ size, theme: { fontSizes } }) => {
    if(!size) {
      return fontSizes.medium;
    }

    const sizeText = fontSizes[size.toLowerCase()];
    if(!sizeText) {
      return fontSizes.medium;
    }
    return size;
  }};
  color: ${({ theme }) => (theme.palette.semantic.danger)};
`;

export default ErrorText;
