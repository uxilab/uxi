import React from 'react';
import Tooltip from 'rc-tooltip';

const getTooltip = fullText => (
  <Tooltip
    overlay={<div style={{ maxWidth: '620px' }}>{fullText}</div>}
  >
    <span>&nbsp;<small style={{ textDecoration: 'underline' }}>(...)</small></span>
  </Tooltip>
);

const TruncatedText = ({ text = '', children, max = 150, withViewMoreLink = false, style }) => {
  let tooltip = null;
  let truncatedText = (children && children instanceof String)
    ? children
    : text;

  if (text.length > max) {
    truncatedText = text.slice(0, 144);
    tooltip = withViewMoreLink ? getTooltip(text) : null;
  }

  return (
    <div style={style}>
      {truncatedText}
      {tooltip}
    </div>
  );
};

export default TruncatedText;
