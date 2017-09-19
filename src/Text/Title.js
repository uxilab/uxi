import React from 'react';
import Text from './Text';
import { theme } from '../Theme';

const Title = ({ text, isHeading, children }) => {
  let titleType = 'title';
  let titleStyle = {
    padding: theme.padding.title,
  };

  if (isHeading) {
    titleType = 'heading';
    titleStyle = {
      padding: theme.padding.heading,
    };
  }

  return (
    <div style={titleStyle}>
      <Text type={titleType}>
        {text}
      </Text>
      {children}
    </div>
  );
};

export default Title;
