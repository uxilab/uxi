import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: ${({ size, type, theme: { fontSizes } }) => {
    if(!size) {
      return fontSizes.m;
    }

    if(type === 'caption') {
      return fontSizes.s;
    }

    if(type === 'heading') {
      return fontSizes.h2;
    }

    const sizeText = fontSizes[size.toLowerCase()];
    if(!sizeText) {
      return fontSizes.m;
    }

    return sizeText;
  }};
  color: ${({ type, theme: { fontColors } }) => {
    if(type && type.toLowerCase() === 'caption') {
      return fontColors.caption;
    }

    if(type && (type.toLowerCase() === 'title' || type.toLowerCase() === 'heading')) {
      return fontColors.caption;
    }

    if(type && type.toLowerCase() === 'disabled') {
      return fontColors.disabled;
    }

    return fontColors.body;
  }};

`;

export default Text;
