import React from 'react';
import Text from './Text';
/**
 * TODO: Some of thos compos still use context or import the theme directly, fix it
 */
import { theme } from '../Theme';

const Title = ({ text, isHeading, children, style = {} }) => {
  let titleType = 'title';
  let titleStyle = {
    padding: theme.padding.title,
  };

  if (isHeading) {
    titleType = 'heading';
    titleStyle = {
      padding: theme.margin.heading,
    };
  }

  const mergedStyle = Object.assign({}, titleStyle, style);

  return (
    <div style={mergedStyle}>
      <Text type={titleType}>
        {text}
      </Text>
      {children}
    </div>
  );
};

export default Title;
