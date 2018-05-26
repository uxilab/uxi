import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  font-size: ${({ size, theme: { fontSizes } }) => {
    if(!size) {
      return fontSizes.h1;
    }

    const sizeText = fontSizes[size.toLowerCase()];
    if(!sizeText) {
      return fontSizes.h1;
    }
    return size;
  }};
`;

const TitleComponent = ({ text, size, children }) => {
  const content = text ? text : children;

  return <Title size={size}>{content}</Title>
};
export default TitleComponent;
