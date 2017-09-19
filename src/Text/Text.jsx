import React from 'react';
import { lighten } from '../Theme/colorManipulator';

const TextStyle = {
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: lighten('#000000', 0.11),
  },
  heading: {
    fontSize: '16px',
    fontWeight: 600,
    color: lighten('#000000', 0.11),
  },
  button: {
    fontSize: '14px',
    color: lighten('#000000', 0.21),
  },
  body: {
    fontSize: '14px',
    color: lighten('#000000', 0.21),
  },
  caption: {
    fontSize: '12px',
    color: lighten('#000000', 0.45),
  },
  disable: {
    color: lighten('#000000', 0.40),
  },
  link: {
    fontSize: '12px',
    color: '#15a9a9',
  },
};

const Text = ({ type = 'body', children, style = {} }) => {
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

export default Text;
