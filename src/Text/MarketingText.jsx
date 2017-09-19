import React from 'react';
import { lighten } from '../Theme/colorManipulator';

const fontFamilly = '\'Fira Sans\', sans-serif';

const TextStyle = {
  title: {
    fontFamilly,
    fontSize: '30px',
    fontWeight: 'bold',
    color: lighten('#000000', 0.11),
  },
  heading: {
    fontSize: '18px',
    fontFamilly,
    fontWeight: 600,
    color: lighten('#000000', 0.11),
  },
  button: {
    fontSize: '14px',
    color: lighten('#000000', 0.21),
  },
  body: {
    fontSize: '16px',
    color: lighten('#000000', 0.21),
  },
};

const MarketingText = ({ type = 'body', children, style = {} }) => {
  const typeLowerCase = type.toLowerCase();
  const correctStyling = TextStyle[typeLowerCase];
  const mergedStyle = Object.assign({}, correctStyling || TextStyle.body, style);

  if (type === 'paragraph') {
    return (
      <p style={mergedStyle}>
        {children}
      </p>
    );
  }

  return (
    <span style={mergedStyle}>
      {children}
    </span>
  );
};

export default MarketingText;
