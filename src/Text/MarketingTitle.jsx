import React from 'react';
import MarketingText from './MarketingText';
import { theme } from '../Theme';

const MarketingTitle = ({ text, isHeading, children, style = {} }) => {
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

  const mergedStyle = Object.assign({}, titleStyle, style);

  return (
    <div style={mergedStyle}>
      <MarketingText type={titleType}>
        {text}
      </MarketingText>
      {children}
    </div>
  );
};

export default MarketingTitle;
